# 📬 Automatische Auslieferung per Make.com

**Ziel:** Sobald jemand den Twin Blueprint bei Stripe bezahlt, bekommt er/sie
automatisch eine Mail mit den Produktdateien — ohne dass ihr etwas tun müsst,
auch nachts um 3.

**Warum überhaupt eine Automation?** Die Dateien dürfen **nicht** einfach auf der
Website liegen (dann könnte sie jeder ohne Kauf herunterladen). Deshalb:
Kauf → Stripe meldet den Kauf an Make → Make schickt die Mail. Die
Danke-Seite (`/#/danke`) bestätigt nur den Kauf, sie liefert bewusst nichts aus.

**Kosten:** Make-Gratisplan (1.000 Operationen/Monat) reicht. Ein Verkauf =
ca. 3 Operationen → ~300 Verkäufe/Monat sind gratis abgedeckt.

---

## Überblick — so sieht das fertige Szenario aus

**Ein einziges Szenario liefert alle 3 Produkte aus** — kein Szenario pro Produkt
nötig (spart deine Gratis-Szenarien). Ein **Router** verzweigt nach Produkt:

```
[1] Stripe: Watch Events        → hört auf "checkout.session.completed"
        ↓
[2] Router                      → verzweigt nach bezahltem Produkt
   ├─[Filter A: amount = Preis A] → Drive: PDF A  → Mail mit PDF A
   ├─[Filter B: amount = Preis B] → Drive: PDF B  → Mail mit PDF B
   └─[Filter C: amount = Preis C] → Drive: PDF C  → Mail mit PDF C
        ↓
[optional] Google Sheets: Add a Row → Käuferliste für euch
```

> Jeder Router-Zweig trägt den Filter `payment_status = paid` **plus** die
> Produkt-Unterscheidung (Betrag oder Produkt-ID). Details in Schritt 2.

---

## Schritt 0: Vorbereitung (einmalig)

1. **Produktdateien fertig machen.** Alles, was Käufer bekommen (Trainingsplan,
   Ernährungsguide, Tracker …) als **eine ZIP-Datei** oder als einzelne PDFs.
   > 💡 Empfehlung: eine einzige ZIP oder eine einzige PDF. Je weniger Anhänge,
   > desto seltener landet die Mail im Spam. **Max. 20 MB gesamt** — größere
   > Dateien nicht anhängen, sondern per Drive-Link ausliefern (siehe Variante B
   > in Schritt 4).
2. **Google Drive:** Ordner `Twin Blueprint – Auslieferung` anlegen, Dateien
   hochladen. Der Ordner bleibt **privat** — Make greift über euren Account zu.
3. **Make-Account** anlegen auf [make.com](https://www.make.com) (Region EU
   wählen — DSGVO).
4. **Absender-Adresse** festlegen. Am besten `kontakt@testotwins.de` (kommt mit
   der Domain, siehe `deploy.md` Schritt 4). Eine `@gmail.com`-Adresse geht auch,
   wirkt aber unprofessioneller und landet öfter im Spam.

---

## Schritt 1: Stripe-Trigger einrichten

1. In Make: **Create a new scenario** → als erstes Modul **Stripe** suchen →
   **Watch Events** wählen.
2. **Connection → Add:**
   - Stripe-Dashboard öffnen → *Entwickler → API-Schlüssel* →
     **eingeschränkten Schlüssel erstellen** (nicht den geheimen Schlüssel!).
   - Name: `Make Auslieferung`. Berechtigungen: **nur Lesen** für
     *Checkout Sessions*, *Customers*, *Events*. Alles andere auf "Keine".
   - Diesen `rk_...`-Schlüssel in Make einfügen.
   > ⚠️ Der Schlüssel muss zum richtigen Modus passen: zum Testen den
   > **Test-Modus-Schlüssel**, für echte Verkäufe den **Live-Schlüssel**. Das
   > sind zwei verschiedene Schlüssel — beim Go-Live tauschen!
3. **Event Type:** `checkout.session.completed` auswählen.
4. Auf **OK** und einmal **Run once** klicken — Make wartet jetzt auf ein Event.

---

## Schritt 2: Router — ein Zweig pro Produkt

Damit **ein** Szenario alle 3 Produkte ausliefert, kommt direkt hinter Stripe ein
**Router**, der nach dem gekauften Produkt verzweigt.

1. Modul hinzufügen → **Flow Control → Router**, direkt hinter das Stripe-Modul.
2. Vom Router gehen jetzt Zweige ab. **Pro Produkt einen Zweig** anlegen (Modul an
   den Router hängen → Kette aus Drive + Mail, siehe Schritt 3–4).
3. **Auf jedem Zweig** klickst du auf den Verbindungspfeil (den kleinen
   Schraubenschlüssel) → **Set up a filter** und trägst **zwei** Bedingungen ein:

   | Bedingung | Feld | Operator | Wert |
   |---|---|---|---|
   | 1 (bei allen gleich) | `{{1.data.object.payment_status}}` | Text: Equal to | `paid` |
   | 2 (pro Produkt anders) | `{{1.data.object.amount_total}}` | Numeric: Equal to | Bruttopreis in **Cent** |

   > ⚠️ **Weil ihr Steuer aktiv habt:** Nutzt `amount_total` (= der Brutto-Betrag,
   > den der Kunde zahlt = eure runden Preise). **NICHT `amount_subtotal`** — das
   > ist mit aktiver Steuer der *Netto*-Betrag und keine runde Zahl mehr (12 € inkl.
   > 19 % wären z. B. ~1008 statt 1200), der Filter würde nie matchen.

   > **Eure 3 Pakete** (Werte für den `amount_total`-Filter, in Cent):
   > - Paket 1 „Muskelaufbau Essentials" (12 €) → `1200`
   > - Paket 2 „Advanced" (30 €) → `3000`
   > - Paket 3 „Premium" (50 €) → `5000`
   >
   > Live-Payment-Links:
   > - Paket 1 → `https://buy.stripe.com/7sYeVe09xfGx6Ni3KkcjS00`
   > - Paket 2 → `https://buy.stripe.com/6oU5kEbSfamdb3yft2cjS01`
   > - Paket 3 → `https://buy.stripe.com/fZudRa7BZ1PH4FaeoYcjS02`
   >
   > ⚠️ Live-Betrieb: Der Stripe-Trigger in Make braucht jetzt den **Live**-Key
   > (`rk_live_…`), nicht den Test-Key — sonst sieht Make die echten Käufe nicht.

   > ⚠️ **Promo-Codes + `amount_total` beißen sich:** `amount_total` sinkt bei
   > Rabatt → dann matcht kein Zweig und der Käufer bekommt nichts. Wenn ihr im
   > Live-Betrieb wirklich Promo-Codes nutzt, ist der einzige rabatt- UND
   > steuersichere Weg der Filter nach **Price-ID** (braucht ein Extra-Stripe-Modul,
   > das die Line-Items nachlädt). Sagt Oliver Bescheid, dann baut er das um.

**Warum der `paid`-Filter?** Stripe feuert das Event auch bei Zahlarten, die erst
später bestätigt werden (z. B. Klarna/Lastschrift in Prüfung). Ohne diesen Filter
würdet ihr ausliefern, bevor das Geld sicher ist.

> ⚠️ **Wenn zwei Produkte denselben Preis haben**, reicht auch `amount_total`
> nicht zur Unterscheidung. Dann muss nach der **Price-ID** (`price_...`) gefiltert
> werden — die ist pro Produkt eindeutig und ändert sich durch nichts. Haken:
> Stripe legt die Line-Items **nicht** automatisch in den Webhook, dafür braucht es
> ein zusätzliches Stripe-Modul, das die Session-Details nachlädt. Sag mir Bescheid,
> falls das bei euch so ist — dann baue ich den Filter passend um. (Bei euch nicht
> nötig, da alle 3 Preise verschieden sind.)

---

## Schritt 3: Produktdatei holen (pro Router-Zweig)

Schritt 3 + 4 baust du **auf jedem der 3 Zweige** einmal — jeder Zweig holt „seine"
Datei und schickt „seine" Mail. (Am schnellsten: einen Zweig fertig bauen, dann per
Rechtsklick → **Clone** duplizieren und in der Kopie nur Datei + Betrag-Filter ändern.)

Am Zweig anhängen → **Google Drive → Download a File**.

- **Connection:** euer Google-Konto verbinden.
- **Enter a File ID / Select from list:** die ZIP bzw. PDF **dieses Produkts** aus
  dem Auslieferungs-Ordner auswählen.

> Wenn ein Produkt aus mehreren Dateien besteht: dieses Modul im Zweig mehrfach
> einfügen (eins pro Datei) und in Schritt 4 alle als Anhänge eintragen.

---

## Schritt 4: Die Mail verschicken

### Variante A (empfohlen): Datei im Anhang

Modul hinzufügen → **Email → Send an Email** (oder **Gmail → Send an Email**,
wenn ihr Google Workspace nutzt).

- **To:** `{{1.data.object.customer_details.email}}`
- **Subject:** `Dein [PRODUKTNAME] ist da 💪` (pro Zweig den passenden Produktnamen)
- **Content type:** HTML
- **Attachments → Add item:**
  - *File name:* `[Produktname].zip` (bzw. `.pdf`)
  - *Data:* das Datenfeld des **Drive-Moduls in DIESEM Zweig** anklicken
    (nicht `{{3.data}}` abtippen — nach dem Clonen hat jedes Modul eine eigene ID,
    also immer den grünen Chip aus dem direkt davorstehenden Drive-Modul ziehen).

**Mailtext** (kopierbar, Platzhalter in `[eckigen Klammern]` ersetzen):

```html
<p>Yo {{1.data.object.customer_details.name}},</p>

<p>willkommen im Team. Dein <strong>Twin Blueprint</strong> hängt an dieser Mail —
lad ihn dir am besten direkt auf dein Handy oder deinen Rechner.</p>

<p><strong>Womit du anfängst:</strong> such dir im Split-Guide den Plan aus, der
zu deinen Trainingstagen passt. Den Rest liest du in Ruhe nach — du musst nicht
alles auf einmal durchziehen.</p>

<p>Fragen? Antworte einfach auf diese Mail, wir lesen alles.</p>

<p>Let's go.<br>
Luca &amp; Finn</p>

<hr>
<p style="font-size:12px;color:#666">
Bestellung: {{1.data.object.id}}<br>
Betrag: 12,00 € (inkl. USt.)<br>
Finn Falluh Pimentel · Juri-Gagarin-Ring 156, 99084 Erfurt · Testotwinss@gmail.com<br>
Mit dem Kauf hast du dem sofortigen Beginn der Bereitstellung zugestimmt;
dein Widerrufsrecht ist damit erloschen (§ 356 Abs. 5 BGB).
</p>
```

> Den **Betrag** pro Paket-Zweig fest eintippen: `12,00 €` / `30,00 €` / `50,00 €`.
> Für das **To**-Feld hat sich bewährt:
> `{{ifempty(1.data.object.customer_details.email; 1.data.object.customer_email)}}`

> ⚖️ Der Fußzeilen-Block ist **nicht optional**: Absenderangaben + der
> Widerrufs-Hinweis müssen mit Impressum und Widerrufsbelehrung der Website
> übereinstimmen. Text ändert ihr also bitte an **beiden** Stellen.

### Variante B: Wenn die Dateien größer als 20 MB sind

Statt Anhang einen zeitlich begrenzten Link:

1. Schritt 3 ersetzen durch **Google Drive → Create a Shareable Link**
   (Zugriff: *Jeder mit dem Link*, Rolle: *Betrachter*).
2. Im Mailtext statt Anhang: `<a href="{{3.webViewLink}}">Twin Blueprint öffnen</a>`

> ⚠️ Nachteil: Der Link ist weitergebbar. Bei einem 29-€-Produkt akzeptabel,
> aber der Anhang (Variante A) ist die sauberere Lösung.

---

## Schritt 5 (optional, empfohlen): Käuferliste

Modul hinzufügen → **Google Sheets → Add a Row** in ein Blatt
`Twin Blueprint Käufer` mit den Spalten:

| Datum | Name | E-Mail | Betrag | Stripe-ID |
|---|---|---|---|---|
| `{{formatDate(now; "DD.MM.YYYY HH:mm")}}` | `{{1.data.object.customer_details.name}}` | `{{1.data.object.customer_details.email}}` | `{{1.data.object.amount_total / 100}}` | `{{1.data.object.id}}` |

> 🔒 **DSGVO:** Diese Tabelle enthält personenbezogene Daten. Nicht öffentlich
> teilen, Zugriff nur für euch beide. Stripe hat die Daten ohnehin — die Tabelle
> ist nur eure bequeme Übersicht. Wenn ihr sie nicht wirklich braucht: weglassen.

---

## Schritt 6: Fehler-Benachrichtigung (wichtig!)

Wenn die Mail mal nicht rausgeht, sollt **ihr** das erfahren — nicht der Kunde,
der 20 Minuten wartet.

1. Rechtsklick auf das Mail-Modul → **Add error handler** → **Resume**.
2. Als Handler-Modul: **Email → Send an Email**
   - **To:** eure eigene Adresse
   - **Subject:** `⚠️ Twin Blueprint: Auslieferung fehlgeschlagen`
   - **Content:** `Kunde: {{1.data.object.customer_details.email}} — Fehler: {{4.error.message}}`
3. Zusätzlich in den **Szenario-Einstellungen**: *Sequential processing* an und
   unter eurem Make-Profil → *Notifications* die E-Mail-Benachrichtigung bei
   deaktivierten Szenarien aktivieren.

---

## Schritt 7: Stripe mit der Danke-Seite verbinden

Damit Käufer nach der Zahlung auf `/#/danke` landen:

1. Stripe-Dashboard → **Payment Links** → euren Link → *Bearbeiten*
2. **Nach der Zahlung** → *Kunden auf eine Website weiterleiten*
3. URL eintragen: `https://EURE-DOMAIN.de/#/danke`

*(Das mache ich beim Go-Live mit — steht so auch in `deploy.md` Schritt 7.)*

---

## Schritt 8: Testen — bevor es live geht

**Im Stripe-Test-Modus** (kein echtes Geld):

1. Make-Szenario auf **ON** stellen (Schalter links unten).
2. Auf der Website den Kauf-Button klicken, im Checkout die Stripe-Testkarte
   nutzen: `4242 4242 4242 4242`, beliebiges künftiges Datum, beliebige CVC.
   Als E-Mail **eure eigene** eintragen.
3. Prüfen:
   - [ ] Landet ihr auf der Danke-Seite?
   - [ ] Kommt die Mail an — und **wie schnell**?
   - [ ] Ist der Anhang vollständig und lässt er sich öffnen?
   - [ ] Landet die Mail im Posteingang oder im **Spam**? (auch mit einer
         GMX-/Web.de-/Outlook-Adresse testen, nicht nur Gmail!)
   - [ ] Steht in der Fußzeile das Richtige?
   - [ ] Taucht die Zeile in der Käufer-Tabelle auf?
4. Erst wenn alles passt: In Make die Stripe-Connection auf den
   **Live-Schlüssel** umstellen und noch einmal mit einem echten 29-€-Kauf
   testen (Geld erstattet ihr euch danach in Stripe selbst).

> ⚠️ **Häufigster Fehler:** Szenario steht nach dem Bauen auf OFF. Dann bezahlen
> Leute und bekommen nichts. Nach jeder Änderung prüfen, dass der Schalter auf
> **ON** steht.

---

## Wenn die Mail im Spam landet

Häufigstes Problem bei automatischen Mails. Reihenfolge zum Abarbeiten:

1. **Eigene Domain als Absender** statt `@gmail.com`.
2. **SPF/DKIM** für die Domain einrichten — mache ich beim Domain-Setup mit.
3. **Keine Link-Wüste:** wenige Links, kein „KLICK HIER JETZT", keine
   Wort-in-GROSSBUCHSTABEN-Schreie im Betreff.
4. Auf der Danke-Seite steht bereits der Hinweis „schau im Spam nach" — deshalb
   ist die Seite so gebaut.

---

## Was passiert, wenn Make mal ausfällt?

Nichts geht verloren: Stripe hat die Bestellung, ihr seht sie im Dashboard.
Die Danke-Seite nennt eine Support-Adresse, an die sich Käufer wenden können —
dann schickt ihr die Dateien einmal von Hand. Die Fehler-Mail aus Schritt 6
sagt euch normalerweise vorher Bescheid.

> **TODO KUNDE:** Support-Adresse in `src/components/DankePage.vue`
> (`SUPPORT_MAIL`) eintragen — identisch zur Impressum-Adresse.

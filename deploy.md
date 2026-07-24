# 🚀 Go-Live-Anleitung — Twin Blueprint Website

**Für:** Luca & Finn (Testotwins)
**Von:** Oliver
**Stand:** Juli 2026

Die Website ist fertig gebaut und getestet. Damit sie live gehen kann, brauche ich ein paar Dinge von euch. Diese Anleitung führt euch Schritt für Schritt durch — nichts davon ist kompliziert, das meiste sind Anmeldungen und Bestätigungen. **Am Ende steht eine Checkliste, was ihr mir schicken müsst.**

---

## Schritt 1: Domain kaufen (~10–15 €/Jahr)

Die Domain ist eure Web-Adresse, z. B. `testotwins.de` oder `twinblueprint.de`.

1. Geht zu einem Domain-Anbieter.
2. Sucht eure Wunsch-Domain. Empfehlung: kurz, ohne Bindestriche, `.de` (deutsche Zielgruppe) — z. B. `testotwins.de`. Falls vergeben: `.com`, `.fit` oder `twinblueprint.de` prüfen.
3. Konto anlegen, Domain kaufen. **Ihr braucht NUR die Domain** — keine Zusatzpakete (kein "Homepage-Baukasten", kein E-Mail-Paket nötig, keine "SiteLock"-Extras). Falls angeboten: **WHOIS-/Domain-Privacy aktivieren** (meist kostenlos), damit eure Privatadresse nicht öffentlich im Domain-Register steht.
4. Rechnung/Zahlung: geht auch mit PayPal oder Karte.

> 💡 Der Domain-Anbieter ist NICHT das Hosting. Das Hosting (wo die Website-Dateien liegen) übernehme ich — siehe Schritt 2.

## Schritt 2: Hosting — macht ihr nichts, mache ich

Die Seite ist eine schnelle statische Website. Ich deploye sie auf **Cloudflare Pages** (professionelles Hosting, kostenlos **auch für kommerzielle Projekte**, unbegrenzter Traffic, automatisches SSL/HTTPS-Zertifikat). Ihr müsst dafür nichts kaufen.

> ℹ️ Warum nicht Vercel/GitHub Pages? Deren Gratis-Pläne erlauben keine kommerzielle Nutzung — bei einer Verkaufsseite wäre das ein Verstoß gegen die Nutzungsbedingungen. Cloudflare Pages erlaubt es ausdrücklich.

Ich brauche dafür nur **Zugriff auf die DNS-Einstellungen eurer Domain** (das ist die Verknüpfung Domain ↔ Website). Zwei Möglichkeiten:

- **Variante A (einfach):** Ihr schickt mir die Zugangsdaten zu eurem Domain-Konto (IONOS/Namecheap) — **sicher übertragen, siehe Schritt 6!**
- **Variante B (sauberer):** Ihr legt mich in eurem Domain-Konto als Mitbenutzer/Delegierten an (bei IONOS: "Benutzerverwaltung", bei Namecheap: "Share Access") mit meiner E-Mail.

## Schritt 3: Stripe auf Live-Modus bringen (Zahlungen)

Aktuell läuft der Kauf-Button im **Test-Modus** (es fließt kein echtes Geld). Für echte Verkäufe:

1. Loggt euch bei [dashboard.stripe.com](https://dashboard.stripe.com) ein.
2. Schließt die **Konto-Verifizierung** ab (Stripe fragt: Identität/Ausweis, Geschäftsdaten, **Bankkonto** für Auszahlungen). Als Einzelperson geht das als "Einzelunternehmer" — dafür ggf. vorher Gewerbe anmelden (siehe Hinweis unten ⚠️).
3. **Ladet mich als Team-Mitglied ein** statt mir Schlüssel zu schicken: *Einstellungen → Team → Mitglied einladen* → meine E-Mail, Rolle **"Entwickler"**. ⚠️ **Schickt mir NIEMALS den "Geheimschlüssel" (sk_live_...) per WhatsApp/Mail** — die Team-Einladung reicht mir völlig und ist sicher.
4. Aktiviert unter *Einstellungen → Zahlungsmethoden*: **Karte, PayPal, Klarna** (die Seite bewirbt diese Methoden — was ihr nicht aktiviert, nehme ich vom Text runter).
5. Die **3 Live-Kauf-Links** (je ein Link pro Paket: Essentials 20 €, Advanced 30 €, Premium 50 €), jeweils mit der Widerrufs-Checkbox, erstelle dann ich (gleiche Konfiguration wie die getesteten Test-Links).

> ⚠️ **Steuern/Gewerbe:** Wer digitale Produkte verkauft, handelt gewerblich → Gewerbeanmeldung + Steuern (ggf. Kleinunternehmerregelung § 19 UStG). Das klärt ihr bitte kurz mit einem Steuerberater — dauert einen Termin, erspart massiven Ärger.

## Schritt 4: Rechtliche Angaben liefern (Pflicht!)

Auf der Website sind Impressum, Datenschutzerklärung und Widerrufsbelehrung vorbereitet, aber mit Platzhaltern. Ohne diese Daten darf die Seite nicht live gehen (Abmahnrisiko). Ich brauche:

| Was | Wofür | Hinweis |
|---|---|---|
| Vollständiger Name des Betreibers | Impressum | Wer von euch (oder ein Elternteil/eine GbR) betreibt die Seite offiziell? |
| Ladungsfähige Anschrift | Impressum | ⚠️ Eure **Privatadresse wird öffentlich sichtbar**. Wenn ihr das nicht wollt: Impressum-Service / Anmietadresse (z. B. "Impressum-Schutz"-Dienste, ~10–20 €/Monat) |
| E-Mail-Adresse | Impressum + Support | Am besten eine eigene wie `kontakt@testotwins.de` (richte ich mit der Domain ein) |
| USt-IdNr. | Impressum | Nur falls vorhanden |
| Logfile-Speicherdauer | Datenschutz | Sage ich euch, sobald das Hosting steht — müsst ihr nichts tun |

Außerdem: Die Rechtstexte sind sorgfältige Vorlagen — **lasst sie vor dem Livegang einmal von einem Anwalt oder einem Dienst wie eRecht24/IT-Recht-Kanzlei prüfen** (~100–200 €, einmalig).

## Schritt 5: Inhalte bestätigen

Bitte geht diese Punkte durch und gebt mir zu jedem ein Ja/Nein bzw. eine Korrektur:

1. **Das Produkt selbst:** Die fertigen Dateien (Trainingsplan-PDF, Ernährungsguide etc.), die Käufer nach dem Kauf bekommen — **die brauche ich von euch**, sonst gibt's nichts auszuliefern.
2. **Natural-Aussage:** Die FAQ beantwortet "Seid ihr natural?" mit Ja. Bestätigt mir das bitte explizit — es steht dann als eure Aussage im Netz.
3. **Twin-Ansätze:** Die Seite sagt "Luca = High Volume, Finn = High Intensity". Stimmt die Zuordnung? Wie trainiert ihr wirklich?
4. **Paket-Inhalte:** Die Seite verkauft 3 Pakete — **Essentials** (20 €, Grundlagen-Guide: 3 Grundprinzipien, Anfängerfehler), **Advanced** (30 €, + Ernährungsfahrplan), **Premium** (50 €, + fertiger Trainingsplan). Paket 1 habt ihr inhaltlich bestätigt; bitte bestätigt mir noch den genauen Umfang von Paket 2 & 3, damit die Feature-Listen stimmen.
5. **Social-Links:** Eure TikTok- und YouTube-URLs (aktuell nur Instagram verlinkt).
6. **Kundenstimmen:** Die Seite geht ohne Testimonials live (erfundene Bewertungen sind abmahnbar). Sobald ihr echte Rückmeldungen von Käufern habt (Screenshot + Einverständnis der Person), baue ich die Sektion ein — sie ist schon vorbereitet.

## Schritt 6: Automatische Auslieferung einrichten (Make.com)

Wenn jemand bezahlt, soll die Mail mit euren Dateien **automatisch** rausgehen — auch nachts. Das übernimmt ein kleines Automations-Tool namens **Make.com** (Gratisplan reicht: ~300 Verkäufe/Monat kostenlos).

Die Dateien dürfen bewusst **nicht** auf der Website liegen — sonst könnte sie jeder ohne Kauf herunterladen. Deshalb: Kauf → Stripe meldet es an Make → Make schickt die Mail. Die Danke-Seite bestätigt nur den Kauf.

👉 **Die komplette Klick-für-Klick-Anleitung steht in [`docs/make-automation.md`](docs/make-automation.md).** Wir können das auch zusammen in einem Call durchgehen, dauert ~30 Minuten.

Von euch brauche ich dafür:
- Die **fertigen Produktdateien** (am besten eine ZIP oder eine PDF, unter 20 MB)
- Einen **Make.com-Account** (Region EU) — oder ihr ladet mich ein
- Ein **Google-Konto**, in dessen Drive die Dateien liegen

## Schritt 7: Zugangsdaten SICHER an mich schicken

**Bitte keine Passwörter im Klartext per WhatsApp, Instagram-DM oder E-Mail.** So geht's richtig — eine der Optionen:

- **Beste Option:** Gar keine Passwörter schicken — mich stattdessen überall als Team-Mitglied/Mitbenutzer einladen (geht bei Stripe, IONOS und Cloudflare; jeweils meine E-Mail-Adresse eintragen).
- **Wenn es doch Zugangsdaten sein müssen:** Einen Einmal-Link-Dienst nutzen, z. B. **[Bitwarden Send](https://bitwarden.com/products/send/)** oder **onetimesecret.com** — Passwort dort eintragen, Link schicken, Link zerstört sich nach dem Öffnen. Benutzername und Link gern getrennt (z. B. Benutzername per DM, Secret-Link per Mail).
- Wo verfügbar: **Zwei-Faktor-Authentifizierung (2FA) aktivieren** — vor allem bei Stripe und dem Domain-Konto. Da liegt später euer Geld.

### 📋 Checkliste — das schickt/gebt ihr mir:

- [ ] Domain gekauft — welcher Anbieter + Domain-Name
- [ ] Zugang zum Domain-Konto (Mitbenutzer-Einladung **oder** Zugangsdaten via Einmal-Link)
- [ ] Stripe: Konto verifiziert + ich bin als Team-Mitglied (Rolle "Entwickler") eingeladen
- [ ] Stripe: PayPal + Klarna aktiviert (oder Bescheid geben, dass nicht)
- [ ] Impressum-Daten: Name, Anschrift, E-Mail (+ ggf. USt-IdNr.)
- [ ] Bestätigungen aus Schritt 5 (Natural, Twin-Typen, Paket-Inhalte, Social-Links)
- [ ] Die Produkt-Dateien (das, was Käufer bekommen) — als ZIP/PDF, unter 20 MB
- [ ] Make.com-Account angelegt (Region EU) + Google-Konto für die Dateiablage
- [ ] Support-E-Mail-Adresse für die Danke-Seite (identisch zum Impressum)

## Schritt 8: Go-Live (mache ich)

Sobald alles da ist, mache ich in ca. einem Tag:

1. Platzhalter in den Rechtstexten füllen
2. Seite auf Cloudflare Pages deployen + Domain verbinden (SSL/HTTPS automatisch)
3. Die 3 Live-Payment-Links in Stripe erstellen (je Paket, inkl. Widerrufs-Checkbox) und einbauen, Weiterleitung auf die Danke-Seite setzen
4. Social-Preview (og:image) auf die echte Domain umstellen
5. Make-Szenario auf den Stripe-**Live**-Schlüssel umstellen und einschalten
6. **Einen echten Test-Kauf pro Paket** mit euch zusammen durchführen (je 1 × 20 € / 30 € / 50 € an euch selbst, wird erstattet) — inkl. Check, dass pro Paket die richtige Auslieferungs-Mail ankommt und nicht im Spam landet
7. Danach: Link in die Instagram-Bio — und die Seite verkauft.

---

*Fragen? Einfach melden — lieber einmal zu viel gefragt als eine Abmahnung kassiert.* 💪

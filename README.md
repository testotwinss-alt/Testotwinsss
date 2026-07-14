# Twin Blueprint — Testotwins Landingpage

Verkaufs-Landingpage für den "Twin Blueprint" der Testotwins (Luca & Finn).
Vue 3 + Vite, Single-Page, kein Backend. Kauf läuft über einen Stripe **Payment Link**.

## Setup

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Dev-Server (http://localhost:5173)
npm run build     # Production-Build nach dist/
npm run preview   # Build lokal ansehen
```

## Stripe-Kauf einrichten

Kein Backend nötig — die Seite nutzt einen Stripe **Payment Link** (nur eine URL).

1. Im [Stripe-Dashboard](https://dashboard.stripe.com) unter **Produktkatalog** ein Produkt
   anlegen: Name `Twin Blueprint`, Preis `29,00 EUR`, Typ **Einmalig**.
2. Unter **Payment Links → Neuer Link** das Produkt auswählen, Zahlungsmethoden
   (PayPal / Klarna / Karte) aktivieren, Link erstellen.
3. Die generierte URL (`https://buy.stripe.com/...`) kopieren.
4. `.env.example` zu `.env` kopieren und den Wert eintragen:
   ```
   VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/DEINSLUG
   ```
5. `npm run build` (bzw. Dev-Server neu starten).

**Fallback:** Ist kein **gültiger** Link gesetzt (leer oder noch ein Platzhalter
wie `DEIN_LINK`/`XXXXXXXX`), scrollen alle Kauf-CTAs sanft zur Preis-Box
(`#checkout`) statt auf eine tote Stripe-Seite zu führen. Die Validierung liegt in
`src/config.js`, die Kauf-Logik zentral in `src/composables/useBuy.js`; alle CTAs
nutzen `src/components/BuyButton.vue`.

## Inhalte ändern

Die Inhalte liegen als Daten-Arrays direkt in den jeweiligen Komponenten:

| Was | Datei |
|-----|-------|
| Testimonials (Text, Namen, Initialen) | `src/components/Testimonials.vue` |
| Preis, Bonus-Stack, Ankerpreise | `src/components/PricingBox.vue` |
| Feature-Cards | `src/components/FeatureGrid.vue` |
| FAQ-Fragen & Antworten | `src/components/FaqSection.vue` |
| Twin-USP (Luca / Finn) | `src/components/TwinUsp.vue` |
| Design-Tokens (Farben, Typo, Spacing) | `src/style.css` (`:root`) |

Bilder liegen in `public/img/` und werden im Build unverändert nach `dist/img/`
kopiert (Referenz im Code als `/img/...`).

## Schriftarten (DSGVO)

Anton und Inter werden **lokal selbst gehostet** (`public/fonts/`, eingebunden in
`src/fonts.css`). Es gibt **keine Verbindung zu Google Fonts** beim Seitenaufruf —
keine `<link>`- oder `preconnect`-Tags auf `fonts.googleapis.com`/`fonts.gstatic.com`.
Inter ist ein Variable Font: eine einzige woff2-Datei deckt die Gewichte 400–700 ab.
Zum Aktualisieren: neue woff2 (latin-Subset) nach `public/fonts/` legen und die URLs
in `src/fonts.css` anpassen.

## Rechtliches

Drei Rechtsseiten sind als leichte Hash-Routen umgesetzt (kein `vue-router`):

| Seite | Route | Datei |
|-------|-------|-------|
| Impressum | `#/impressum` | `src/components/ImpressumPage.vue` |
| Datenschutz | `#/datenschutz` | `src/components/DatenschutzPage.vue` |
| Widerruf | `#/widerruf` | `src/components/WiderrufPage.vue` |

Nur Hashes mit Prefix `#/` sind Routen; normale Anker wie `#checkout` funktionieren
weiter als Scroll-Anker (Logik in `src/composables/useHashRoute.js`).

**Vor dem Livegang zwingend erledigen:**

- Alle grün markierten **Platzhalter** (`[VOR- UND NACHNAME DES BETREIBERS]`,
  `[STRASSE HAUSNR.]`, `[PLZ ORT]`, `[E-MAIL-ADRESSE]`, ggf. `[USt-IdNr.]`,
  `[HOSTING-ANBIETER]`) in Impressum, Datenschutz und Widerruf mit echten Daten füllen.
- Jede Rechtsseite trägt oben den Kommentar
  `<!-- RECHTLICHER HINWEIS: Vorlage, ... von Anwalt/Fachdienst prüfen lassen -->` —
  die Texte sind **Vorlagen** und müssen anwaltlich/fachlich geprüft werden.

**Cookie-Banner:** Bewusst **nicht** vorhanden. Die Seite setzt keine Cookies und
lädt beim Aufruf keine Drittdienste (Fonts lokal, Stripe erst nach Klick). Der
Abschnitt „Keine Cookies, kein Tracking" in der Datenschutzerklärung deckt das ab.
> Falls später Analytics oder ein Meta-Pixel ergänzt werden, ist ein
> Consent-Banner (Opt-in) erforderlich.

## Struktur

```
index.html              Vite-Entry (Meta-Tags, #app-Mount; keine Google-Fonts-Tags)
src/
  main.js               App-Bootstrap (lädt fonts.css + style.css)
  App.vue               Routing (Landing vs. Rechtsseiten) + Scroll-Reveal
  fonts.css             Lokale @font-face-Deklarationen (Anton, Inter)
  style.css             Globales Stylesheet inkl. Design-Tokens
  config.js             STRIPE_PAYMENT_LINK aus .env (+ Validierung)
  composables/
    useBuy.js           Gemeinsame Kauf-Logik (Link vs. Scroll-Fallback)
    useReveal.js        IntersectionObserver-Scroll-Reveal (routen-reaktiv)
    useHashRoute.js     Leichtes Hash-Routing für Rechtsseiten
  components/           SFCs (Landing-Sektionen + 3 Rechtsseiten)
public/img/             Bilder
public/fonts/           Selbst gehostete woff2-Schriften
docs/design-brief.md    Verbindlicher Design-Brief
```

---

Ergebnisse individuell. Dieses Programm ist ein Natural-Fitnessprogramm und
empfiehlt keinerlei leistungssteigernde Substanzen.

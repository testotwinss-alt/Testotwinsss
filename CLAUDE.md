# Testotwins — Twin Blueprint Landingpage

Verkaufs-Landingpage für das digitale Fitness-Programm "Twin Blueprint" (29 € einmalig) der Instagram-Zwillinge **Luca & Finn (@testotwins08)**. Vorbild: adamyu.com (Creator-Verkaufsseite). Zielgruppe: 14–25, deutschsprachig, Traffic aus Instagram-Link-in-Bio → **mobile-first**.

## Stack & Befehle

- **Vue 3 + Vite**, reines JavaScript (kein TS, kein Router, kein Pinia). Diese Entscheidung ist fix — Oliver hat eine statische HTML-Version explizit verwerfen lassen.
- `npm run dev` / `npm run build` / `npm run preview`
- Kein Lint-/Test-Setup vorhanden. Verifikation = Build + Browser-Check.

## Struktur

- `index.html` — Vite-Entry (Meta/OG-Tags, `lang="de"`, theme-color `#0B0A09`)
- `src/App.vue` — bindet alle Sektions-Komponenten + Hash-Routing (Landing vs. Rechtsseiten)
- `src/components/` — eine SFC pro Sektion (HeroSection, PricingBox, FaqSection, …) + Rechtsseiten (ImpressumPage, DatenschutzPage, WiderrufPage). Inhalte liegen als Daten-Arrays in den SFCs.
- `src/composables/` — `useBuy.js` (zentrale Kauf-Logik), `useReveal.js` (Scroll-Reveal), `useHashRoute.js` (Routing nur für `#/`-Hashes; `#checkout` bleibt Scroll-Anker!)
- `src/style.css` — **alle Design-Tokens in `:root`**, Komponenten nutzen globale Klassen
- `src/fonts.css` + `public/fonts/` — Anton + Inter **lokal gehostet (DSGVO!)** — niemals Google-Fonts-Links einbauen
- `public/img/` — echte Instagram-Fotos der Twins (kuratiert)
- `docs/design-brief.md` — verbindlicher Design-Brief
- `deploy.md` — Go-Live-Anleitung für den Kunden
- `.claude/memory/learnings.md` — Team-Gedächtnis des Agent-Flows (nur CEO-Agent schreibt)

## Stripe / Kauf-Flow

- Kauf via **Stripe Payment Link** aus `VITE_STRIPE_PAYMENT_LINK` (`.env`). Kein Backend, keine Stripe-JS-Lib.
- `src/config.js` validiert den Link (`isValidPaymentLink`); ungültig/leer → CTAs scrollen zu `#checkout`.
- Der Payment Link MUSS `consent_collection.terms_of_service=required` + custom_text mit der Widerrufs-Erlöschens-Erklärung (§ 356 Abs. 5 BGB) haben — sonst kollidiert der Checkout mit der WiderrufPage. Beim Live-Link identisch konfigurieren.
- ⚠️ **`.env` NIEMALS löschen** — sie enthält den aktiven Payment Link und ist Teil des Auslieferungszustands (der Build läuft MIT `.env`). Secret Keys (`sk_...`) gehören nirgendwo ins Repo.

## Design

- Dark, Gym-Ästhetik, **Ember-Orange-Palette** (Kundenentscheid Juli 2026): bg `#0B0A09` (warmes Schwarz), Akzent `#FF7A1F`, hot `#FF3B30` nur für Warn-/Streich-Signale. Alles über Tokens in `style.css` — keine Hex-Werte in Komponenten.
- Akzentfarbe SPARSAM: CTAs + max. 1 Highlight-Wort pro Viewport. Fotos nur in `aspect-ratio`-Wrapper + `object-fit:cover`. Details: `docs/design-brief.md`.
- Genau 2 Fonts (Anton Display / Inter Body), `prefers-reduced-motion` überall respektieren.

## Wording-Regeln (WICHTIG — "0% Fantasie")

Kundenvorgabe: **Keine erfundenen Fakten, Zahlen oder Bewertungen.** Konkret:
- Keine fiktiven Streichpreise/Preis-Anker (UWG-Abmahnrisiko), keine Fake-Knappheit ("nur für die ersten X"), keine erfundenen Kundenzahlen oder Erfahrungsjahre.
- Testimonials-Sektion bleibt deaktiviert, bis ECHTE Kundenstimmen (mit Einverständnis) vorliegen.
- Belegte Fakten (Stand Juli 2026): Luca & Finn, 18, Zwillinge, @testotwins08, 16.800+ Follower, 512 Beiträge, Abi 2026, Tren-Twins-Treffen, FIBO 2026, eigener YouTube-Kanal.
- Zu bestätigende Claims sind im Code mit `<!-- TODO KUNDE: ... -->` markiert (Garantie, Natural-Aussage, Twin-Typ-Zuordnung, Zahlungsmethoden, Produktumfang).
- Gen-Z-Ton ("mogged", "Broski") ist gewollt — auf der Landing, NICHT auf den Rechtsseiten.

## Rechtliches

- Rechtsseiten unter `#/impressum`, `#/datenschutz`, `#/widerruf` — Platzhalter in `[ECKIGEN KLAMMERN]`, vor Livegang füllen (siehe `deploy.md`).
- **Kein Cookie-Banner** — die Seite setzt keine Cookies und lädt keine Drittdienste. Falls jemals Analytics/Pixel dazukommen: erst Consent-Lösung einbauen.
- Keine Steroid-/PED-Promotion. #trentwins ist ein Meme der Twins, das Programm ist als natural positioniert.

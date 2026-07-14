# DESIGN-BRIEF — Testotwins "Twin Blueprint" Landingpage

**Head of Design → Senior Dev. Verbindlich. Weiche nur mit Begründung ab.**

Stack: statisch, `index.html` + `styles.css`, kein Framework, Vanilla-JS nur für Accordion/Sticky-Logik. Deutsch. Mobile-first (360–430px Primär-Viewport, Instagram-Traffic).

---

## 0. Aesthetic-Richtung

Dunkles, aggressives Gym-Locker-Room-Feeling — NICHT clean-corporate, sondern "Underground-Iron-Paradise trifft Gen-Z-Streetwear". Tiefschwarzer Hintergrund, harte Kontraste, EIN glühend-oranger Signal-Akzent (Ember), der wie ein Highlighter über die wichtigsten Wörter und alle CTAs knallt. Schwere, verdichtete Display-Headlines in GROSSBUCHSTABEN (Kondensiert, italic-lean-Energie), dazu eine ruhige, gut lesbare Grotesk für Fließtext. Es soll sich anfühlen wie ein Produkt von zwei 18-Jährigen mit Geschmack — roh, selbstbewusst, hoher Energiepegel — und trotzdem verkaufssicher und vertrauenswürdig (echtes Impressum, echte Zahlungs-Trust-Signale). Der Gegenpol zu Bootstrap-Sauberkeit: Grain, harte Kanten neben einem einzigen weichen Radius, viel Schwarz, Akzent SPARSAM als Belohnungs-Trigger.

---

## 1. Design-Tokens

Als `:root`-Variablen in `styles.css` anlegen und konsequent nutzen. Keine Hardcode-Hex im Markup.

### Farben
```css
:root{
  /* Base */
  --bg:            #0B0A09;   /* Seiten-Hintergrund, warmes Fast-Schwarz (Ember-Palette) */
  --surface:       #171412;   /* Cards, Boxen */
  --surface-2:     #1F1B18;   /* erhöhte Elemente, Accordion offen, Hover-Card */
  --border:        #2A2420;   /* 1px Linien, Card-Ränder */
  --border-strong: #3D352E;   /* betonte Trennlinien */

  /* Text */
  --text:          #F4F5F6;   /* Headlines, Primärtext */
  --muted:         #A0A4AD;   /* Fließtext sekundär, Labels */
  --faint:         #6B6F78;   /* Captions, Footer, Feinprint */

  /* Akzent — Ember Orange (glühendes Eisen). SPARSAM. [Update 2026-07: Palette per Kundenentscheid von Limette auf Ember Orange umgestellt] */
  --accent:        #FF7A1F;   /* Primär-CTA, Highlights, aktive States */
  --accent-hover:  #FF9142;   /* CTA Hover */
  --accent-press:  #E8650A;   /* CTA aktiv/pressed */
  --on-accent:     #0B0A09;   /* Text AUF dem orangen Button = schwarz */
  --accent-soft:   rgba(198,255,61,.12); /* Glow/Fill-Untergrund */

  /* Sekundär-Signal (nur für Rabatt/Dringlichkeit) */
  --hot:           #FF3B30;   /* durchgestrichener Alt-Preis, "nur noch"-Urgency */

  /* Utility */
  --star:          #FFC53D;   /* Testimonial-Sterne */
  --scrim:         rgba(10,11,13,.72); /* Bild-Overlay dunkel */
}
```

**Akzent-Regel:** Orange erscheint pro Viewport maximal an 1–2 Stellen prominent (CTA + ein Highlight-Wort). Wird es Deko, verliert es seine Signalwirkung → dann ist es ein Fail. Fließtext ist NIE orange.

### Typografie
Google Fonts, `display=swap`, nur benötigte Gewichte (Performance). Zwei Familien:

- **Display / Headlines:** `"Anton", "Archivo Black", sans-serif` — Anton (nur 400, ein Gewicht, sehr kompakt & schwer). Immer `text-transform:uppercase`, `letter-spacing:-0.01em`, `line-height:0.95`.
- **Body / UI:** `"Inter", system-ui, sans-serif` — Gewichte 400 / 500 / 600 / 700. `letter-spacing` normal, `line-height:1.55` im Fließtext.

Fallback ohne Fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

**Type-Scale (mobile → desktop via `clamp`):**
```
--fs-hero:  clamp(2.75rem, 11vw, 6rem);   /* Hero-Headline, Anton */
--fs-h1:    clamp(2rem, 8vw, 3.5rem);     /* Sektion-Headlines, Anton */
--fs-h2:    clamp(1.5rem, 5.5vw, 2.25rem);/* Sub-Headlines, Anton */
--fs-h3:    1.125rem;                      /* Card-Titel, Inter 700 */
--fs-lead:  clamp(1.05rem, 3.6vw, 1.25rem);/* Intro-Absätze, Inter 500 */
--fs-body:  1rem;                          /* Fließtext, Inter 400 */
--fs-sm:    0.875rem;                      /* Labels, Meta */
--fs-xs:    0.75rem;                       /* Feinprint, Badges, Eyebrows */
```
Eyebrow-Label (über Headlines): Inter 700, `text-transform:uppercase`, `letter-spacing:0.16em`, `--fs-xs`, Farbe `--accent`.

### Spacing-Skala (8px-Basis)
```
--sp-1:4px  --sp-2:8px  --sp-3:12px  --sp-4:16px  --sp-5:24px
--sp-6:32px --sp-7:48px --sp-8:64px  --sp-9:96px  --sp-10:128px
```
Sektions-Rhythmus vertikal: mobil `padding-block: var(--sp-8)` (64px), ab 768px `var(--sp-9)` (96px). Hero und Final-CTA dürfen mehr (bis --sp-10).

### Layout
- Container: `max-width: 640px` für Text-Sektionen (Lesbarkeit, Landingpage-Fokus), `max-width: 1080px` für Grids/breite Blöcke. Zentriert, `padding-inline: var(--sp-5)` (24px) mobil, `var(--sp-4)` (16px) unter 380px.
- Breakpoints: `480px` (kleine Phones→große Phones), `768px` (Tablet: 2-Spalten), `1024px` (Desktop-Feinschliff). Mobile-first, `min-width`-Media-Queries.
- Grids: `display:grid; gap: var(--sp-4)`. Feature-Blöcke 1 Spalte mobil → 2 Spalten ab 768px. Physique-Grid siehe §2.

### Radius
```
--r-sm:8px   --r-md:14px   --r-lg:20px   --r-pill:999px
```
Ein konsistenter Card-Radius `--r-md`. Buttons `--r-pill`. Bilder `--r-lg`. Keine gemischten Radien innerhalb einer Sektion.

### Schatten & Effekte
```
--shadow-card: 0 2px 8px rgba(0,0,0,.4);
--shadow-pop:  0 12px 40px rgba(0,0,0,.55);           /* Preis-Box, Sticky-Bar */
--glow-accent: 0 0 0 1px var(--accent), 0 8px 30px rgba(198,255,61,.28); /* CTA-Fokus/Hover */
```
Optionaler Film-Grain: sehr subtiler Noise über `--bg` via `body::before` (SVG-Noise, `opacity:.04`, `pointer-events:none`, `mix-blend-mode:overlay`). Nice-to-have, nicht kritisch. Keine bunten Verläufe außer dem definierten Dark-Scrim auf Bildern.

---

## 2. Layout pro Sektion (Reihenfolge fix)

Grundregel Hochformat-Bilder: NIE verzerren. Immer `object-fit:cover` in einem `aspect-ratio`-Wrapper mit `overflow:hidden` + `border-radius`.

1. **Sticky-Header** — Höhe 56px. Links Wortmarke „TESTOTWINS" (Anton, klein) + Avatar `profile.jpg` (32px, `border-radius:--r-pill`). Rechts Mini-CTA-Pill „29€ sichern →" (orange). `position:sticky; top:0; z-index:50`. Hintergrund `rgba(10,11,13,.85)` + `backdrop-filter:blur(10px)`, unten 1px `--border`. Erscheint sofort (nicht erst nach Scroll).

2. **Hero** — Vollbild-Feeling, `min-height: 92svh`. BG `pump.jpg` (1080×1920, perfekt) via `object-fit:cover`, darüber vertikaler Scrim-Gradient (`transparent` oben → `--scrim` → `#0A0B0D` unten), damit die Headline unten sitzt und nahtlos in die nächste Sektion übergeht. Inhalt unten ausgerichtet (`justify-content:flex-end`). Aufbau: Eyebrow „NATURAL • KEIN ABO • EINMAL 29€" → Hero-Headline „VON SKINNY ZU MOGGED — DER PLAN, MIT DEM WIR ES GEBAUT HABEN." (Wort „MOGGED" bekommt orangen Highlight — siehe §4 Highlight-Marker) → Lead-Sub → Primär-CTA + Trust-Microcopy darunter → kleine Trust-Zeile „★ 16.800+ folgen den Twins". WICHTIG: `pump.jpg` hat evtl. eigenes Text-Overlay im Bild — positioniere den Scrim/Text so, dass unser Text im unteren Drittel auf sauberem Dunkel sitzt; obere Bildhälfte bleibt Foto.

3. **Social-Proof-Bar** — schmaler Streifen direkt unter Hero, `--surface`, oben/unten 1px `--border`. 3 Items inline (`flex`, mobil scrollbar oder umbrechend): „16.800+ Follower" · „500+ Beiträge" · Badge mit `trentwins.jpg`-Mini + „#Trentwins". Zahlen in Anton, Label in `--faint`.

4. **Story/About** — 1 Spalte mobil, ab 768px 2 Spalten (Bild links, Text rechts). Bild `abitur.jpg` (1080×1440, 3:4) im `aspect-ratio:3/4`-Wrapper, `--r-lg`. Text: Eyebrow „WER WIR SIND", H2, Fließtext (18, frisch Abi, 100% natural, warum wir das machen). Ehrlicher, persönlicher Ton.

5. **Problem-Sektion** — kein Bild nötig. Zentrierter Text-Block, `--surface`-Karten-Feeling optional. Liste der Pains (YouTube-Chaos, widersprüchliche Ratschläge, kein Plan, kein Progress) als 3–4 Zeilen mit `✕` in `--hot`. Überleitung zur Lösung.

6. **6 Feature-Blöcke** — Grid 1 Spalte mobil → 2 Spalten ab 768px, `gap:--sp-4`. Jede Card: `--surface`, `--r-md`, `border:1px --border`, `padding:--sp-5`. Aufbau: Nummer-Chip („01"–„06", Anton, orange, klein) oder Icon → Card-Titel (`--fs-h3`) → Kurztext (`--muted`). KEINE gleich hohen langweiligen Boxen — variiere durch die Nummer-Chips + eine Card darf `border-color:--accent` als Akzent-Highlight bekommen (z. B. „Twin-Vergleich"). Themen: Splits, Ernährung, Progressive Overload, Mindset, Cardio/Recomp, Twin-Vergleich.

7. **Produkt-Einblick** — „so sieht's drin aus". 2 Bilder nebeneinander (mobil untereinander): `kfa-post.jpg` (640×853, 3:4) und `progress.jpg`. **`progress.jpg` (640×1136) hat schwarze Letterbox-Balken** → NICHT in einen abweichenden Aspect zwingen (Balken würden doppelt/schief). Lösung: in einen `aspect-ratio:9/16`-Wrapper mit `object-fit:cover` legen UND leicht überskaliert (`scale(1.02)`) zentrieren, sodass die dünnen Balken aus dem sichtbaren Rahmen laufen; alternativ Wrapper-BG `#000`, damit etwaige Restbalken als bewusster Rahmen wirken statt als Fehler. Beide Bilder identischer `--r-lg`.

8. **Physique-Grid** — der visuelle Money-Shot. 4 Hochformat-Bilder: `rage.jpg`, `summer.jpg`, `jacked.jpg`, `kapitel.jpg`. Layout: mobil 2×2-Grid (`grid-template-columns:1fr 1fr; gap:--sp-2`), ab 768px 4 nebeneinander ODER ein Masonry-artiges 2-4-Layout. Alle in `aspect-ratio:2/3`, `object-fit:cover`, minimaler `gap`, `--r-md`. Dezenter Hover: `scale(1.03)` + Scrim leicht aufhellen. Text-Overlays in den Bildern akzeptieren — sie sind Teil des Contents, also NICHT durch eigene Overlays verdecken.

9. **Twin-USP** — „2 COACHES, 1 PREIS". Zentrale Headline, darunter 2 gespiegelte Cards nebeneinander (ab 480px, sonst gestapelt): links „TEAM LUCA — High Volume", rechts „TEAM FINN — High Intensity". Zwischen den Cards ein oranges „VS"-/„+"-Badge (Kreis, `--accent`, schwarzer Text, `--r-pill`). Jede Card mit kleinem Avatar-Ausschnitt, Namen (Anton), Stil-Tag, 2–3 Bullet-Stichpunkten. Diese Sektion ist der USP → darf `--surface-2` + oranger Akzentrand.

10. **Testimonials** — 6–8 Cards. Mobil horizontaler Snap-Scroller (`overflow-x:auto; scroll-snap-type:x mandatory`, Cards `min-width:80%`), ab 768px 2–3-Spalten-Grid. Card: `--surface`, `--r-md`, `padding:--sp-5`. Aufbau: 5 Sterne (`--star`), Zitat (`--text`, `--fs-body`), unten Name + kleiner Kontext (Inter 600 / `--faint`). Platzhalter-Avatar = Initialen-Kreis in `--surface-2` (KEINE Fake-Fotos). Deutsche Namen.

11. **Preis-Box** — der Conversion-Kern, visuell hervorgehoben. Zentriert, `max-width:480px`, `--surface-2`, `border:1px --border-strong`, `--r-lg`, `--shadow-pop`, oben ein Akzent-Streifen/Badge „LAUNCH-PREIS · NUR FÜR DIE ERSTEN 200" (`--accent-soft` BG, oranger Text). Preis-Zeile: „79€" durchgestrichen in `--hot`/`--faint` + groß „29€" (Anton, `--fs-hero`-nah) + „einmalig". Bonus-Stack als Liste mit orangen `✓`: Trainingsplan, Ernährungsguide, Tracker-Sheet, Community-Zugang, Formcheck — jeweils mit fiktivem Einzelwert durchgestrichen für Ankereffekt. Großer Primär-CTA full-width. Darunter Trust-Row: „Sichere Zahlung • Sofort-Zugang • Einmalzahlung, kein Abo" + Payment-Icons/Text.

12. **FAQ-Accordion** — 9 Fragen, `max-width:640px`. Jedes Item: `--surface`, `--r-md`, 1px `--border`, Frage-Zeile als `<button>` (Inter 600) + `+`/`−`-Indikator rechts (rotiert zu `×`/dreht 45°), Antwort in `--muted`. Nur EINES offen gleichzeitig optional. Inkl. ehrlicher Natural-Frage. Reines CSS via `<details>`/`<summary>` bevorzugt (kein JS nötig), sonst minimal-JS.

13. **Final-CTA** — Vollbild-BG `rage.jpg` (640×1138), `object-fit:cover`, dunkler Scrim `--scrim` drüber, `min-height:80svh`, Inhalt zentriert. Große Headline („MACH DEN ERSTEN SCHRITT" o. ä.), Primär-CTA, Trust-Microcopy. Emotionaler Abschluss vor Footer.

14. **Footer** — `--bg`, oben 1px `--border`. Wortmarke, Social-Links (IG @testotwins08 / TikTok / YouTube) als Text-Links `--muted`→`--text` Hover, Impressum-/Datenschutz-Platzhalter-Links (`--faint`), Copyright. Klein, ruhig.

15. **Sticky-Bottom-CTA-Bar (nur mobil, <768px)** — `position:fixed; bottom:0`, full-width, `--surface-2`, oben 1px `--border-strong`, `--shadow-pop`, `padding:--sp-3`. Links Preis-Mini („~~79€~~ **29€**"), rechts Primär-CTA-Pill „Jetzt sichern →". `z-index:60`. `env(safe-area-inset-bottom)` respektieren. Erscheint nach Scroll über den Hero hinaus (kleiner JS-IntersectionObserver ODER einfach immer sichtbar ab Scroll > Hero). Body braucht unten `padding-bottom`, damit Footer-Content nicht verdeckt wird.

---

## 3. CTA-Buttons

**Primär (`.btn-primary`):** BG `--accent`, Text `--on-accent` (schwarz), Inter 700, `--fs-body`, `padding:16px 28px`, `border-radius:--r-pill`, kein Border. Hover: BG `--accent-hover` + `--glow-accent` + `transform:translateY(-2px)`. Active: `--accent-press` + `translateY(0)`. `transition: all .18s ease`. Optional dezenter Pfeil „→", der bei Hover 4px nach rechts wandert. Full-width in Preis-Box/mobil, auto sonst.

**Sekundär (`.btn-secondary`):** transparent, `border:1px --border-strong`, Text `--text`. Hover: `border-color:--accent`, Text `--accent`, BG `--accent-soft`. Nur für Nebenaktionen (z. B. „Mehr erfahren"). Nie in Konkurrenz zum Primär-CTA.

**Header-Mini-CTA & Sticky-Bar-CTA:** Primär-Stil, kompakter (`padding:10px 18px`, `--fs-sm`).

Alle CTAs zeigen auf `#checkout`. `:focus-visible` mit sichtbarem Fokusring (`--glow-accent`) für A11y.

---

## 4. Komponenten-Specs

- **Highlight-Marker (`.hl`):** für einzelne Wörter in Headlines (z. B. „MOGGED", „29€"). Umsetzung: `background:linear-gradient(transparent 60%, var(--accent-soft) 60%)` (Textmarker-Effekt) ODER `color:var(--accent)`. Pro Headline max. 1 Wort. Nicht beides mischen.
- **Card (Basis):** `--surface`, `--r-md`, `border:1px --border`, `padding:--sp-5`, `--shadow-card`. Hover (nur wo interaktiv): `border-color:--border-strong`, leichtes `translateY(-2px)`.
- **Testimonial-Card:** siehe §2.10. Sterne als Unicode „★★★★★" in `--star`. Zitat mit dezenten typografischen Anführungszeichen.
- **Accordion-Item:** `<details>` + `<summary>` (list-style entfernt). Geschlossen `--surface`, offen `--surface-2`. Indikator `+`→dreht 45° zu `×` via `transition:transform .2s`. `summary` Cursor pointer, `padding:--sp-4`.
- **Badge/Chip:** `--r-pill`, `--fs-xs`, `padding:4px 12px`, `text-transform:uppercase`, `letter-spacing:.08em`. Varianten: Akzent (`--accent-soft` BG + oranger Text), Neutral (`--surface-2` + `--muted`), Hot (`--hot` Text, für Urgency).
- **Preis-Box:** siehe §2.11. Höchste visuelle Priorität nach Hero — meiste `--shadow-pop`, einziger Ort mit deutlichem Akzent-Rahmen (orange).
- **Nummer-Chip (Features):** Anton, `--accent`, `--fs-lead`, in eigener Zeile über dem Titel.

---

## 5. Animation & Interaktion

Alles CSS-first, performant, `transform`/`opacity` only (kein `top`/`width`-Animieren).
- **Scroll-Reveal:** Sektionen faden dezent ein (`opacity 0→1`, `translateY(16px→0)`, `.5s ease`) via IntersectionObserver + `.is-visible`-Klasse. Sparsam, ein Effekt, nicht jede Zeile einzeln.
- **Hover:** nur Desktop (`@media (hover:hover)`). Cards/Bilder `scale(1.02–1.03)`, CTA wie §3.
- **Transitions:** Standard `.18s ease` (UI), `.4–.5s ease` (Reveal). Accordion `.2s`.
- **Sticky-Bar:** ein/ausblenden via `transform:translateY(100%)` + `transition`.
- **Reduced Motion:** `@media (prefers-reduced-motion:reduce)` → alle Transforms/Reveals deaktivieren, Inhalte sofort sichtbar.
- Kein Auto-Karussell, keine Parallax-Libs, keine JS-Animationsframeworks.

---

## 6. NO-GOs (nicht verhandelbar)

1. **Kein generisches Bootstrap-/Template-Look:** keine 3-gleichen-Karten-Reihen in Standardblau, keine Default-Schatten-überall, keine abgerundeten Standard-Buttons mit Verlauf. Wenn es nach Template aussieht → Fail.
2. **Akzent-Orange NICHT verstreuen:** kein oranger Fließtext, keine orangen Icons überall, keine orangen Ränder an jeder Card. Orange = Signal für CTA + max. 1 Highlight pro Viewport.
3. **Bilder nie verzerren / nie manuell croppen:** immer `aspect-ratio`-Wrapper + `object-fit:cover`. Text-Overlays IN den Bildern nicht mit eigenen Overlays/Text verdecken. `progress.jpg`-Letterbox wie §2.7 lösen, nicht ignorieren.
4. **Keine hellen Sektionen / kein Light-Mode-Bruch:** durchgehend dark. Kein weißer Sektions-Hintergrund als „Auflockerung".
5. **Kein Font-Wildwuchs:** genau 2 Familien (Anton + Inter), definierte Gewichte. Keine dritte Deko-Schrift.
6. **Keine Fake-Testimonial-Fotos & keine erfundenen Zertifikate:** Platzhalter-Initialen, klar als solche. Keine Steroid-/PED-Andeutung irgendwo — „100% natural" ist Kernbotschaft.
7. **Sticky-Elemente dürfen Content nicht verdecken:** `scroll-margin-top` für Anker (`#checkout` etc.) wegen Sticky-Header, `padding-bottom` am Body wegen Sticky-Bar.

---

## Der eine Satz an den Senior Dev

**Verkacke nicht die Zurückhaltung beim Orange und die Bild-Behandlung — das glühende `--accent` darf pro Screen nur am CTA + einem Highlight-Wort brennen, und jedes Hochformat-Foto kommt ausschließlich in einen `aspect-ratio`-Wrapper mit `object-fit:cover`; genau daran entscheidet sich, ob die Seite nach eigenständigem Creator-Produkt oder nach Template aussieht.**

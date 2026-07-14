<script setup>
// FAQ leicht editierbar als Daten-Array.
const faqs = [
  {
    q: 'Ist das für Anfänger geeignet?',
    a: 'Absolut. Wir starten bei den Basics und bauen alles logisch auf. Es gibt Splits ab 2× die Woche für kompletten Einstieg — du brauchst kein Vorwissen, nur den Willen anzufangen.'
  },
  {
    q: 'Brauche ich ein Gym oder geht auch Home-Training?',
    a: 'Der Blueprint ist auf das Gym optimiert, weil du dort am schnellsten Fortschritte machst. Für den Start zuhause geben wir dir Alternativen mit minimalem Equipment — spätestens für ernsthaften Aufbau empfehlen wir aber ein Studio.'
  },
  {
    q: 'Wie schnell sehe ich Progress?',
    a: 'Ehrliche Antwort: Das hängt von dir ab — von Konstanz, Ernährung, Schlaf und deiner Ausgangslage. Wir versprechen dir keinen festen Zeitplan und keine Garantie. Was du bekommst, ist ein System mit klarer Struktur. Es ist ein Marathon, kein Sprint — es funktioniert, wenn du dranbleibst.'
  },
  {
    q: 'Muss ich teuer essen und Supplements kaufen?',
    a: 'Nein. Unsere Ernährungsprotokolle sind bewusst budget-tauglich — mit normalen Lebensmitteln aus jedem Supermarkt. Supplements sind optional; wir sagen dir ehrlich, welche wenigen sich lohnen und welche Geldverschwendung sind.'
  },
  // TODO KUNDE: Aussage von Luca & Finn bestätigen lassen
  {
    q: 'Seid ihr natural?',
    a: 'Ja — zu 100% natural. Alles, was du auf unseren Fotos siehst, ist über Jahre mit Training, Ernährung und Konstanz gebaut. Der „#trentwins"-Spruch ist ein Meme und ein Augenzwinkern, keine Aussage über unser Training. Dieses Programm ist ausdrücklich ein Natural-Programm und empfiehlt keinerlei leistungssteigernde Mittel.'
  },
  {
    q: 'Ich bin Schüler/Azubi und hab wenig Zeit — passt das?',
    a: 'Perfekt sogar. Wir haben das Ganze selbst neben dem Abi gebaut. Es gibt kurze, intensive Splits ab 45 Minuten und 2–3 Einheiten die Woche — der High-Intensity-Weg von Finn ist genau dafür gemacht.'
  },
  {
    q: 'Wie bekomme ich das Produkt?',
    a: 'Komplett digital. Direkt nach dem Kauf bekommst du eine E-Mail mit deinem Sofort-Zugang zu allen Inhalten. Kein Warten, kein Versand — du kannst noch heute loslegen.'
  },
  // TODO KUNDE: Zahlungsmethoden in Stripe aktivieren, sonst Aufzählung kürzen
  {
    q: 'Welche Zahlungsmethoden gibt es?',
    a: 'PayPal, Klarna (Rechnung/Ratenkauf) sowie Kredit- und Debitkarte. Die Zahlung läuft verschlüsselt und sicher über unseren Zahlungsdienstleister Stripe.'
  },
  {
    q: 'Funktioniert das auch für Frauen?',
    a: 'Ja. Die Prinzipien von Training, Progressive Overload und Ernährung gelten geschlechtsunabhängig. Wir geben dir Anpassungen für Recomp und Fokus-Muskelgruppen, sodass du das Programm auf deine Ziele zuschneiden kannst.'
  }
]
</script>

<template>
  <section class="section faq reveal" aria-labelledby="faq-title">
    <div class="container">
      <div class="section-head section-head--center">
        <span class="eyebrow">Noch Fragen?</span>
        <h2 class="h1" id="faq-title">Ehrliche Antworten.</h2>
      </div>
      <div class="faq__list">
        <details v-for="(item, i) in faqs" :key="i" class="faq__item">
          <summary class="faq__q">
            {{ item.q }}
            <span class="faq__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq__a">{{ item.a }}</div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Bestätigungsseite nach erfolgreicher Zahlung (Stripe success_url).
 *
 * Liefert NICHT die PDF aus — das übernimmt die Mail-Automation (Make),
 * damit die Datei nie öffentlich im Web liegt. Diese Seite bestätigt nur
 * den Kauf und erklärt, was als Nächstes passiert.
 *
 * In Stripe hinterlegen: Payment Link -> "Nach der Zahlung" ->
 * "Kunden auf eine Website weiterleiten" -> https://DEINE-DOMAIN.de/#/danke
 */

const SUPPORT_MAIL = 'Testotwinss@gmail.com'

const steps = [
  {
    n: '01',
    title: 'Check dein Postfach',
    text: 'Deine Mail mit dem kompletten Twin Blueprint ist unterwegs — in der Regel innerhalb weniger Minuten.'
  },
  {
    n: '02',
    title: 'Schau auch im Spam nach',
    text: 'Erste Mails von neuen Absendern landen gern im Spam- oder Werbung-Ordner. Zieh sie einfach ins Hauptpostfach.'
  },
  {
    n: '03',
    title: 'Leg los',
    text: 'Split aussuchen, Ernährungsguide überfliegen, Tracker aufsetzen. Du musst nicht alles auf einmal lesen — fang mit dem Split an.'
  }
]
</script>

<template>
  <section class="section legal danke">
    <div class="container">
      <span class="eyebrow">Zahlung erfolgreich</span>

      <h1>Willkommen im Team, <span class="hl hl--solid">Broski</span>.</h1>

      <p class="lead danke__lead">
        Dein Kauf ist durch. Der Twin Blueprint kommt per Mail an die Adresse,
        die du im Checkout angegeben hast.
      </p>

      <ol class="danke__steps">
        <li v-for="s in steps" :key="s.n" class="danke__step">
          <span class="danke__num" aria-hidden="true">{{ s.n }}</span>
          <div>
            <h2 class="danke__step-title">{{ s.title }}</h2>
            <p>{{ s.text }}</p>
          </div>
        </li>
      </ol>

      <div class="danke__help">
        <h2>Mail nicht angekommen?</h2>
        <p>
          Wenn nach 15 Minuten immer noch nichts da ist (auch nicht im Spam),
          schreib uns kurz an
          <a :href="`mailto:${SUPPORT_MAIL}`">{{ SUPPORT_MAIL }}</a>
          — am besten mit der Mailadresse, mit der du bezahlt hast. Wir schicken
          dir die Dateien dann von Hand.
        </p>
      </div>

      <p class="danke__legal">
        Mit dem Kauf hast du dem sofortigen Beginn der Bereitstellung zugestimmt;
        dein Widerrufsrecht ist damit erloschen (§ 356 Abs. 5 BGB).
        Details in der <a href="#/widerruf">Widerrufsbelehrung</a>.
      </p>

      <a class="btn btn-secondary danke__home" href="#/">Zurück zur Startseite</a>
    </div>
  </section>
</template>

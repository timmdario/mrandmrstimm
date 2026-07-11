export const wedding = {
  couple: {
    bride: 'Malika',
    groom: 'Dario',
    fullName: 'Malika & Dario',
    groomFullName: 'Dario Timm',
    monogram: 'M&D',
  },
  date: {
    display: '30. Mai 2027',
    iso: '2027-05-30',
    day: 'Samstag',
    weekend: {
      friday: '29. Mai 2027',
      saturday: '30. Mai 2027',
      sunday: '31. Mai 2027',
    },
  },
  tagline: 'Wir freuen uns, diesen besonderen Tag mit euch zu teilen',
  venue: {
    name: 'FarmInn Kakerbeck',
    city: 'Wittingen',
    state: 'Niedersachsen',
    fullAddress: 'Kakerbeck, Wittingen, Niedersachsen',
  },
  schedule: [
    {
      icon: '💒',
      title: 'Zeremonie',
      time: '14:00 Uhr',
      place: 'FarmInn Kakerbeck',
      detail: 'Wittingen, Niedersachsen',
    },
    {
      icon: '🥂',
      title: 'Empfang',
      time: 'Ab 16:00 Uhr',
      place: 'Innenhof & Garten',
      detail: 'auf dem Gelände',
    },
    {
      icon: '🎶',
      title: 'Fest & Feier',
      time: 'Ab 18:00 Uhr',
      place: 'FeierScheune',
      detail: 'bis spät in die Nacht',
    },
    {
      icon: '🍳',
      title: 'Frühstück',
      time: 'Sonntag, 09:00 Uhr',
      place: 'gemeinsam auf dem Hof',
      detail: '20 € pro Person',
    },
  ],
  venueCards: [
    {
      icon: '🏡',
      title: 'Die Location',
      text: 'Wir feiern unsere Hochzeit im <strong>FarmInn</strong> in Kakerbeck bei Wittingen. Die liebevoll restaurierte Hofanlage verbindet rustikalen Scheunencharme mit modernem Komfort.',
    },
    {
      icon: '📅',
      title: 'Das Wochenendkonzept',
      text: '<strong>Freitag:</strong> Anreise & gemeinsamer Abend<br><strong>Samstag:</strong> Trauung & Feier<br><strong>Sonntag:</strong> Frühstück & entspannter Ausklang',
    },
    {
      icon: '🦙',
      title: 'Besonderheiten',
      text: 'Auf FarmInn leben Alpakas und weitere Hoftiere. Die Alpakas können nach Absprache sogar für eure Hochzeitsfotos genutzt werden!',
    },
    {
      icon: '🅿️',
      title: 'Anreise & Parken',
      text: 'Kostenlose Parkplätze direkt auf dem Gelände (ca. 75 Plätze). Zusätzlich gibt es Stellplätze für Camper.',
    },
  ],
  faq: [
    {
      question: 'Wo findet die Hochzeit statt?',
      answer: 'Unsere Hochzeit feiern wir im <strong>FarmInn</strong> in Kakerbeck bei Wittingen. Die liebevoll restaurierte Hofanlage verbindet rustikalen Scheunencharme mit modernem Komfort und bietet ausreichend Platz zum Feiern, Übernachten und Entspannen.',
    },
    {
      question: 'Gibt es Übernachtungsmöglichkeiten?',
      answer: 'Ja. Direkt auf dem Gelände stehen verschiedene Unterkünfte mit insgesamt bis zu <strong>71 Schlafplätzen</strong> zur Verfügung. So können viele Gäste nach der Feier direkt vor Ort übernachten und am nächsten Morgen gemeinsam frühstücken.',
    },
    {
      question: 'Kann ich mit dem Auto anreisen?',
      answer: 'Ja. Auf dem Gelände befinden sich zahlreiche <strong>kostenfreie Parkplätze</strong> (ca. 75 reguläre + 30 weitere Stellplätze). Zusätzlich gibt es einige Stellplätze für Camper.',
    },
    {
      question: 'Gibt es eine freie Trauung?',
      answer: 'Ja. FarmInn bietet sowohl freie als auch kirchliche Trauungen an. Die Zeremonie kann im romantisch restaurierten <strong>Bullenstall</strong> oder – bei passendem Wetter – im <strong>Garten</strong> stattfinden.',
    },
    {
      question: 'Warum habt ihr euch für FarmInn entschieden?',
      answer: 'Uns hat besonders das <strong>Wochenendkonzept</strong> überzeugt. Familie und Freunde können bereits am Freitag anreisen, gemeinsam feiern und am Sonntag ohne Zeitdruck zusammen frühstücken. Außerdem steht die gesamte Anlage exklusiv nur unserer Hochzeitsgesellschaft zur Verfügung.',
    },
    {
      question: 'Gibt es vor Ort etwas Besonderes?',
      answer: 'Ja. Neben der historischen Scheune und dem weitläufigen Hof leben auf FarmInn auch <strong>Alpakas und weitere Hoftiere</strong>. Die Alpakas können nach Absprache sogar für Hochzeitsfotos genutzt werden.',
    },
    {
      question: 'Müssen wir nach der Feier direkt abreisen?',
      answer: 'Nein. Genau das ist einer der größten Vorteile der Location. Viele Gäste bleiben über Nacht, sodass der Sonntag ganz entspannt mit einem <strong>gemeinsamen Frühstück</strong> (20 € pro Person) ausklingen kann.',
    },
    {
      question: 'Ist die Location exklusiv für unsere Hochzeit reserviert?',
      answer: 'Ja. Während unseres Hochzeitswochenendes findet <strong>keine weitere Hochzeit</strong> auf FarmInn statt. Die gesamte Anlage gehört ausschließlich unserer Hochzeitsgesellschaft.',
    },
  ],
  rsvp: {
    intro: 'Bitte lasst uns wissen, ob ihr kommen könnt. Wir freuen uns auf jede Antwort!',
    deadline: '15. März 2027',
  },
  contact: {
    email: 'kontakt@example.de',
    address: 'Friesenstraße 42, 39108 Magdeburg',
  },
  impressum: {
    owner: 'Dario Timm',
    address: 'Friesenstraße 42, 39108 Magdeburg',
    email: 'kontakt@example.de',
  },
  emailjs: {
    publicKey: 'bsy7xvQ7fhd3udqmU',
    serviceId: 'service_3k4jtrq',
    templateId: 'template_vcgt7mo',
  },
  domain: 'mrandmrstimm.de',
} as const

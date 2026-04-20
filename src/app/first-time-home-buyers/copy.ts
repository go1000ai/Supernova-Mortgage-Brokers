export type Lang = "en" | "es";

type Bi = { en: string; es: string };

export const copy = {
  meta: {
    title: {
      en: "First-Time Homebuyer DPA Prequalification | Supernova Mortgage Brokers",
      es: "Pre-calificación DPA para Primeros Compradores | Supernova Mortgage Brokers",
    } as Bi,
    description: {
      en: "Find out which Florida down payment assistance program you qualify for. Up to $80,000 in assistance — Orange County DPA, Osceola DPA, Florida Bond, Chenoa Fund.",
      es: "Descubre a qué programa de asistencia para el pago inicial calificas en Florida. Hasta $80,000 — Orange County DPA, Osceola DPA, Florida Bond, Chenoa Fund.",
    } as Bi,
  },

  hero: {
    eyebrow: { en: "First-Time Homebuyer Program", es: "Programa para Primeros Compradores" } as Bi,
    titleA: { en: "Your Home,", es: "Tu Casa," } as Bi,
    titleB: { en: "With Help.", es: "Con Ayuda." } as Bi,
    subtitle: {
      en: "Access up to $80,000 in down payment assistance. Real programs available now — we guide you from consultation to closing.",
      es: "Accede hasta $80,000 en asistencia para tu down payment — programas reales disponibles ahora. Te guiamos desde la consulta hasta el cierre.",
    } as Bi,
    cta: { en: "Start Free Prequalification", es: "Comenzar Pre-calificación Gratis" } as Bi,
    ctaSecondary: { en: "See Programs", es: "Ver Programas" } as Bi,
  },

  value: {
    heading: { en: "How Supernova Helps You", es: "Cómo Supernova Te Ayuda" } as Bi,
    items: [
      {
        title: { en: "Live Prequalification", es: "Pre-calificación en Vivo" } as Bi,
        body: {
          en: "We analyze your case and tell you which programs you qualify for today.",
          es: "Analizamos tu caso y te decimos a qué programas calificas hoy.",
        } as Bi,
      },
      {
        title: { en: "No Cost, No Obligation", es: "Sin Costo, Sin Compromiso" } as Bi,
        body: {
          en: "100% free consultation with Florida DPA program experts.",
          es: "Consulta 100% gratuita con expertos en programas de asistencia de Florida.",
        } as Bi,
      },
      {
        title: { en: "From Prequalification to Closing", es: "De Pre-calificación a Cierre" } as Bi,
        body: {
          en: "We walk with you through the entire process, all the way to closing day.",
          es: "Te acompañamos en todo el proceso hasta el día del cierre.",
        } as Bi,
      },
    ],
  },

  programs: {
    heading: { en: "Available Assistance Programs", es: "Programas de Asistencia Disponibles" } as Bi,
    subheading: {
      en: "Four DPA programs. You may qualify for more than one — and some can be stacked.",
      es: "Cuatro programas DPA. Puedes calificar a más de uno — y algunos se combinan.",
    } as Bi,
    orange: {
      name: { en: "Orange County DPA", es: "Orange County DPA" } as Bi,
      location: { en: "Orlando", es: "Orlando" } as Bi,
      badges: [
        { en: "Forgivable", es: "Perdonable" } as Bi,
        { en: "First-Time Buyer", es: "1er Comprador" } as Bi,
      ],
      tiers: [
        { label: { en: "Very Low", es: "Muy Bajo" } as Bi, amount: "$70K" },
        { label: { en: "Low", es: "Bajo" } as Bi, amount: "$40K" },
        { label: { en: "Moderate", es: "Moderado" } as Bi, amount: "$10K" },
      ],
    },
    osceola: {
      name: { en: "Osceola County DPA", es: "Osceola County DPA" } as Bi,
      location: { en: "Kissimmee · St. Cloud", es: "Kissimmee · St. Cloud" } as Bi,
      badges: [
        { en: "0 Payments", es: "0 Pagos" } as Bi,
        { en: "Max $360K", es: "Max $360K" } as Bi,
      ],
      tiers: [
        { label: { en: "Very Low", es: "Muy Bajo" } as Bi, amount: "$80K" },
        { label: { en: "Low", es: "Bajo" } as Bi, amount: "$60K" },
        { label: { en: "Moderate", es: "Moderado" } as Bi, amount: "$40K" },
      ],
    },
    floridaBond: {
      name: { en: "Florida Bond", es: "Florida Bond" } as Bi,
      location: { en: "Statewide · Florida Housing", es: "Estatal · Florida Housing" } as Bi,
      badges: [
        { en: "Combinable", es: "Combinable" } as Bi,
        { en: "Deferred", es: "Deferred" } as Bi,
      ],
      tiers: [
        { label: { en: "3%–5% Loan", es: "3%–5% Loan" } as Bi, amount: "$80K" },
        { label: { en: "Min Score", es: "Score Min." } as Bi, amount: "640+" },
      ],
    },
    chenoa: {
      name: { en: "Chenoa Fund", es: "Chenoa Fund" } as Bi,
      location: { en: "National · No Income Limit", es: "Nacional · Sin Límite de Ingreso" } as Bi,
      badges: [
        { en: "Forgivable", es: "Perdonable" } as Bi,
        { en: "FHA", es: "FHA" } as Bi,
      ],
      tiers: [
        { label: { en: "Up to", es: "Hasta" } as Bi, amount: "5% DPA" },
        { label: { en: "Score From", es: "Score Desde" } as Bi, amount: "600+" },
      ],
    },
  },

  eligibility: {
    heading: { en: "Who Can Qualify?", es: "¿Quién Puede Calificar?" } as Bi,
    items: [
      { en: "No home ownership in the last 3 years", es: "No haber tenido casa en los últimos 3 años" } as Bi,
      { en: "Credit score from 600-620+ depending on program", es: "Score de crédito desde 600-620+ según el programa" } as Bi,
      { en: "Income within county limits (up to 120% AMI)", es: "Ingreso dentro de los límites del condado (hasta 120% AMI)" } as Bi,
      { en: "Complete a certified homebuyer course", es: "Completar curso de comprador certificado" } as Bi,
    ],
  },

  wizard: {
    sectionEyebrow: { en: "Free Prequalification Wizard", es: "Asistente de Pre-calificación Gratis" } as Bi,
    sectionHeading: { en: "Let's Find Your Program", es: "Encontremos Tu Programa" } as Bi,
    sectionSub: {
      en: "Answer a few quick questions — takes under 2 minutes.",
      es: "Responde unas preguntas rápidas — toma menos de 2 minutos.",
    } as Bi,
    stepLabel: { en: "Step", es: "Paso" } as Bi,
    stepOf: { en: "of", es: "de" } as Bi,
    back: { en: "Back", es: "Atrás" } as Bi,
    next: { en: "Next", es: "Siguiente" } as Bi,
    submit: { en: "See My Programs", es: "Ver Mis Programas" } as Bi,
    submitting: { en: "Submitting...", es: "Enviando..." } as Bi,

    questions: {
      primaryResidence: {
        q: { en: "Will this home be your primary residence?", es: "¿Será esta casa tu residencia principal?" } as Bi,
        options: [
          { value: "yes", en: "Yes, I'll live there", es: "Sí, viviré allí" },
          { value: "no", en: "No, it's an investment", es: "No, es una inversión" },
        ],
      },
      firstTimeBuyer: {
        q: { en: "Have you owned a home in the last 3 years?", es: "¿Has tenido casa en los últimos 3 años?" } as Bi,
        options: [
          { value: "no", en: "No, I haven't", es: "No, no he tenido" },
          { value: "yes", en: "Yes, I have", es: "Sí, he tenido" },
        ],
      },
      county: {
        q: { en: "Which county will you buy in?", es: "¿En qué condado vas a comprar?" } as Bi,
        options: [
          { value: "orange", en: "Orange County (Orlando)", es: "Orange County (Orlando)" },
          { value: "osceola", en: "Osceola County (Kissimmee · St. Cloud)", es: "Osceola County (Kissimmee · St. Cloud)" },
          { value: "other-fl", en: "Another Florida county", es: "Otro condado de Florida" },
          { value: "outside-fl", en: "Outside Florida", es: "Fuera de Florida" },
        ],
      },
      centralFlResidency: {
        q: {
          en: "Have you lived in Orange, Osceola, Lake, Polk, Brevard, Seminole, or Volusia county for 12+ months?",
          es: "¿Has vivido 12+ meses en Orange, Osceola, Lake, Polk, Brevard, Seminole o Volusia?",
        } as Bi,
        options: [
          { value: "yes", en: "Yes", es: "Sí" },
          { value: "no", en: "No", es: "No" },
        ],
      },
      householdSize: {
        q: { en: "How many people are in your household?", es: "¿Cuántas personas hay en tu hogar?" } as Bi,
        options: [
          { value: "1", en: "1", es: "1" },
          { value: "2", en: "2", es: "2" },
          { value: "3", en: "3", es: "3" },
          { value: "4", en: "4", es: "4" },
          { value: "5", en: "5 or more", es: "5 o más" },
        ],
      },
      income: {
        q: { en: "What's your annual household gross income?", es: "¿Cuál es tu ingreso bruto anual del hogar?" } as Bi,
        options: [
          { value: "under-50k", en: "Under $50,000", es: "Menos de $50,000" },
          { value: "50-80k", en: "$50,000 – $80,000", es: "$50,000 – $80,000" },
          { value: "80-120k", en: "$80,000 – $120,000", es: "$80,000 – $120,000" },
          { value: "over-120k", en: "Over $120,000", es: "Más de $120,000" },
        ],
      },
      credit: {
        q: { en: "What's your estimated credit score?", es: "¿Cuál es tu puntaje de crédito estimado?" } as Bi,
        options: [
          { value: "under-600", en: "Under 600", es: "Menos de 600" },
          { value: "600-619", en: "600 – 619", es: "600 – 619" },
          { value: "620-639", en: "620 – 639", es: "620 – 639" },
          { value: "640-plus", en: "640 or higher", es: "640 o más" },
        ],
      },
      price: {
        q: { en: "What's your target home price?", es: "¿Cuál es tu precio objetivo de casa?" } as Bi,
        options: [
          { value: "under-345k", en: "Under $345,000", es: "Menos de $345,000" },
          { value: "345-360k", en: "$345,000 – $360,000", es: "$345,000 – $360,000" },
          { value: "over-360k", en: "Over $360,000", es: "Más de $360,000" },
        ],
      },
      timeline: {
        q: { en: "When are you looking to buy?", es: "¿Cuándo buscas comprar?" } as Bi,
        options: [
          { value: "0-3", en: "0 – 3 months", es: "0 – 3 meses" },
          { value: "3-6", en: "3 – 6 months", es: "3 – 6 meses" },
          { value: "6-12", en: "6 – 12 months", es: "6 – 12 meses" },
          { value: "12-plus", en: "12+ months", es: "12+ meses" },
          { value: "exploring", en: "Just exploring", es: "Solo explorando" },
        ],
      },
    },

    contact: {
      heading: { en: "Last step — how do we reach you?", es: "Último paso — ¿cómo te contactamos?" } as Bi,
      sub: {
        en: "A Supernova loan officer will follow up within 1 business day.",
        es: "Un agente de Supernova te contactará en 1 día hábil.",
      } as Bi,
      firstName: { en: "First name", es: "Nombre" } as Bi,
      lastName: { en: "Last name", es: "Apellido" } as Bi,
      email: { en: "Email", es: "Correo electrónico" } as Bi,
      phone: { en: "Phone", es: "Teléfono" } as Bi,
      required: { en: "Required", es: "Requerido" } as Bi,
    },

    results: {
      matchedHeading: { en: "You may qualify for:", es: "Puedes calificar para:" } as Bi,
      stackNote: {
        en: "Tip: County DPA programs can be stacked on top of Florida Bond for maximum assistance.",
        es: "Tip: Los programas DPA del condado se pueden combinar con Florida Bond para máxima asistencia.",
      } as Bi,
      noMatchHeading: { en: "Let's talk about your options", es: "Hablemos de tus opciones" } as Bi,
      noMatchBody: {
        en: "Based on your answers, you may not qualify for these specific programs today — but Supernova has other paths forward. A loan officer will reach out to explore your options.",
        es: "Según tus respuestas, es posible que no califiques hoy a estos programas específicos — pero Supernova tiene otras alternativas. Un agente te contactará para explorar tus opciones.",
      } as Bi,
      ctaCall: { en: "Call (689) 262-4400", es: "Llamar (689) 262-4400" } as Bi,
      ctaRestart: { en: "Start Over", es: "Empezar de Nuevo" } as Bi,
      thanks: {
        en: "Thanks — your info is on its way to our team.",
        es: "Gracias — tu información está en camino a nuestro equipo.",
      } as Bi,
    },

    errors: {
      submit: {
        en: "Something went wrong. Please try again.",
        es: "Algo salió mal. Por favor intenta de nuevo.",
      } as Bi,
      invalidEmail: { en: "Please enter a valid email.", es: "Por favor ingresa un correo válido." } as Bi,
      retry: { en: "Try Again", es: "Intentar de Nuevo" } as Bi,
    },
  },
} as const;

export function t(bi: Bi, lang: Lang): string {
  return bi[lang];
}

import allTalks from "./talks";

const cityData = {
  copiapo: {
    name: "Copiapó",
    date: "25 de junio, 2025",
    slug: "copiapo",
    mapCoords: { x: 50, y: 90 },
    venue: "Inacap sede Copiapó",
    address: "Yumbel 650, Auditorio Edificio B, Copiapó, Chile",
    image: "/images/cities/copiapo.webp",
    logo: "/images/logos/pyday_copiapo.webp",
    mapUrl: "https://maps.app.goo.gl/gYxNT6EVaSFsDBT99",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2579.0365694907086!2d-70.33317677653373!3d-27.360827873691527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698047547c01749%3A0xb972b1fd182ecc29!2sINACAP%20Sede%20B!5e0!3m2!1ses!2scl!4v1746042745132!5m2!1ses!2scl",
    transportation: [
      "Microbuses: Líneas 1, 12, 2, 4, 5 desde el centro",
      "Estacionamiento gratuito disponible en el campus",
    ],
    introduction: {
      title: "¡Un Día de Python y Mucha Diversión en PyDay Copiapó 2025!",
      description: "Únete a la segunda edición de este emocionante evento en INACAP sede Copiapó. Disfruta de charlas inspiradoras y un workshop interactivo donde estudiantes, docentes y entusiastas de la región compartirán conocimientos en un ambiente colaborativo y lleno de energía. PyDay Copiapó 2025 es tu oportunidad para aprender, conectar e inspirarte con el poder de Python.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro. ¡Te esperamos!",
      campusImage: "/images/campus/Inacap_Copiapo.webp",
    },
    registrationLink:"",
    talkProposalLink: "",
    schedule: allTalks.filter((talk) => talk.city === "copiapo"),
  },
  valparaiso: {
    name: "Valparaíso",
    date: "13 de junio, 2025, 10:00 - 17:00.",
    slug: "valparaiso",
    mapCoords: { x: 52, y: 180 },
    venue: "Casa Central, Universidad Técnica Federico Santa María",
    address: "Avenida España 1680, Valparaíso, Chile",
    image: "/images/cities/valparaiso.webp",
    logo: "/images/logos/pyday_valparaiso.webp",
    mapUrl: "https://maps.app.goo.gl/Hmdu1bGLDcpBuXk46",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8395004588306!2d-71.59466189999999!3d-33.0343587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b59627236d%3A0x86499de0392a795!2sAv.%20Espa%C3%B1a%201680%2C%202580816%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745384901539!5m2!1ses-419!2scl",
    transportation: [
      "Metro Valparaíso: Estación Portales (10 min caminando)",
      "Micros 105, 106, 202, 215, 216",
    ],
    accessPoints: [
    "Entrada superior: Avenida Placeres",
    "Entrada inferior: Avenida España",
    "Entrada lateral: Calle Valdés"
    ],
    introduction: {
      title: "¡Aventúrate en el Mundo de Python en PyDay Valparaíso!",
      description: "Únete a la cuarta edición de este emocionante evento en la Casa Central de la Universidad Técnica Federico Santa María. Disfruta de talleres interactivos y charlas inspiradoras en un ambiente creativo y colaborativo. PyDay Valparaíso 2025 es tu oportunidad para conectar con otros entusiastas, expandir conocimientos y explorar las posibilidades de este poderoso lenguaje de programación.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro.  ¡No te lo pierdas!",
      campusImage: "/images/campus/utfsm-campus.webp",
    },
    registrationLink:"https://www.eventbrite.com/e/1366605807759",
    registrationStatus: "closed", // <--- agregas esto solo si los cupos están por agotarse
    talkProposalLink: "",
    schedule: allTalks.filter((talk) => talk.city === "valparaiso"),
  },
  santiago: {
    name: "Santiago",
    date: "6 de junio, 2025, 14:00 - 19:00.",
    slug: "santiago",
    mapCoords: { x: 58, y: 200 },
    venue: "DUOC UC, Sede San Joaquín",
    address: "Av. Vicuña Mackenna 4917, San Joaquín, Chile",
    image: "/images/cities/santiago.webp",
    logo: "/images/logos/pyday_santiago.webp",
    mapUrl: "https://maps.app.goo.gl/VurFsaQhfD2hivrSA",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.049828297318!2d-70.61886772390879!3d-33.50008070005618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00be4a5fa81%3A0xcd8eaf5b1d547f64!2sDuoc%20UC%3A%20Sede%20San%20Joaqu%C3%ADn!5e0!3m2!1ses-419!2scl!4v1721433553127!5m2!1ses-419!2scl",
    transportation: [
      "Metro: Estación San Joaquín (Línea 5)",
      "Buses del Transantiago: 210, 213e",
      "Estacionamiento disponible en Pontificia Universidad Católica de Chile Campus San Joaquín, costo $10.000 app por día",
    ],
    introduction: {
      title: "¡Bienvenido a la Primera Edición de PyDay Santiago 2025!",
      description: "Únete a la primera edición de PyDay Santiago 2025, un evento lleno de aprendizaje, innovación y colaboración en el vibrante mundo de Python. Después de las exitosas Hackatones y PyCon en Santiago, este evento es tu oportunidad para ser parte de una nueva tradición en la ciudad. Disfruta de charlas inspiradoras, talleres interactivos y oportunidades para conectar con otros apasionados por la tecnología.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica local y descubrir cómo Python puede transformar tu futuro. ¡No te lo puedes perder!",
      campusImage: "/images/campus/DuocUC__San_Joaquín.webp",
    },
    registrationLink:"https://www.eventbrite.com/e/1366617793609",
    registrationStatus: "soldout", // <--- agregas esto solo si los cupos están agotados
    talkProposalLink: "",
    schedule: allTalks.filter((talk) => talk.city === "santiago"),
  },
  
};

export default cityData;

import allTalks from "./talks";

const cityData = {
  copiapo: {
    name: "Copiapó",
    date: "20 de Junio, 2025",
    venue: "Universidad de Atacama",
    address: "Av. Copayapu 485, Copiapó, Chile",
    image: "/images/cities/copiapo.webp",
    mapUrl: "https://maps.app.goo.gl/hy2BivXnuZznMPH4A",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.6087170536957!2d-70.3536574!3d-27.3566988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969803eead8e720d%3A0x40055cd197fbccfc!2sAv.%20Copayapu%20485%2C%201531772%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1ses-419!2scl!4v1745379956808!5m2!1ses-419!2scl",
    transportation: [
      "Taxis colectivos: Líneas 21, 22 (Campus Universidad)",
      "Microbuses: Líneas 1, 2, 3 desde el centro",
      "Estacionamiento gratuito disponible en el campus",
    ],
    introduction: {
      title: "",
      description: "",
      participationInfo: "",
      campusImage: "/images/campus/Universidad_de_Atacama.webp",
    },
    talkProposalLink: "https://sessionize.com/pyday-copiapo-2025/",
    schedule: allTalks.filter((talk) => talk.city === "copiapo"),
  },
  valparaiso: {
    name: "Valparaíso",
    date: "13 de Junio, 2025, 10:00 AM - 17:00 PM",
    venue: "Casa Central, Universidad Técnica Federico Santa María",
    address: "Avenida España 1680, Valparaíso, Chile",
    image: "/images/cities/valparaiso.webp",
    mapUrl: "https://maps.app.goo.gl/Hmdu1bGLDcpBuXk46",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8395004588306!2d-71.59466189999999!3d-33.0343587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b59627236d%3A0x86499de0392a795!2sAv.%20Espa%C3%B1a%201680%2C%202580816%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745384901539!5m2!1ses-419!2scl",
    transportation: [
      "Metro Valparaíso: Estación Portales (10 min caminando)",
      "Micros 105, 106, 202, 215, 216",
    ],
    introduction: {
      title: "¡Aventúrate en el Mundo de Python en PyDay Valparaíso!",
      description: "Únete a la cuarta edición de este emocionante evento en la Casa Central de la Universidad Técnica Federico Santa María. Disfruta de talleres interactivos y charlas inspiradoras en un ambiente creativo y colaborativo. PyDay Valparaíso 2025 es tu oportunidad para conectar con otros entusiastas, expandir conocimientos y explorar las posibilidades de este poderoso lenguaje de programación.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro.  ¡No te lo pierdas!",
      campusImage: "/images/campus/utfsm-campus.webp",
    },
    talkProposalLink: "https://sessionize.com/pyday-valparaiso-2025/",
    schedule: allTalks.filter((talk) => talk.city === "valparaiso"),
  },
  santiago: {
    name: "Santiago",
    date: "6 de Junio, 2025",
    venue: "DUOC UC, Sede San Joaquín",
    address: "Av. Vicuña Mackenna 4917, San Joaquín, Chile",
    image: "/images/cities/santiago.webp",
    mapUrl: "https://maps.app.goo.gl/VurFsaQhfD2hivrSA",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.049828297318!2d-70.61886772390879!3d-33.50008070005618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d00be4a5fa81%3A0xcd8eaf5b1d547f64!2sDuoc%20UC%3A%20Sede%20San%20Joaqu%C3%ADn!5e0!3m2!1ses-419!2scl!4v1721433553127!5m2!1ses-419!2scl",
    transportation: [
      "Metro: Estación San Joaquín (Línea 5)",
      "Buses del Transantiago: 210, 213e",
      "Estacionamiento disponible en Pontificia Universidad Católica de Chile Campus San Joaquín, costo $10.000 app por día",
    ],
    introduction: {
      title: "",
      description: "",
      participationInfo: "",
      campusImage: "/images/campus/DuocUC__San_Joaquín.webp",
    },
    talkProposalLink: "https://sessionize.com/pyday-santiago-2025/",
    schedule: allTalks.filter((talk) => talk.city === "santiago"),
  },
  
};

export default cityData;

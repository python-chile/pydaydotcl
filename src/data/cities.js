import allTalks from "./talks";

const cityData = {
  copiapo: {
    name: "Copiapó",
    date: "Por definir",
    slug: "copiapo",
    mapCoords: { x: 55, y: 90 },
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
      title: "¡Un Día de Python y Mucha Diversión en PyDay Copiapó 2026!",
      description: "Únete a la segunda edición de este emocionante evento en INACAP sede Copiapó. Disfruta de charlas inspiradoras y un workshop interactivo donde estudiantes, docentes y entusiastas de la región compartirán conocimientos en un ambiente colaborativo y lleno de energía. PyDay Copiapó 2026 es tu oportunidad para aprender, conectar e inspirarte con el poder de Python.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro. ¡Te esperamos!",
      campusImage: "/images/campus/Inacap_Copiapo.webp",
    },
    registrationLink:"",
    registrationStatus: "",
    talkProposalLink: "",
    schedule: allTalks.filter((talk) => talk.city === "copiapo"),
  },
  valparaiso: {
    name: "Valparaíso",
    date: "5 de junio, 2026, 10:00 - 17:00.",
    slug: "valparaiso",
    mapCoords: { x: 57, y: 180 },
    venue: "Casa Central, Universidad Técnica Federico Santa María",
    address: "Avenida España 1680, Valparaíso, Chile",
    image: "/images/cities/valparaiso.webp",
    logo: "/images/logos/pyday_valparaiso.webp",
    mapUrl: "https://maps.app.goo.gl/Hmdu1bGLDcpBuXk46",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8395004588306!2d-71.59466189999999!3d-33.0343587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b59627236d%3A0x86499de0392a795!2sAv.%20Espa%C3%B1a%201680%2C%202680816%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745384901539!5m2!1ses-419!2scl",
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
      description: "Únete a la cuarta edición de este emocionante evento en la Casa Central de la Universidad Técnica Federico Santa María. Disfruta de talleres interactivos y charlas inspiradoras en un ambiente creativo y colaborativo. PyDay Valparaíso 2026 es tu oportunidad para conectar con otros entusiastas, expandir conocimientos y explorar las posibilidades de este poderoso lenguaje de programación.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro.  ¡No te lo pierdas!",
      campusImage: "/images/campus/utfsm-campus.webp",
    },
    registrationLink:"",
    registrationStatus: "upcoming", // <--- agregas esto solo si los cupos están por agotarse
    talkProposalLink: "https://sessionize.com/pyday-valparaiso-2026/",
    schedule: allTalks.filter((talk) => talk.city === "valparaiso"),
  },
  santiago: {
    name: "Santiago",
    date: "6 de junio, 2026, 14:00 - 19:00.",
    slug: "santiago",
    mapCoords: { x: 59, y: 200 },
    venue: "Inacap, sede Santiago Centro",
    address: "Almirante Barroso 76, Santiago, Chile",
    image: "/images/cities/santiago.webp",
    logo: "/images/logos/pyday_santiago.webp",
    mapUrl: "https://maps.app.goo.gl/PFjMcFxEc8zn3RTi8",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6658.433889754802!2d-70.66222!3d-33.443654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a93f630c19%3A0xc1680441da8a20aa!2sINACAP%20Santiago%20Centro!5e0!3m2!1ses!2scl!4v1775768698016!5m2!1ses!2scl", 
    transportation: [
      "Metro: Estación Los Héroes (Línea 1 y 2)",
      "Buses del Transantiago: 401, 406, 407, 426, 518"
    ],
    introduction: {
      title: "¡Bienvenido a la Primera Edición de PyDay Santiago 2026!",
      description: "Únete a la primera edición de PyDay Santiago 2026, un evento lleno de aprendizaje, innovación y colaboración en el vibrante mundo de Python. Después de las exitosas Hackatones y PyCon en Santiago, este evento es tu oportunidad para ser parte de una nueva tradición en la ciudad. Disfruta de charlas inspiradoras, talleres interactivos y oportunidades para conectar con otros apasionados por la tecnología.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica local y descubrir cómo Python puede transformar tu futuro. ¡No te lo puedes perder!",
      campusImage: "/images/campus/inacap-stgo.webp",
    },
    registrationLink:"",
    registrationStatus: "upcoming", // <--- agregas esto solo si los cupos están agotados
    talkProposalLink: "https://sessionize.com/pyday-santiago-2026/",
    schedule: allTalks.filter((talk) => talk.city === "santiago"),
  },
  rancagua: {
    name: "Rancagua",
    date: "Por definir",
    slug: "rancagua",
    mapCoords: { x: 62, y: 220 },
    venue: "Universidad de O'Higgins, Campus Rancagua",
    address: "Avenida Libertador Bernardo O'Higgins 611, Rancagua, Chile.",
    image: "/images/cities/rgua.webp",
    imgCourtesy: "Imagen de Tripadvisor. Publicada por ramiro614",
    logo: "/images/logos/logo_pyday.webp",
    mapUrl: "https://maps.app.goo.gl/UcDreyKJpimSxCh29",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2936873047593!2d-70.7416439!3d-34.164408200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966343135916de85%3A0xa4ea8df808816683!2sUniversidad%20de%20OHiggins!5e0!3m2!1ses!2scl!4v1775774234685!5m2!1ses!2scl",
    transportation: [
      "Micros 101, 202, 203, 301, 403, 503, 601, 602, Machalí, entre otras",
      "Colectivos línea 25 de Febrero, Lourdes, entre otros",
      "25 minutos caminando desde terminales iterurbanos: de buses Turbus, de buses O'higgins y de trenes"
    ],
    accessPoints: [
    "Entrada principal: Alameda Bernardo O'Higgins",
    ],
    introduction: {
      title: "¡Aventúrate en el Mundo de Python en PyDay Rancagua!",
      description: "Únete a la primera edición PyDay Rancagua. Disfruta de charlas inspiradoras en un ambiente creativo y colaborativo. PyDay Rancagua 2026 es tu oportunidad para conectar con otros entusiastas, expandir conocimientos y explorar las posibilidades de este poderoso lenguaje de programación.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro.  ¡No te lo pierdas!",
      campusImage: "/images/campus/rgua.webp",
    },
    registrationLink:"",
    registrationStatus: "upcoming", // <--- agregas esto solo si los cupos están por agotarse
    talkProposalLink: "https://sessionize.com/pyday-rancagua-2026/",
    schedule: allTalks.filter((talk) => talk.city === "rancagua"),
  },
  curico: {
    name: "Curicó",
    date: "Por definir",
    slug: "curico",
    mapCoords: { x: 62, y: 240 },
    venue: "Universidad de Talca, campus Curicó",
    address: "Camino Los Niches Km. 1, Curicó, Chile",
    image: "/images/cities/curico.webp",
    imgCourtesy: "Imagen de Qwerty242, CC BY-SA 3.0",
    logo: "/images/logos/logo_pyday.webp",
    mapUrl: "https://maps.app.goo.gl/45rGaV2pja7xSvEg7",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1634.0868046211303!2d-71.229417!3d-35.002359!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDAwJzA4LjUiUyA3McKwMTMnNDUuOSJX!5e0!3m2!1sen!2sus!4v1775769555324!5m2!1sen!2sus",
    transportation: [
    ],
    accessPoints: [,
    ],
    introduction: {
      title: "¡Aventúrate en el Mundo de Python en PyDay Curicó!",
      description: "Únete a la primera PyDay en Curicó. Disfruta de talleres interactivos y charlas inspiradoras en un ambiente creativo y colaborativo. PyDay Curicó 2026 es tu oportunidad para conectar con otros entusiastas, expandir conocimientos y explorar las posibilidades de este poderoso lenguaje de programación.",
      participationInfo: "Participar te permitirá: adquirir nuevas habilidades, conectar con la comunidad tecnológica y descubrir cómo Python puede transformar tu futuro.  ¡No te lo pierdas!",
      campusImage: "/images/campus/utfsm-campus.webp",
    },
    registrationLink:"",
    registrationStatus: "upcoming", // <--- agregas esto solo si los cupos están por agotarse
    talkProposalLink: "https://sessionize.com/pyday-curico-2026/",
    schedule: allTalks.filter((talk) => talk.city === "curico"),
  },
  
};

export default cityData;

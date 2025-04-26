import allTalks from "./talks";

const cityData = {
  valparaiso: {
    name: "Valparaíso",
    date: "13 de Junio, 2025",
    venue: "Universidad Técnica Federico Santa María",
    address: "Avenida España 1680, Valparaíso, Chile",
    image: "/images/cities/valparaiso.webp",
    mapUrl: "https://maps.app.goo.gl/Hmdu1bGLDcpBuXk46",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8395004588306!2d-71.59466189999999!3d-33.0343587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b59627236d%3A0x86499de0392a795!2sAv.%20Espa%C3%B1a%201680%2C%202580816%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1745384901539!5m2!1ses-419!2scl",
    transportation: [
      "Metro Valparaíso: Estación Francia (10 min caminando)",
      "Buses 101, 102, 103 desde el centro",
      "Estacionamiento disponible en el campus",
    ],
    schedule: allTalks.filter((talk) => talk.city === "valparaiso"),
  },
  santiago: {
    name: "Santiago",
    date: "20 de Junio, 2025",
    venue: "Universidad de Chile",
    address: "Av. Libertador Bernardo O'Higgins 1058, Santiago, Chile",
    image: "/images/cities/santiago.webp",
    mapUrl: "https://maps.app.goo.gl/VurFsaQhfD2hivrSA",
    embedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1922105192975!2d-70.6507638!3d-33.444298499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a0c9ddf1c9%3A0xfdb61946b081cfe3!2sAv.%20Alameda%20Libertador%20Bernardo%20O'Higgins%201058%2C%20Casa%20Central%20de%20la%20Universidad%20de%20Chile%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1745379830462!5m2!1ses-419!2scl",
    transportation: [
      "Metro: Estación Universidad de Chile (Línea 1)",
      "Buses del Transantiago: 513, 503, 513c",
      "Estacionamiento disponible en los alrededores (pago)",
    ],
    schedule: allTalks.filter((talk) => talk.city === "santiago"),
  },
  copiapo: {
    name: "Copiapó",
    date: "6 de Junio, 2025",
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
    schedule: allTalks.filter((talk) => talk.city === "copiapo"),
  },
};

export default cityData;

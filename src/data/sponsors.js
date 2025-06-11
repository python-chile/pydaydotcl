// GUÍA DE USO:
// 1. Imágenes: Guardar en /public/images/sponsors/ como .webp (ej: "microsoft.webp")
// 2. Data: Seguir el formato de objetos JSON como en los ejemplos
// 3. Para comenzar, DEJA EL ARRAY VACÍO (sponsors = [])

// ORGANIZADORES (sedes locales)
const organizers = [
  {
    _id: 1,
    name: "Duoc UC",
    url: "https://www.duoc.cl",
    logo: {
      asset: {
        url: "/images/sponsors/duoc_logo.webp"
      }
    },
    type: "organizer",
    cities: ["santiago"]
  },
  {
    _id: 2,
    name: "Inacap",
    url: "https://inacap.cl",
    logo: {
      asset: {
        url: "/images/sponsors/inacap_logo.webp"
      }
    },
    type: "organizer",
    cities: ["copiapo"]
  },
  {
    _id: 3,
    name: "UTFSM",
    url: "https://usm.cl",
    logo: {
      asset: {
        url: "/images/sponsors/utfsm_logo.webp"
      }
    },
    type: "organizer",
    cities: ["valparaiso"]
  },
  {
    _id: 4,
    name: "Python Chile",
    url: "https://www.pythonchile.cl",
    logo: {
      asset: {
        url: "/images/sponsors/python_chile_logo.webp"
      }
    },
    type: "organizer",
    cities: ["santiago", "valparaiso", "copiapo"]
  }
];

// PATROCINADORES (financieros)
const sponsors = [
  {
    _id: 5,
    name: "UTFSM",
    url: "https://usm.cl",
    logo: {
      asset: {
        url: "/images/sponsors/utfsm_logo.webp"
      }
    },
    type: "sponsor",
    cities: ["valparaiso"]
  },
  {
    _id: 6,
    name: "AC3E",
    url: "https://ac3e.usm.cl/language/es/",
    logo: {
      asset: {
        url: "/images/sponsors/ac3e_logo.webp"
      }
    },
    type: "sponsor",
    cities: ["valparaiso"]
  },
  {
    _id: 7,
    name: "CCTVAL",
    url: "https://cctval.cl/",
    logo: {
      asset: {
        url: "/images/sponsors/cctval_logo.webp"
      }
    },
    type: "sponsor",
    cities: ["valparaiso"]
  }
];

// COMUNIDADES AMIGAS
const communities = [
  {
    _id: 8,
    name: "Pyladies Chile",
    url: "https://pyladies.cl/",
    logo: {
      asset: {
        url: "/images/sponsors/pyladies_logo.webp"
      }
    },
    type: "community",
    cities: ["santiago"]
  },
  {
    _id: 9,
    name: "Niñas PRO",
    url: "https://www.ninaspro.cl",
    logo: {
      asset: {
        url: "/images/sponsors/ninaspro_logo.webp"
      }
    },
    type: "community",
    cities: ["santiago"]
  },
  {
    _id: 10,
    name: "Latinas in cloud",
    url: "https://www.instagram.com/latinasincloud/",
    logo: {
      asset: {
        url: "/images/sponsors/latinas_incloud_logo.webp"
      }
    },
    type: "community",
    cities: ["santiago"]
  }
];

// Exportar todos juntos
export default [...organizers, ...sponsors, ...communities];
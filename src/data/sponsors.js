// GUÍA DE USO:
// 1. Imágenes: Guardar en /public/images/sponsors/ como .webp (ej: "microsoft.webp")
// 2. Data: Seguir el formato de objetos JSON como en los ejemplos
// 3. Para comenzar, DEJA EL ARRAY VACÍO (sponsors = [])

// ORGANIZADORES (sedes locales)
const organizers = [
  {
    _id: 1,
    name: "Inacap",
    url: "https://portal.inacap.cl/",
    logo: {
      asset: {
        url: "/images/sponsors/inacap_logo.webp"
      }
    },
    type: "organizer",
    cities: ["santiago", "copiapo"]
  },
  {
    _id: 2,
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
    _id: 3,
    name: "Universidad de O'Higgins",
    url: "https://usm.cl",
    logo: {
      asset: {
        url: "/images/sponsors/uoh.webp"
      }
    },
    type: "organizer",
    cities: ["rancagua"]
  },
  {
    _id: 4,
    name: "Universidad de Talca",
    url: "https://www.utalca.cl/",
    logo: {
      asset: {
        url: "/images/sponsors/utalca.webp"
      }
    },
    type: "organizer",
    cities: ["curico"]
  },
  {
    _id: 5,
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
    _id: 6,
    name: "Python Software Foundation",
    url: "https://www.python.org/psf-landing/",
    logo: {
      asset: {
        url: "/images/sponsors/psf_logo.webp"
      }
    },
    type: "sponsor",
    cities: ["santiago", "valparaiso", "copiapo"]
  },
];

// COMUNIDADES AMIGAS
const communities = [
  {
    _id: 7,
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
];

// Exportar todos juntos
export default [...organizers, ...sponsors, ...communities];
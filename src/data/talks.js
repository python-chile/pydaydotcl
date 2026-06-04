/**
 * ESQUEMA NORMALIZADO PARA CHARLAS Y TALLERES
 *
 * CAMPOS OBLIGATORIOS:
 * - id:          Número único (Ej: 101, 102...)
 * - type:        'charla' | 'taller'
 * - city:        'valparaiso' | 'santiago' | 'copiapo'
 * - title:       String (80-120 caracteres)
 * - description: String (140-280 caracteres)
 * - time:        Horario en formato "HH:MM - HH:MM" (duración mínima 30 mins)
 * - speaker:     { name: String, image: URL (ruta /images/speakers/...) }
 * - duration:    Número (minutos) *Obligatorio solo para talleres*
 *
 * CAMPOS OPCIONALES:
 * - category:    Para charlas: ['tecnica', 'comunidad', 'caso-de-exito', 'keynote']
 *                Para talleres: ['herramientas', 'fundamentos', 'proyecto-practico']
 * - level:       'introductorio' | 'intermedio' | 'avanzado'
 * - tags:        Array (max 5) de:
 *                ['Python', 'Web', 'Data Science', 'IA', 'Educación', 'Open Source',
 *                 'DevOps', 'Testing', 'Best Practices', 'Cloud', 'Career']
 * - resources:   {
 *                  slides: URL,
 *                  repo: URL GitHub/GitLab,
 *                  dataset: URL (para talleres)
 *                }
 * - requirements: [String] (Solo talleres - Ej: ['Laptop', 'Python 3.11+ instalado'])
 * - language:    'es' (default) | 'en'
 */
const allTalks = [
  {
    id: 1,
    city: "valparaiso",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y acreditación de participantes",
    time: "10:15 - 10:30",
    room: "Salón A1",
    speaker: null,
  },
  {
    id: 2,
    city: "valparaiso",
    type: "charla",
    title: "De script caótico a app de IA: lo que nadie te enseña cuando integras LLMs con Python.",
    description: `Todos saben llamar a la API de un LLM.
    Pero ¿qué pasa cuando tu script de 50 líneas lo tiene que entender otra persona o tu yo del futuro?<br/><br/>
    Esta charla muestra, con código real y errores propios,tres cosas que nadie te explica:<br/>
    * cómo manejar prompts sin que sean un desastre,<br/>
    * cómo estructurar el código para que escale,<br/>
    * y cómo no quedarte sin presupuesto en tu primera semana.<br/><br/>
    Sin hype, sin frameworks mágicos, solo Python.`,
    time: "10:30 - 11:00",
    room: "Salón A1",
    speakers: [{
      name: "Antonia Navarrete",
      image: "/images/speakers/antonia-navarrete.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/antonianavarrete/",
          instagram: "https://www.instagram.com/antito.py/"
        }
    }],
    category: "Arquitectura",
    level: "Principiante",
    tags: ["Arquitectura", "Buenas prácticas"],
  },
  {
    id: 3,
    city: "valparaiso",
    type: "break",
    title: "Cofee Break",
    time: "11:00 - 11:30",
    room: "Salón A1",
    speaker: null,
  },
  {
    id: 4,
    city: "valparaiso",
    type: "charla",
    title: "Desarrollo de Simuladores Clínicos: Python aplicado a la Formación de Profesionales de Salud.",
    description: `¿Cómo modelamos la complejidad de un paciente real usando código?
    En esta charla, se explorara el desarrollo de un simulador clínico para Kinesiología
    basado en una arquitectura de tres componentes fundamentales:<br/><br/>
    * modelos fisiológicos probabilísticos,<br/>
    * lógica estocástica para estados cognitivos<br/>
    * e interacción mediante modelos de lenguaje (LLMs) locales.<br/><br/>
    Se profundizaremos en cómo Python permite articular estos pilares
    para generar casos clínicos no lineales,
    transformando datos médicos en experiencias interactivas
    que desafían el razonamiento de los estudiantes
    ante la incertidumbre de la práctica profesional.`,
    time: "11:30 - 12:00",
    room: "Salón A1",
    speakers: [{
      name: "Christian Donoso Aguilar",
      image: "/images/speakers/christian-donoso-aguilar.webp",
      socials: {}
    }],
    category: "Educación",
    level: "Intermedio",
    tags: ["Ciencia", "Educación", "Inteligencia Artificial"],
  },
  {
    id: 5,
    city: "valparaiso",
    type: "charla",
    title: "pudu-ui: Una librería de UI para apps de escritorio.",
    description: `En enero de 2024 Jesús empezó a desarrollar
    su propia librería de UI para juegos y aplicaciones de escritorio en Python.
    Aquí quiere presentar cómo ha sido el desarrollo, cómo usarla y los planes a futuro.`,
    time: "12:00 - 12:30",
    room: "Salón A1",
    speakers: [{
      name: "Jesús Henríquez",
      image: "/images/speakers/jesus-henriquez.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/hernaldo-henriquez/",
          twitter: "https://twitter.com/xhenryx14"
        }
    }],
    category: "UI",
    level: "Avanzado",
    tags: ["UI"],
  },
  {
    id: 6,
    city: "valparaiso",
    type: "charla",
    title: "Presentación Python Chile.",
    description: ``,
    time: "12:30 - 12:45",
    room: "Salón A1",
    speakers: [],
    category: "Comunidad",
    level: "Principiante",
    tags: ["Comunidad"],
  },
  {
    id: 7,
    city: "valparaiso",
    type: "break",
    title: "Almuerzo",
    time: "12:45 - 14:00",
    room: "Salón A1",
    speaker: null,
  },
  {
    id: 8,
    city: "valparaiso",
    type: "charla",
    title: "Vuelve tus scripts inteligentes con Python y Strands Agents.",
    description: `Todos tenemos esa carpeta llena de scripts en Python que nos salvan la vida:
    automatizaciones para procesar datos,
    consumir APIs,
    o gestionar tareas repetitivas.
    Pero, ¿qué pasaría si en lugar de ejecutarlos manualmente o seguir reglas estrictas,
    pudieras darles la capacidad de razonar?<br/><br/>
    En esta charla,descubriremos cómo transformar nuestros clásicos scripts de Python
    en herramientas cognitivas para Agentes de Inteligencia Artificial
    utilizando Strands Agents (el framework open-source de AWS).
    Veremos cómo el uso de buenas prácticas —como el Type Hinting y los Docstrings—
    es la clave para que modelos como Claude o GPT-4 entiendan,
    orquesten y ejecuten nuestro código.<br/><br/>
    A través de una demo en vivo,
    pasaremos de tener un código rígido que solo ejecuta pasos secuenciales,
    a un sistema autónomo capaz de investigar un problema,
    elegir qué herramientas locales ejecutar y tomar decisiones,
    cambiando para siempre nuestra forma de entender la automatización y el desarrollo de software.`,
    time: "14:00 - 14:30",
    room: "Salón A1",
    speakers: [{
      name: "Gabriel Grobier Romo",
      image: "/images/speakers/gabriel-grobier-romo.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/gabrielgrobier",
          youtube: "https://www.youtube.com/@gabogrobierr"
        }
    }],
    category: "IA",
    level: "Principiante",
    tags: ["Desarrollo", "IA" , "Automatización"],
  },
  {
    id: 9,
    city: "valparaiso",
    type: "charla",
    title: "Crea tu DJ con IA: Agentes en Python y Open Source.",
    description: `¿Qué pasa cuando un modelo de lenguaje deja de solo hablar de música
    y empieza a curar playlists con tus canciones reales?
    En esta charla construimos un agente de IA que funciona como tu DJ personal — usando Python,
    herramientas 100% open source, y conectado directamente a Spotify. Capa por capa: desde un agente que solo conversa, hasta uno que busca canciones, arma playlists reales, y recuerda tus gustos. Todo local, todo open source, todo en Python.`,
    time: "14:30 - 15:00",
    room: "Salón A1",
    speakers: [{
      name: "Hazel Saenz",
      image: "/images/speakers/hazel-saenz.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/hazelsaenz/",
          instagram: "https://www.instagram.com/hazelsaenz.tech/"
        }
    }],
    category: "IA",
    level: "Principiante",
    tags: ["Inteligencia Artificial", "Agentes de IA", "Python"],
  },
  {
    id: 10,
    city: "valparaiso",
    type: "charla",
    title: "Cómo construí un plugin nativo de Polars en Rust para enmascarar PII - y lo que nadie te cuenta.",
    description: `maskops es una librería open source que extiende Polars
    con expresiones nativas en Rust para detectar
    y enmascarar datos personales: IBAN, VAT, email, teléfono, IP, RUT, CPF y CURP;
    con validación de dígito verificador incluido para todos los datos.<br/><br/>
    En esta charla cuento el proceso real:
    por qué elegí Rust sobre Python puro,
    cómo funciona la integración con el motor de expresiones de Polars via pyo3-polars,
    los desafíos técnicos concretos (compilación cruzada, dlopen en macOS CI, wildcards en Cargo.toml),
    y la parte que nadie te va a mencionar:
    publicar algo en PyPI con 7 estrellas en GitHub y tratar de que alguien lo use.<br/><br/>
    Una charla honesta sobre construir herramientas de datos de nicho,
    el valor de contribuir al mundo open source, y qué viene después.`,
    time: "15:00 - 15:30",
    room: "Salón A1",
    speakers: [{
      name: "Felipe Carvajal Brown",
      image: "/images/speakers/felipe-carvajal-brown.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/fcarvajalbrown/",
          github: "https://github.com/fcarvajalbrown",
          instagram: "https://www.instagram.com/fcarvajalbrown/"
        }
    }],
    category: "IA",
    level: "Principiante",
    tags: ["Librerías", "IA"],
  },
  {
    id: 11,
    city: "valparaiso",
    type: "charla",
    title: "Charlas relámpago.",
    description: ``,
    time: "15:30 - 16:00",
    room: "Salón A1",
    speakers: [],
    category: "",
    level: "",
    tags: [],
  },
  {
    id: 12,
    city: "valparaiso",
    type: "cierre",
    title: "Cierre",
    time: "16:00 - 16:15",
    room: "Salón A1",
    speaker: null,
  },
  {
    id: 13,
    city: "valparaiso",
    type: "taller",
    title: "Lo que nadie te dice sobre la IA generativa: límites, técnicas y lo que viene.",
    description: `Hay mucho ruido alrededor de la IA generativa:
    promesas exageradas, demos impresionantes y también miedos poco fundamentados.
    Esta charla no es ninguna de esas cosas.
    Es un recorrido técnico y honesto por lo que los modelos de lenguaje realmente pueden hacer,
    dónde están sus límites estructurales
    y qué herramientas tiene hoy un desarrollador Python
    para construir sistemas útiles y responsables sobre ellos.<br/><br/>
    Partimos desde los fundamentos:
    un LLM no razona, predice.
    Eso tiene consecuencias concretas
    que todo el que trabaja con estas herramientas debería entender antes de desplegar algo en producción.
    Las alucinaciones no son bugs que se van a arreglar en la próxima versión,
    son una consecuencia de cómo están diseñados estos sistemas.
    La ventana de contexto,
    el sesgo en los datos de entrenamiento
    y la falta de acceso al mundo real son limitaciones igualmente reales.<br/><br/>
    Desde ahí avanzamos hacia las técnicas que más importan hoy.
    El prompt engineering tiene más profundidad de lo que parece:
    zero-shot,
    few-shot,
    chain-of-thought
    y role prompting no son trucos,
    son formas distintas de comunicarse con precisión con un sistema que toma las palabras literalmente.
    RAG (Retrieval-Augmented Generation) resuelve uno de los problemas más frecuentes en aplicaciones reales:
    cómo hacer que el modelo use tu información sin exponer tus datos ni inventar respuestas.
    Y fine-tuning, cuando tiene sentido usarlo y cuándo no.<br/><br/>
    Después entramos en el territorio que más está cambiando ahora mismo: los agentes.
    La diferencia entre un chatbot y un agente es la diferencia entre responder y actuar.
    Un agente con acceso a herramientas puede
    ejecutar tareas,
    consultar bases de datos,
    enviar mensajes
    y tomar decisiones en múltiples pasos.
    MCP (Model Context Protocol), el estándar abierto desarrollado por Anthropic y adoptado por la industria,
    es lo que hace posible conectar todo eso de manera consistente.
    También hablamos de vibe coding:
    qué significa programar describiendo lo que quieres en lenguaje natural,
    qué se democratiza con eso y qué responsabilidades no desaparecen.<br/><br/>
    Un bloque importante de la charla está dedicado a seguridad.
    Prompt injection, jailbreaking y data poisoning no son amenazas teóricas:
    ya ocurrieron en sistemas reales.
    Cuando integras un LLM en tu aplicación, el perímetro de seguridad cambia,
    y eso tiene implicancias directas en cómo diseñas los permisos, el logging y la validación de outputs.
    Especialmente si estás construyendo agentes con acceso a herramientas que pueden actuar sobre el mundo.<br/><br/>
    Cerramos con proyecciones concretas para los próximos años:
    la commoditización de los modelos grandes,
    el ascenso de modelos pequeños y especializados que corren localmente,
    las mejoras en razonamiento formal,
    la memoria persistente como solución al problema del contexto
    y el avance de marcos regulatorios activos en distintas jurisdicciones.<br/><br/>
    El objetivo no es predecir el futuro,
    sino entender qué tendencias ya están en marcha
    y cómo afectan las decisiones que tomamos hoy cuando construimos con Python sobre estos sistemas.`,
    time: "11:30 - 12:30",
    room: "Salón A2",
    speakers: [{
      name: "Francisco Alfaro",
      image: "/images/speakers/francisco-alfaro.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/faam/",
        }
    },
    {
      name: "Valeska Canales",
      image: "/images/speakers/valeska-canales.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/vcanalesp/",
        }
    }],
    category: "IA",
    level: "Intermedio",
    tags: ["IA", "Machine Learning"],
  },
  {
    id: 14,
    city: "valparaiso",
    type: "taller",
    title: `"Vibe Coding" Profesional: De la Idea al MVP en Minutos.`,
    description: `Una sesión dinámica sobre cómo utilizar agentes de IA y Python
    para prototipar ideas a "velocidad de la luz" en herramientas como AI Studio y Antigravity.
    Veremos cómo la combinación de un buen entorno de desarrollo
    y modelos como Gemini pueden generar código funcional,
    tests y documentación casi instantáneamente,
    permitiendo que el foco vuelva a ser la resolución del problema y no la sintaxis.`,
    time: "14:00 - 15:00",
    room: "Salón A2",
    speakers: [{
      name: "Lesly Zerna",
      image: "/images/speakers/lesly-zerna.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/lesly-zerna/",
          instagram: "https://www.instagram.com/leslysandra/",
          twitter: "https://twitter.com/leslysandra"
        }
    }],
    category: "Software",
    level: "Principiante",
    tags: ["Software"],
  },
  {
    id: 16,
    city: "santiago",
    type: "recepcion",
    title: "Bienvenida",
    description: "Inicio de actividades y acreditación de participantes",
    time: "10:15 - 10:30",
    room: "Auditorio",
    speaker: null,
  },
  {
    id: 17,
    city: "santiago",
    type: "charla",
    title: "Alineando LLMs con DPO: de SFT a producción usando la API de OpenAI.",
    description: `Esta charla es de tiene por objetivo explorar una estrategia
    para alinear modelos de lenguaje mediante Direct Preference Optimization (DPO),
    una alternativa más estable y eficiente que enfoques clásicos basados en RLHF
    con modelo de recompensa separado.<br/><br/>
    Se presentará un pipeline end-to-end:
    diseño de pares de preferencias,
    estructura del dataset,
    validación,
    entrenamiento SFT,
    optimización con DPO,
    selección de beta,
    evaluación de resultados
    y recomendaciones para llevar un modelo afinado a entornos reales.<br/><br/>
    La charla está orientada a desarrolladores y equipos que ya trabajan
    con Python, APIs de modelos y fine-tuning,
    y quieren incorporar técnicas modernas de alignment en sus productos.`,
    time: "10:30 - 11:00",
    room: "Auditorio",
    speakers: [{
      name: "Oscar Cariceo",
      image: "/images/speakers/oscar-cariceo.webp",
      socials: {
          linkedin: "https://linkedin.com/in/ocariceo/",
        }
    }],
    category: "IA",
    level: "Avanzado",
    tags: ["Inteligencia Artificial", "Machine Learning", "LLMs", "DPO", "RLHF"],
  },
  {
    id: 18,
    city: "santiago",
    type: "charla",
    title: "Aprender Python en la era del autocompletado: una apuesta pedagógica.",
    description: `Copilot, Cursor y ChatGPT cambiaron lo que significa aprender a programar.
    Un estudiante de primer año hoy puede entregar código funcional
    sin haber pensado nunca qué problema estaba resolviendo —y eso, para quienes enseñamos Python,
    es un problema pedagógico nuevo que las herramientas que usamos no están equipadas para resolver.
    VSCode, Colab y los asistentes de IA fueron diseñados para productividad de desarrolladores profesionales,
    no para el aprendizaje.<br/><br/>
    En esta charla presento Maieutic,
    un entorno de programación construido para enseñar Python en este nuevo contexto.
    En lugar de autocompletar,
    Maieutic obliga al estudiante a especificar el comportamiento esperado antes de escribir código,
    responde sus preguntas de sintaxis directamente,
    pero devuelve sus preguntas de razonamiento como contra-preguntas,
    y al final compara lo que el estudiante dijo que iba a hacer con lo que efectivamente escribió.
    La apuesta de fondo: escribir código desde cero importa menos que antes;
    especificar comportamiento,
    leer código críticamente
    y notar la brecha entre intención e implementación importan más.
    Esas son las habilidades durables que un curso de Python debería entrenar hoy.`,
    time: "11:00 - 11:30",
    room: "Auditorio",
    speakers: [{
      name: "Paula Vásquez-Henríquez",
      image: "/images/speakers/paula-vasquez-henriquez.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/pvasquezh/",
        }
    }],
    category: "Educación",
    level: "Intermedio",
    tags: ["Educación"],
  },
  {
    id: 19,
    city: "santiago",
    type: "break",
    title: "Coffee Break",
    description: "",
    time: "11:30 - 12:00",
    room: "Auditorio",
    speaker: null,
  },
  {
    id: 20,
    city: "santiago",
    type: "charla",
    title: " Optimizando SoloTodo.cl para aguantar 15 años de Cyber Day.",
    description: `SoloTodo.cl es un sitio de comparación de precios
    que aumenta explosivamente su tráfico los días de Cyber Day,
    causando estrepitosas y vergonzosas caídas los primeros años del evento.
    En esta charla hablaremos de las causas de estos costalazos,
    como monitorearlos,
    y de las técnicas de optimización a nivel de Python, Django, base de datos (SQL / Postgres)
    e infraestructura / servicios (AWS)
    que hemos aprendido e implementado durante los últimos 15 años.`,
    time: "12:00 - 12:30",
    room: "Auditorio",
    speakers: [{
      name: "Vijay Khemlani",
      image: "/images/speakers/vijay-khemlani.webp",
      socials: {
          instagram: "https://www.instagram.com/vijay.khemlani/",
        }
    }],
    category: "Web",
    level: "Intermedio",
    tags: ["Web"],
  },
  {
    id: 21,
    city: "santiago",
    type: "charla",
    title: " Presentación Python Chile.",
    description: ``,
    time: "12:30 - 12:45",
    room: "Auditorio",
    speakers: [],
    category: "Comunidad",
    level: "Principiante",
    tags: ["Comunidad"],
  },
  {
    id: 22,
    city: "santiago",
    type: "break",
    title: "Almuerzo",
    description: "",
    time: "12:45 - 14:00",
    room: "Auditorio",
    speaker: null,
  },
  {
    id: 23,
    city: "santiago",
    type: "charla",
    title: " Código a Prueba de Incendios: ADRs, Spikes y Simulación con Python.",
    description: ``,
    time: "14:00 - 14:30",
    room: "Auditorio",
    speakers: [{
      name: "Ernesto Vivanco",
      image: "/images/speakers/ernesto-vivanco.webp",
      socials: {}
    }],
    category: "",
    level: "",
    tags: [],
  },
  {
    id: 24,
    city: "santiago",
    type: "charla",
    title: "Crea tu DJ con IA: Agentes en Python y Open Source.",
    description: `¿Qué pasa cuando un modelo de lenguaje deja de solo hablar de música
    y empieza a curar playlists con tus canciones reales?
    En esta charla construimos un agente de IA que funciona como tu DJ personal — usando Python,
    herramientas 100% open source, y conectado directamente a Spotify. Capa por capa: desde un agente que solo conversa, hasta uno que busca canciones, arma playlists reales, y recuerda tus gustos. Todo local, todo open source, todo en Python.`,
    time: "14:30 - 15:00",
    room: "Auditorio",
    speakers: [{
      name: "Hazel Saenz",
      image: "/images/speakers/hazel-saenz.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/hazelsaenz/",
          instagram: "https://www.instagram.com/hazelsaenz.tech/"
        }
    }],
    category: "IA",
    level: "Principiante",
    tags: ["Inteligencia Artificial", "Agentes de IA", "Python"],
  },
  {
    id: 25,
    city: "santiago",
    type: "charla",
    title: " Más allá de la consola: automatizando la nube con Python y Boto3.",
    description: `Las plataformas cloud ofrecen enormes capacidades,
    pero muchas veces los desarrolladores siguen realizando tareas repetitivas
    desde la consola web o dependiendo únicamente de herramientas de infraestructura como código.<br/><br/>
    En esta charla exploraremos
    cómo Python puede utilizarse para automatizar operaciones cloud
    interactuando directamente con las APIs de AWS mediante Boto3.
    Veremos cómo funciona Boto3 internamente,
    incluyendo el uso de sessions, clients y resources.<br/><br/>
    A través de ejemplos prácticos mostraremos cómo automatizar tareas comunes como interactuar con S3,
    manejar grandes resultados con paginators
    y gestionar estados de recursos con waiters.
    La charla está dirigida a desarrolladores Python interesados en cloud
    que quieren comenzar a automatizar y gestionar infraestructura desde código.`,
    time: "15:00 - 15:30",
    room: "Auditorio",
    speakers: [{
      name: "Alison Alvez",
      image: "/images/speakers/alison-alvez.webp",
      socials: {
        linkedin: "https://linkedin.com/in/alisonalvezz"
      }
    }],
    category: "DevOps",
    level: "Intermedio",
    tags: ["DevOps"],
  },
  {
    id: 26,
    city: "santiago",
    type: "charla",
    title: " Charlas relámpago.",
    description: ``,
    time: "15:30 - 16:00",
    room: "Auditorio",
    speakers: [],
    category: "",
    level: "",
    tags: [],
  },
  {
    id: 27,
    city: "santiago",
    type: "cierre",
    title: "Cierre",
    description: "",
    time: "16:00 - 16:15",
    room: "Auditorio",
    speaker: null,
  },
  {
    id: 28,
    city: "santiago",
    type: "taller",
    title: `"Vibe Coding" Profesional: De la Idea al MVP en Minutos.`,
    description: `Una sesión dinámica sobre cómo utilizar agentes de IA y Python
    para prototipar ideas a "velocidad de la luz" en herramientas como AI Studio y Antigravity.
    Veremos cómo la combinación de un buen entorno de desarrollo
    y modelos como Gemini pueden generar código funcional,
    tests y documentación casi instantáneamente,
    permitiendo que el foco vuelva a ser la resolución del problema y no la sintaxis.`,
    time: "10:30 - 11:30",
    room: "Laboratorio Computación",
    speakers: [{
      name: "Lesly Zerna",
      image: "/images/speakers/lesly-zerna.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/lesly-zerna/",
          instagram: "https://www.instagram.com/leslysandra/",
          twitter: "https://twitter.com/leslysandra"
        }
    }],
    category: "Software",
    level: "Principiante",
    tags: ["Software"],
  },
  {
    id: 29,
    city: "santiago",
    type: "taller",
    title: `SDLC en la era agentica.`,
    description: `El ciclo de vida del desarrollo de software (SDLC)
    está siendo transformado profundamente por la irrupción de los agentes de inteligencia artificial.
    En esta sesión exploraremos cómo las distintas etapas del SDLC
    —desde la planificación y el diseño hasta el testing y el despliegue—
    están evolucionando en un mundo donde los agentes autónomos pueden escribir código,
    revisar pull requests,
    detectar bugs
    y orquestar pipelines completos con mínima intervención humana.<br/></br>
    Veremos casos concretos de cómo equipos de desarrollo
    están integrando agentes en su flujo de trabajo hoy,
    qué habilidades y prácticas se vuelven más valiosas,
    y cuáles son los nuevos desafíos en gobernanza, trazabilidad y calidad que esta era agentica nos impone.
    El objetivo es que salgas con una visión clara
    y accionable de cómo adaptar tu proceso de desarrollo para trabajar con agentes, no solo junto a ellos.`,
    time: "14:00 - 15:00",
    room: "Laboratorio Computación",
    speakers: [{
      name: "Jassen Castillo Espinoza",
      image: "/images/speakers/jassen-castillo-espinoza.webp",
      socials: {
          linkedin: "https://www.linkedin.com/in/artiko00/",
        }
    }],
    category: "IA",
    level: "Intermedio",
    tags: ["IA"],
  },
  {
    id: 30,
    city: "santiago",
    type: "taller",
    title: ` PySchool: Escape Room – Misión Estación Espacial`,
    description: `En este taller del PyDay Santiago, el equipo de Python Chile te desafía a entrar a la Estación Espacial de PySchool: 
    un juego de escape interactivo donde aprenderás las bases de Python desde cero, resolviendo enigmas habitación por habitación escribiendo código real por primera vez.`,
    time: "10:30 - 11:30",
    room: "Laboratorio Computación 2",
    speakers: [{
      name: "Python Chile",
      image: "/images/speakers/pyschool-logo.webp",
    }],
    category: "Educación",
    level: "Principiante",
    tags: ["Educación"],
  },
];

export default allTalks;

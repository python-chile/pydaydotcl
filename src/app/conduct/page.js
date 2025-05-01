import Link from "next/link";

export default function ConductPage() {
  return (
    <article className="container-py max-w-4xl mx-auto space-y-16">
      {/* Encabezado */}
      <header className="text-center space-y-6 animate-fade-in">
        <h1 className="section-title text-5xl font-bold text-py-yellow">
          Código de Conducta
        </h1>
        <p className="text-xl text-py-text/80 max-w-2xl mx-auto">
          Adaptación del código de conducta de la Python Software Foundation
          para la comunidad Python Chile
        </p>
      </header>

      {/* Sección Comunidad */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-py-yellow text-center">
          Nuestra Comunidad
        </h2>
        <div className="prose prose-invert max-w-none text-py-text/90">
          <p className="text-lg">
            Formada por miembros con diversas habilidades y experiencias, nos
            regimos por:
          </p>
          <ul className="space-y-4 pl-6 list-disc marker:text-py-green">
            {[
              "Colaboración activa y voluntaria",
              "Reconocimiento del esfuerzo comunitario",
              "Respeto a diferentes perspectivas",
              "Comunicación empática y constructiva",
              "Lenguaje inclusivo y acogedor",
            ].map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Normas Principales */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-py-yellow text-center">
          Nuestras Normas
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-py-text/90">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-py-green">
              Derechos Fundamentales
            </h3>
            <p className="text-lg">
              Respeto a todas las identidades independientemente de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Género",
                "Orientación",
                "Etnia",
                "Religión",
                "Nacionalidad",
                "Ideología",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-py-green">Compromisos</h3>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Ambiente seguro e inclusivo",
                "Resolución pacífica de conflictos",
                "Profesionalismo en interacciones",
                "Integridad en todas las acciones",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conducta Prohibida */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-py-yellow text-center">
          Comportamiento Inapropiado
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-py-text/90">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-py-red mix-blend-difference hover:mix-blend-normal transition-all">
              Interacciones Sociales
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Acoso en cualquier forma",
                "Compartir información privada",
                "Contacto físico no deseado",
                "Lenguaje sexual inapropiado",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-py-red mix-blend-difference hover:mix-blend-normal transition-all">
              Actividades Prohibidas
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Actividades ilícitas",
                "Propaganda política",
                "Suplantación de identidad",
                "Interrupciones deliberadas",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consecuencias */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-py-yellow text-center">
          Consecuencias
        </h2>
        <div className="prose prose-invert max-w-none text-py-text/90">
          <ol className="list-decimal pl-6 space-y-4">
            {[
              "Evaluación inicial del reporte",
              "Verificación de conflictos de interés",
              "Reunión con las partes involucradas",
              "Análisis y propuesta de acciones",
              "Comunicación formal de resultados",
              "Seguimiento post-resolución",
            ].map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <footer className="text-center space-y-6">
        <Link
          href="mailto:coc@pythonchile.cl"
          className="btn-primary inline-flex items-center px-8 py-4 text-lg"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Reportar Incumplimiento
        </Link>
        <p className="text-py-text/60 text-sm">
          Respuesta garantizada en menos de 48 horas
        </p>
      </footer>
    </article>
  );
}

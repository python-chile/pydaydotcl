import Link from "next/link";

export default function CodeOfConductPage() {
  return (
    <section className="container-py relative z-10">
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-3xl p-6 md:p-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="section-title text-[var(--accent-yellow)] mb-4">
            Código de Conducta
          </h1>
          <p className="text-lg text-white/80">
            (Adaptación del código de conducta de la Python Software Foundation)
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Sección Nuestra Comunidad */}
          <div className="bg-gradient-to-br from-[var(--primary-green)]/10 to-[var(--accent-yellow)]/5 p-6 rounded-xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--accent-yellow)]">
              Nuestra Comunidad
            </h2>
            <p className="text-lg mb-6">
              Los miembros de Python Chile son <strong className="text-[var(--primary-green)]">considerados, respetuosos</strong> y 
              tienen <strong className="text-[var(--primary-green)]">buena disposición</strong>. Valores fundamentales:
            </p>
            <ul className="space-y-4 pl-6 list-disc marker:text-[var(--accent-yellow)]">
              {[
                "Colaboración activa y voluntaria",
                "Reconocimiento del esfuerzo comunitario",
                "Respeto a diferentes puntos de vista",
                "Comunicación empática",
                "Lenguaje inclusivo"
              ].map((item, index) => (
                <li key={index} className="text-white/90">{item}</li>
              ))}
            </ul>
          </div>

          {/* Sección Normas */}
          <div className="border-l-4 border-[var(--primary-green)] pl-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--accent-yellow)]">
              Nuestras Normas
            </h2>
            <p className="text-lg">
              Garantizamos respeto a todas las identidades y experiencias, sin distinción de:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {['Género', 'Orientación', 'Etnia', 'Religión', 'Nacionalidad', 'Ideología'].map((item, index) => (
                <div key={index} className="badge-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Comportamiento Inapropiado */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--accent-yellow)]">
              Conducta No Permitida
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Acoso en cualquier forma",
                "Compartir información privada sin consentimiento",
                "Lenguaje violento o discriminatorio",
                "Contenido sexual no solicitado",
                "Interrupciones deliberadas",
                "Propaganda política"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                  <div className="text-[var(--outline-red)]">✖</div>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="text-center border-t border-[var(--primary-green)]/30 pt-12 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--accent-yellow)]">
              Reportar Incumplimiento
            </h2>
            <Link
              href="mailto:coc@pythonchile.cl"
              className="btn-primary inline-flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactar al Comité
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
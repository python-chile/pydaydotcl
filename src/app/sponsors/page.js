import Head from 'next/head';
import DynamicContent from './components/DynamicContent';
import HeroSection from '@/components/HeroSection';

export default function Patrocinadores() {
  return (
    <>
      <Head>
        <title>Patrocinadores - PyDay Chile 2025</title>
        <meta
          name="description"
          content="Conviértete en patrocinador de PyDay Chile 2025 y conecta con la comunidad Python en Chile"
        />
      </Head>

      <HeroSection
        title="Patrocina PyDay Chile 2025"
        subtitle="Conecta tu marca con la comunidad Python en Chile y contribuye al desarrollo tecnológico del país"
        motionConfig={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
        }}
      >
        <div className="mt-8">
          <a href="#contacto" className="btn-primary">
            Contáctanos
          </a>
        </div>
      </HeroSection>

      <DynamicContent />
    </>
  );
}
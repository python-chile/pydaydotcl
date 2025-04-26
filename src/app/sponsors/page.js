import Head from "next/head";
import DynamicContent from "./components/DynamicContent";
import HeroSection from "@/components/HeroSection";

export default function Patrocinadores() {
  return (
    <>
      <Head>
        <title>
          Patrocina PyDay Chile 2025 - Conecta con la comunidad Python
        </title>
        <meta
          name="description"
          content="Conviértete en patrocinador de PyDay Chile 2025 y conecta tu marca con la comunidad Python en Chile"
        />
      </Head>
      <HeroSection
        title={
          <>
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#FFD43B] bg-clip-text text-transparent text-4xl md:text-6xl">
              Patrocina PyDay Chile 2025
            </span>
            <div className="mt-3 md:mt-4 h-1 w-16 md:w-24 bg-[#4ADE80] mx-auto rounded-full" />
          </>
        }
        subtitle="Conecta tu marca con la comunidad Python líder en Latinoamérica"
        className="relative overflow-hidden px-4 sm:px-6"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#4ADE80] rounded-full blur-[50px] md:blur-[100px] -top-10 -left-10 md:-top-20 md:-left-20" />
          <div className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-[#FFD43B] rounded-full blur-[40px] md:blur-[80px] -bottom-5 -right-5 md:-bottom-10 md:-right-10" />
        </div>
      </HeroSection>
      <DynamicContent />
    </>
  );
}

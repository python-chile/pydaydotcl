"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SponsorLogo from "@/components/SponsorLogo";
import mockSponsors from "@/data/sponsors";

export default function SponsorList() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    setSponsors(mockSponsors);

    //TODO: Cuando se implemente Sanity:
    // const fetchSponsors = async () => {
    //   const data = await client.fetch('*[_type == "sponsor"] | order(level asc)');
    //   setSponsors(data);
    // };
    // fetchSponsors();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container-py bg-black/10 backdrop-blur relative"
    >
      <h2 className="section-title">Patrocinadores 2024</h2>
      {/* Contenedor Principal */}

      <div
        className="max-w-6xl mx-auto bg-gradient-to-br from-green-500/10 from-10% via-black/30 via-50% to-green-500/10 to-90% 
  backdrop-blur-[20px] rounded-3xl 
  border border-green-500/30 
  shadow-[0_0_80px_-20px_rgba(74,222,128,0.3)]
  transform-gpu hover:shadow-[0_0_100px_-30px_rgba(74,222,128,0.4)] 
  transition-shadow duration-500"
      >
        {/* Capa de luminosidad dinámica */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent_70%)] 
          pointer-events-none"
        />

        <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <SponsorLogo
              key={sponsor._id}
              src={sponsor.logo.asset.url}
              alt={sponsor.name}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-3xl
        rounded-2xl transition-all duration-500 hover:duration-300
        hover:bg-white/10 hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]
        border border-white/5 hover:border-green-400/30
        transform-gpu hover:-translate-y-2 cursor-pointer"
            >
              {/* Efecto de iluminación orgánica */}
              <div
                className="absolute inset-0 bg-[radial-gradient(200px_circle_at_center,_rgba(74,222,128,0.15),_transparent_80%)] 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Borde dinámico */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-white/5 
        group-hover:border-green-400/20 transition-all duration-500"
              />
            </SponsorLogo>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

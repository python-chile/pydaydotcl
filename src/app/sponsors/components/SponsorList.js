'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SponsorLogo from '@/components/SponsorLogo';
import mockSponsors from "@/data/sponsors"


export default function SponsorList() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    setSponsors(mockSponsors);
    
    //FIXME: Cuando se implemente Sanity:
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
      className="container-py bg-black/10 backdrop-blur"
    >
      <h2 className="section-title">Patrocinadores 2024</h2>
      <div className="max-w-4xl mx-auto">
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <SponsorLogo
              key={sponsor._id}
              src={sponsor.logo.asset.url}
              alt={sponsor.name}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
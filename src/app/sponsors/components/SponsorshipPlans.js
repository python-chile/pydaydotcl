"use client";
import { motion } from "framer-motion";

export default function SponsorshipPlans({ plans }) {
  return (
    <motion.section className="container mx-auto py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-[#4ADE80] to-[#FFD43B] bg-clip-text text-transparent">
            Planes de Patrocinio
          </span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 px-2 sm:px-0">
          Personaliza tu participación según tus objetivos
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 md:p-8 rounded-xl md:rounded-2xl transition-all max-w-[400px] md:max-w-none mx-auto ${
              index === 0
                ? "border-2 border-[#FFD43B] md:transform md:scale-[1.02]"
                : "border border-gray-700"
            }`}
            style={{
              background: `linear-gradient(145deg, ${
                index === 0 ? "#2C2C2C" : "#1F1F1F"
              }, #181818)`,
            }}
          >
            {index === 0 && (
              <div className="absolute top-2 right-2 md:top-3 md:right-3 text-xs md:text-sm bg-[#FFD43B] text-gray-900 px-3 py-1 rounded-bl-lg font-medium">
                Más Popular
              </div>
            )}

            <div className="mb-6 md:mb-8">
              <h3
                className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                  index === 0 ? "text-[#FFD43B]" : "text-[#4ADE80]"
                }`}
              >
                {plan.name}
              </h3>

              <div className="flex flex-col items-center md:items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  ${plan.priceCLP.toLocaleString()}
                </span>
                <div className="text-center md:text-left">
                  <span className="text-sm md:text-base text-gray-400">
                    CLP
                  </span>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">
                    ≈ ${plan.priceUSD.toLocaleString()} USD
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#4ADE80]/10 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-1">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-[#4ADE80]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-300">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact-form"
              className={`w-full block text-center py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium text-sm md:text-base ${
                index === 0
                  ? "bg-[#FFD43B] hover:bg-[#FFD43B]/90 text-gray-900"
                  : "bg-[#4ADE80]/10 hover:bg-[#4ADE80]/20 text-[#4ADE80] hover:text-white"
              }`}
            >
              {index === 0 ? "Comenzar Ahora" : "Seleccionar Plan"}
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

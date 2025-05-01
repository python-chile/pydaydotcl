"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChileMap({ cities }) {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Contenedor del mapa */}
        <div className="w-full md:w-1/2 lg:w-1/2">
          <div className="aspect-[3/6] sm:aspect-[3/5] lg:aspect-auto lg:h-[450px] w-full bg-white/5 backdrop-blur-sm rounded-lg p-4 relative shadow-lg border border-white/10">
            <svg viewBox="0 0 100 300" className="w-full h-full" aria-label="Mapa de Chile con ciudades">
              <g transform="translate(-10,0) scale(1.2,1)">
                <path
                  d="M50,20 Q60,50 55,100 Q50,150 60,200 Q70,250 50,280"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="opacity-60"
                />
                {cities.map((city) => (
                  <g
                    key={city.slug}
                    onClick={() => setActiveCity(city.slug)}
                    className="cursor-pointer"
                    role="button"
                    aria-pressed={activeCity === city.slug}
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveCity(city.slug);
                      }
                    }}
                  >
                    <circle
                      cx={city.mapCoords.x}
                      cy={city.mapCoords.y}
                      r={activeCity === city.slug ? 6 : 4}
                      fill={activeCity === city.slug ? "#FFE141" : "#3D8B37"}
                      strokeWidth={activeCity === city.slug ? 2 : 1}
                      stroke="#FFFFFF"
                      className="transition-all duration-300"
                    />
                    <text
                      x={city.mapCoords.x + 8}
                      y={city.mapCoords.y + 4}
                      fontSize="8"
                      fill="white"
                      className="pointer-events-none font-medium"
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Lista de ciudades */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center space-y-3">
          {cities.map((city) => (
            <Link
              href={`/${city.slug}`}
              key={city.slug}
              className={`block p-4 rounded-lg transition-all duration-300
                ${
                  activeCity === city.slug
                    ? "bg-green-800/80 transform scale-102 border border-green-500/50"
                    : "bg-black/30 hover:bg-black/40 border border-white/10"
                }`}
              onMouseEnter={() => setActiveCity(city.slug)}
              aria-current={activeCity === city.slug ? "true" : "false"}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activeCity === city.slug ? "bg-yellow-400" : "bg-green-500"
                  }`}
                  aria-hidden="true"
                ></div>
                <div>
                  <h3 className="font-bold text-lg">{city.name}</h3>
                  <p className="text-sm opacity-90">{city.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
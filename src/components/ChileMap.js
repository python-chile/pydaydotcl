"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChileMap({ cities }) {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mx-auto max-w-6xl px-4">
      {/* Contenedor del mapa */}
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <div className="aspect-[3/6] lg:aspect-auto lg:h-[400px] w-full bg-white/10 backdrop-blur-sm rounded-lg p-4 relative">
          {/* SVG simplificado del mapa de Chile */}
          <svg viewBox="0 0 100 300" className="w-full h-full">
            <g transform="translate(-10,0) scale(1.2,1)">
              <path
                d="M50,20 Q60,50 55,100 Q50,150 60,200 Q70,250 50,280"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="opacity-50"
              />
              {cities.map((city) => (
                <g
                  key={city.slug}
                  onClick={() => setActiveCity(city.slug)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={city.mapCoords.x}
                    cy={city.mapCoords.y}
                    r={activeCity === city.slug ? 6 : 4}
                    fill={activeCity === city.slug ? "#FFD700" : "#8A2BE2"}
                    className="transition-all duration-300"
                  />
                  <text
                    x={city.mapCoords.x + 8}
                    y={city.mapCoords.y + 4}
                    fontSize="8"
                    fill="white"
                    className="pointer-events-none"
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Lista de ciudades, centrada verticalmente */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center mt-6 md:mt-0 space-y-4">
        {cities.map((city) => (
          <Link
            href={`/${city.slug}`}
            key={city.slug}
            className={`block p-4 rounded-lg transition-all duration-300 
              ${
                activeCity === city.slug
                  ? "bg-purple-700 transform scale-105"
                  : "bg-black/20 hover:bg-black/30"
              }`}
            onMouseEnter={() => setActiveCity(city.slug)}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  activeCity === city.slug ? "bg-yellow-400" : "bg-purple-500"
                }`}
              ></div>
              <div>
                <h3 className="font-bold">{city.name}</h3>
                <p className="text-sm opacity-80">{city.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

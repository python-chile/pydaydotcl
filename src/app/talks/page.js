"use client";

import { useState, useEffect } from "react";
import TalkCard from "@/components/TalkCard";
import Link from "next/link";
import allTalks from "@/data/talks";
import cityData from "@/data/cities";
import EmptyState from "@/components/EmptyState";

export default function TalksPage() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const filteredTalks = allTalks.filter((talk) => {
    const cityInfo = cityData[talk.city];
    const searchTerms = debouncedSearch.toLowerCase();

    const cityMatch = !selectedCity || talk.city === selectedCity;
    const categoryMatch =
      !selectedCategory || talk.category === selectedCategory;
    const dateMatch = selectedDay ? cityInfo.date === selectedDay : true;

    const searchMatch =
      talk.title.toLowerCase().includes(searchTerms) ||
      talk.description.toLowerCase().includes(searchTerms) ||
      talk.tags?.some((tag) => tag.toLowerCase().includes(searchTerms)) ||
      talk.speaker.name.toLowerCase().includes(searchTerms);

    return cityMatch && categoryMatch && dateMatch && searchMatch;
  });

  // Obtener fechas únicas para los tabs
  const cityDates = Object.values(cityData).map((city) => ({
    date: city.date,
    name: city.name,
  }));

  return (
    <div className="container-py">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-py-text/70">
          <Link href="/" className="hover:text-py-text transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-py-text">Charlas</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-py-text">
          Charlas PyDay Chile 2025
        </h1>
        <p className="text-lg text-py-text/80">
          Explora todas las charlas programadas para los eventos de PyDay Chile
          2025. Desde principiantes hasta expertos, tenemos contenido para todos
          los niveles y áreas de interés.
        </p>
      </div>

      {/* Tabs de días */}
      <div className="mb-8 flex overflow-x-auto scrollbar-hidden p-3">
        <div className="flex space-x-2 md:space-x-4 min-w-full pb-2">
          <button
            onClick={() => setSelectedDay("")}
            className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium whitespace-nowrap ${
              !selectedDay
                ? "shadow-lg ring-2 ring-py-green ring-offset-2"
                : " text-py-text"
            }`}
          >
            Todos los días
          </button>
          {cityDates.map((city) => (
            <button
              key={city.date}
              onClick={() => setSelectedDay(city.date)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium whitespace-nowrap ${
                selectedDay === city.date
                  ? "shadow-lg ring-2 ring-offset-2"
                  : "text-py-text"
              }`}
            >
              {city.name} - {city.date.split(",")[0]}
            </button>
          ))}
        </div>
      </div>
      {/* Filtros de charlas */}
      <div className="mb-8 backdrop-blur-sm rounded-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="select-theme"
            >
              <option value="">Todas las sedes</option>
              {Object.keys(cityData).map((cityKey) => (
                <option key={cityKey} value={cityKey}>
                  {cityData[cityKey].name}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select-theme"
            >
              <option value="">Todas las categorías</option>
              <option value="tecnica">Técnica</option>
              <option value="comunidad">Comunidad</option>
              <option value="caso-de-exito">Caso de Éxito</option>
              <option value="keynote">Keynote</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar charlas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-py-text border border-py-text/20 rounded pl-9 pr-3 py-1.5 w-full md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-py-green"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute left-3 top-2 text-py-text/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Renderizado de charlas */}
      {filteredTalks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalks.map((talk) => {
            const cityInfo = cityData[talk.city];
            return (
              <TalkCard
                key={talk.id}
                talk={{
                  ...talk,
                  date: cityInfo.date,
                  location: cityInfo.name,
                  cityInfo: cityInfo,
                }}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState context="global" />
      )}

      {/* TODO: API para que funcione: */}
      {/* Subscribe for updates */}
      {/* <div className="mt-16 bg-green-800/30 backdrop-blur-sm rounded-lg p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                ¿Quieres recibir actualizaciones?
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Suscríbete para recibir notificaciones sobre nuevas charlas y
                cambios en el programa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-black/30 text-white border border-white/20 rounded px-4 py-2 w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="btn-primary whitespace-nowrap py-2">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

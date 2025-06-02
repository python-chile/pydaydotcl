import Image from "next/image";
import { 
  LuCoffee, LuPartyPopper, LuHandshake, LuMic, 
  LuWrench, LuMapPin, LuLinkedin 
} from "react-icons/lu";

export default function TalkCard({ talk, showRoom = false }) {
  const { title, time, speaker, speakers, description, tags, type, room } = talk;

  // Normalizar speakers a un array
  const normalizedSpeakers = speakers 
    ? speakers 
    : speaker 
      ? [speaker] 
      : [];

  // Mapa de estilos para todos los tipos de eventos
  const typeStyles = {
    recepcion: {
      border: "border-l-green-400",
      badge: {
        label: "Recepción",
        color: "bg-green-600/30 text-green-100",
        icon: <LuHandshake size={16} className="mr-1" />,
      }
    },
    break: {
      border: "border-l-yellow-400",
      badge: {
        label: "Break",
        color: "bg-yellow-500/30 text-yellow-100",
        icon: <LuCoffee size={16} className="mr-1" />,
      }
    },
    cierre: {
      border: "border-l-red-400",
      badge: {
        label: "Cierre",
        color: "bg-red-600/30 text-red-100",
        icon: <LuPartyPopper size={16} className="mr-1" />,
      }
    },
    charla: {
      border: "border-l-blue-400",
      badge: {
        label: "Charla",
        color: "bg-blue-500/30 text-blue-100",
        icon: <LuMic size={16} className="mr-1" />,
      }
    },
    taller: {
      border: "border-l-orange-400",
      badge: {
        label: "Taller",
        color: "bg-orange-500/30 text-orange-100",
        icon: <LuWrench size={16} className="mr-1" />,
      }
    },
  };

  const isGeneral = !normalizedSpeakers.length && 
    (type === 'recepcion' || type === 'break' || type === 'cierre');
  
  const style = typeStyles[type] || typeStyles.charla; // Default a charla si no se reconoce
  
  return (
    <div 
      className={`bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
        ${style.border} border-l-4 h-full flex flex-col`}
    >
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        {isGeneral ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div className="mb-2 md:mb-0">
              <p className="text-xs md:text-sm font-medium opacity-80">{time}</p>
              <h3 className="font-bold text-base md:text-lg">{title}</h3>
              {showRoom && room && (
                <div className="flex items-center mt-1 text-xs opacity-70">
                  <LuMapPin size={12} className="mr-1" />
                  <span>{room}</span>
                </div>
              )}
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs md:text-sm flex items-center font-semibold ${style.badge.color} self-start md:self-auto`}
            >
              {style.badge.icon}
              {style.badge.label}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            {/* Fila de tiempo y badge */}
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs md:text-sm font-medium opacity-80">{time}</p>
              <div
                className={`px-2 py-1 rounded-full text-xs flex items-center font-semibold ${style.badge.color}`}
              >
                {style.badge.icon}
                {style.badge.label}
              </div>
            </div>
            
            {/* Título */}
            <h3 className="font-bold text-base md:text-lg mb-2">{title}</h3>
            
            {/* Speakers con imágenes */}
            {normalizedSpeakers.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {normalizedSpeakers.map((spkr, idx) => (
                  <div key={idx} className="flex items-center">
                    {/* Imagen optimizada para webp 320x320 */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-purple-700 flex-shrink-0">
                      {spkr.image && (
                        <Image
                          src={spkr.image}
                          alt={spkr.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 56px, 64px"
                          quality={85}
                        />
                      )}
                    </div>
                    <div className="ml-2 min-w-0">
                      <p className="text-xs md:text-sm font-medium truncate">{spkr.name}</p>
                      
                      {/* Solo LinkedIn */}
                      {spkr.socials?.linkedin && (
                        <a 
                          href={spkr.socials.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center mt-1 text-xs opacity-70 hover:opacity-100 transition-opacity"
                          title="Perfil de LinkedIn"
                        >
                          <LuLinkedin size={14} className="mr-1 flex-shrink-0" />
                          <span className="hidden sm:inline truncate"></span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Sala */}
            {showRoom && room && (
              <div className="flex items-center mb-2 text-xs opacity-70">
                <LuMapPin size={12} className="mr-1" />
                <span>{room}</span>
              </div>
            )}
          </div>
        )}

        {/* Descripción */}
        {description && (
          <p className="text-xs md:text-sm opacity-80 mb-3 flex-grow">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1 md:gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-600/40 hover:bg-green-600/60 px-2 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
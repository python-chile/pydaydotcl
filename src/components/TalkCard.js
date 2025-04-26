import Image from "next/image";

export default function TalkCard({ talk }) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-purple-700">
            {talk.speaker.image && (
              <Image
                src={talk.speaker.image}
                alt={talk.speaker.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">{talk.time}</p>
            <h3 className="font-bold text-lg">{talk.title}</h3>
            <p className="text-sm">{talk.speaker.name}</p>
          </div>
        </div>
        <p className="text-sm opacity-80 line-clamp-2">{talk.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {talk.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-green-600/40 hover:bg-green-600/60 px-2 py-1 rounded-full transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

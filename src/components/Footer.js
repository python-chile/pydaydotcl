import Link from "next/link";
import {
  FaDiscord,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiMeetup } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/dTHMfJvauS",
      icon: <FaDiscord className="h-6 w-6" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/groups/pythonchiledev/",
      icon: <FaFacebook className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/pythonchiledev",
      icon: <FaTwitter className="h-6 w-6" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/PythonChile",
      icon: <FaYoutube className="h-6 w-6" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/pythonchile",
      icon: <FaTelegram className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pythonchiledev",
      icon: <FaInstagram className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/python-chile",
      icon: <FaGithub className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/groups/4929519/",
      icon: <FaLinkedin className="h-6 w-6" />,
    },
    {
      name: "Meetup",
      url: "https://meetup.com/es/pythonchile",
      icon: <SiMeetup className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-md py-8 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Otros contenidos del footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Acerca de */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Acerca de Python Chile
            </h3>
            <p className="text-sm text-white/90">
              Python Chile es el punto de encuentro de todos los apasionados por
              Python en nuestro país.
            </p>
          </div>
          {/* Enlaces útiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Enlaces útiles
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/codigo-conducta"
                  className="text-white/90 hover:text-accent-yellow transition-colors duration-200"
                >
                  Código de conducta
                </Link>
              </li>
              {/* Otros enlaces */}
            </ul>
          </div>
          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Síguenos</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-py-text hover:text-py-green transition-colors duration-200"
                  aria-label={`Visitar ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-center text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Python Chile. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

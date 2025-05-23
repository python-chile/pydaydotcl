"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAFinal({
  title,
  subtitle,
  buttonText,
  href = "#contacto",
  className = "bg-gradient-to-b from-green-900/40 to-black/60",
  email,
}) {
  // Si se proporciona un email, crear un mailto link
  const linkHref = email
    ? `mailto:${email}?subject=Interés en patrocinar PyDay Chile 2025`
    : href;

  const renderSubtitle = () => {
    if (!subtitle) return null;

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = subtitle.split(urlRegex);

    return (
      <p className="text-xl mb-8">
        {parts.map((part, i) => {
          if (part.match(urlRegex)) {
            return (
              <Link
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-yellow)] underline hover:opacity-80 transition-opacity"
              >
                {part.replace(/(https?:\/\/)/, "")}
              </Link>
            );
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`container-py ${className} backdrop-blur text-center`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        {subtitle && renderSubtitle()}
        <Link
          href={linkHref}
          target={email ? "_blank" : undefined}
          rel={email ? "noopener noreferrer" : undefined}
          className="btn-primary inline-flex items-center"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.section>
  );
}

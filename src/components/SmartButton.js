"use client";

import Link from "next/link";
import { classNames } from "@/lib/utils";

export const SmartButton = ({ href, children, isAvailable, className }) => {
  if (!isAvailable) {
    return (
      <div className="relative group inline-block">
        <button
          disabled
          className={classNames(
            className,
            "btn-secondary opacity-50 cursor-not-allowed"
          )}
        >
          {children}
        </button>
        <span
          className="absolute hidden group-hover:flex items-center justify-center -top-10 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10 backdrop-blur-md transition-all duration-300 border border-white/15 shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(61, 139, 55, 0.8), rgba(242, 57, 57, 0.6))",
            boxShadow:
              "0 4px 12px rgba(242, 57, 57, 0.3), 0 0 20px rgba(61, 139, 55, 0.2)",
          }}
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5 text-accent-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Contenido no disponible
          </span>
          <div
            className="absolute h-2 w-2 left-1/2 -translate-x-1/2 bottom-[-4px] rotate-45"
            style={{
              background:
                "linear-gradient(135deg, rgba(61, 139, 55, 0.8), rgba(242, 57, 57, 0.6))",
            }}
          ></div>
        </span>
      </div>
    );
  }

  return (
    <Link href={href} className="btn-primary">
      {children}
    </Link>
  );
};

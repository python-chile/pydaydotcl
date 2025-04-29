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
        <span className="absolute hidden group-hover:block -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
          Contenido no disponible
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

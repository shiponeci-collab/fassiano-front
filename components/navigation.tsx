"use client";
import React from "react";

export function Navigation() {
  return (
    <nav className="sticky top-0 inset-x-0 z-50 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center sm:justify-start py-2 sm:py-3">
          <img
            src="/brand-logohero.png"
            alt="FASSIANO"
            className="h-7 sm:h-9 w-auto object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]"
          />
        </div>
      </div>
    </nav>
  );
}

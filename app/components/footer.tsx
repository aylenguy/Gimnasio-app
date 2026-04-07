"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const offset = 80;
    const top =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-14 md:grid-cols-3 md:gap-12 md:px-8 lg:px-12">
        {/* Marca */}
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A3FF12] sm:text-xs sm:tracking-[0.35em]">
            Pulse Training Club
          </p>

          <h3 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
            Entrená mejor
          </h3>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/65 md:mx-0">
            Un club diseñado para potenciar tu rendimiento, acompañar tu
            progreso y convertir el entrenamiento en un hábito real.
          </p>
        </div>

        {/* Navegación */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm sm:tracking-[0.25em]">
            Navegación
          </h4>

          <nav className="mt-5 flex flex-col gap-3 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-center text-white/70 transition hover:text-[#A3FF12] md:text-left"
            >
              Inicio
            </button>

            <button
              onClick={() => handleScrollTo("#planes")}
              className="text-center text-white/70 transition hover:text-[#A3FF12] md:text-left"
            >
              Planes
            </button>

            <button
              onClick={() => handleScrollTo("#beneficios")}
              className="text-center text-white/70 transition hover:text-[#A3FF12] md:text-left"
            >
              Beneficios
            </button>

            <button
              onClick={() => handleScrollTo("#contacto")}
              className="text-center text-white/70 transition hover:text-[#A3FF12] md:text-left"
            >
              Contacto
            </button>
          </nav>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm sm:tracking-[0.25em]">
            Contacto
          </h4>

          <div className="mt-5 space-y-4 text-sm text-white/70">
            <div className="flex items-start justify-center gap-3 md:justify-start">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#A3FF12]" />
              <span>Rosario, Santa Fe</span>
            </div>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#A3FF12]" />
              <span>+54 9 341 000 0000</span>
            </div>

            <div className="flex items-start justify-center gap-3 md:justify-start">
              <Clock size={18} className="mt-0.5 shrink-0 text-[#A3FF12]" />
              <span>Lun a Sáb · 07:00 a 22:00</span>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-center gap-3 text-white/70 transition hover:text-[#A3FF12] md:justify-start"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-0.5 shrink-0"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>

              <span>@pulse.training.club</span>
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] leading-6 text-white/40 sm:px-6 sm:text-xs md:px-8 lg:px-12">
        © {new Date().getFullYear()} Pulse Training Club — Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
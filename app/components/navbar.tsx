"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#planes", label: "Planes" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#clases", label: "Clases" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 bloquear scroll cuando menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 🚀 scroll suave manual
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const offset = 80; // altura navbar
    const top =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-white"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3FF12]/30 bg-[#A3FF12]/10 text-sm font-bold text-[#A3FF12]">
            P
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.18em]">
              Pulse
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
              Training Club
            </span>
          </div>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className="text-sm font-medium text-white/75 transition hover:text-[#A3FF12]"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleScrollTo("#planes")}
            className="rounded-full bg-[#A3FF12] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Asociate
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white transition hover:border-[#A3FF12] hover:text-[#A3FF12] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-[#0B0B0B] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollTo(link.href)}
                className="border-b border-white/10 py-4 text-left text-sm text-white/80 transition hover:text-[#A3FF12]"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleScrollTo("#planes")}
              className="mt-5 rounded-full bg-[#A3FF12] px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Asociate
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Dumbbell,
  Check,
  Activity,
  Smartphone,
  Users,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

const membershipItems = [
  {
    title: "Entrenamiento funcional",
    description:
      "Clases dinámicas para mejorar fuerza, resistencia y movilidad en un entorno guiado por profesionales.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    link: "Ver clases",
  },
  {
    title: "App exclusiva",
    description:
      "Accedé a rutinas, seguimiento de progreso, beneficios y novedades desde tu celular.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    link: "Descargar app",
  },
  {
    title: "Nutrición y bienestar",
    description:
      "Complementá tu entrenamiento con herramientas de alimentación y hábitos saludables.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    link: "Conocer más",
  },
  {
    title: "Espacios premium",
    description:
      "Un lugar diseñado para entrenar con comodidad, energía y foco en resultados reales.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    link: "Ver sede",
  },
];

const plans = [
  {
    name: "Plan Base",
    price: "$39.900",
    period: "/mes",
    access: "Accedé a 1 sede principal",
    featured: false,
    buttonClass: "bg-white text-black hover:bg-[#A3FF12] hover:text-black",
    features: [
      "Sala de musculación",
      "Clases grupales seleccionadas",
      "Acceso a vestuarios",
      "App de seguimiento",
    ],
  },
  {
    name: "Plan Plus",
    price: "$59.900",
    period: "/mes",
    access: "Accedé a múltiples sedes y más beneficios",
    featured: true,
    buttonClass: "bg-[#A3FF12] text-black hover:scale-[1.02]",
    features: [
      "Todas las clases",
      "Acceso multi-sede",
      "Rutinas personalizadas",
      "App + seguimiento de progreso",
      "Beneficios exclusivos",
    ],
  },
  {
    name: "Plan Elite",
    price: "$79.900",
    period: "/mes",
    access: "La experiencia más completa para entrenar mejor",
    featured: false,
    buttonClass: "bg-white text-black hover:bg-[#A3FF12] hover:text-black",
    features: [
      "Acceso total a todas las sedes",
      "Clases premium",
      "Evaluación física",
      "Plan de seguimiento",
      "Beneficios y prioridad en cupos",
    ],
  },
];

const benefits = [
  {
    icon: Dumbbell,
    title: "Equipamiento premium",
    description:
      "Máquinas, peso libre y zonas de entrenamiento pensadas para rendir mejor en cada sesión.",
  },
  {
    icon: Activity,
    title: "Seguimiento real",
    description:
      "Rutinas, progreso y objetivos organizados para que tu entrenamiento tenga dirección y constancia.",
  },
  {
    icon: Smartphone,
    title: "App exclusiva",
    description:
      "Accedé a tu membresía, novedades, beneficios y herramientas de entrenamiento desde el celular.",
  },
  {
    icon: Users,
    title: "Comunidad activa",
    description:
      "Un entorno que combina energía, acompañamiento y motivación para sostener hábitos reales.",
  },
];

const classes = [
  {
    title: "Musculación",
    description:
      "Espacios equipados para trabajar fuerza, hipertrofia y rendimiento con libertad y seguimiento.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Funcional",
    description:
      "Entrenamientos dinámicos para mejorar coordinación, resistencia, potencia y movilidad.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HIIT",
    description:
      "Sesiones intensas y efectivas para elevar pulsaciones, quemar energía y ganar condición física.",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Stretching",
    description:
      "Clases orientadas a movilidad, flexibilidad y recuperación para complementar tu entrenamiento.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative min-h-screen bg-[#0B0B0B] text-white">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          <div className="relative flex items-center justify-center overflow-hidden px-5 pb-16 pt-38 sm:px-6 sm:pt-42 md:px-20 md:py-36">
            <svg
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 800 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 850 L800 150" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M100 0 L100 1000" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M0 300 L800 100" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M250 0 L120 600" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M0 700 L500 300" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M200 1000 L600 0" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M50 1000 L300 580" stroke="#A3FF12" strokeWidth="1.2" />
              <path d="M0 120 L800 260" stroke="#A3FF12" strokeWidth="1.2" />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex w-full max-w-xl flex-col items-center text-center md:items-start md:text-left"
            >
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.4em" }}
                animate={{ opacity: 1, letterSpacing: "0.24em" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#A3FF12] sm:text-xs"
              >
                Pulse Training Club
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="max-w-lg text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Un gimnasio
                <br />
                a tu alcance
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mt-6 max-w-md text-sm leading-7 text-white/70 sm:text-base"
              >
                Entrená con energía, constancia y foco en un espacio pensado para
                superarte.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-7 text-[10px] uppercase tracking-[0.3em] text-white/80 sm:text-xs sm:tracking-[0.35em]"
              >
                Fuerza · Resistencia · Movimiento
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              >
                <a
                  href="#planes"
                  className="rounded-full bg-[#A3FF12] px-7 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Empezá hoy
                </a>

                <a
                  href="#clases"
                  className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                >
                  Ver clases
                </a>
              </motion.div>

              <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex items-center gap-2 text-[#A3FF12]">
                    <MapPin size={16} />
                    <span className="text-[11px] uppercase tracking-[0.2em]">
                      Sede
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Rosario Centro</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex items-center gap-2 text-[#A3FF12]">
                    <Clock3 size={16} />
                    <span className="text-[11px] uppercase tracking-[0.2em]">
                      Horario
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">07:00 a 22:00</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="flex items-center gap-2 text-[#A3FF12]">
                    <MessageCircle size={17} />
                    <span className="text-[11px] uppercase tracking-[0.2em]">
                      Consulta
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/80">Prueba inicial</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="mt-10 hidden items-center gap-3 text-white/85 md:flex"
              >
                
                <ArrowDown className="animate-bounce text-[#A3FF12]" size={20} />
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center bg-[#151515] px-6 py-16 md:min-h-screen md:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#A3FF12]/30 bg-[#A3FF12]/10 shadow-[0_0_40px_rgba(163,255,18,0.12)] sm:h-24 sm:w-24">
                <Dumbbell
                  size={34}
                  className="text-[#A3FF12] sm:size-[40px]"
                  strokeWidth={1.8}
                />
              </div>

              <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Pulse
              </h2>

              <p className="mt-3 text-base uppercase tracking-[0.35em] text-white/65 sm:text-lg md:text-xl">
                Training Club
              </p>

              <div className="mt-8 h-px w-24 bg-[#A3FF12]/40 sm:mt-10 sm:w-28" />

              <p className="mt-6 max-w-sm px-3 text-sm leading-7 text-white/60 sm:mt-8">
                Un espacio creado para entrenar mejor, progresar con método y
                sostener resultados reales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="bg-[#0b0b0b] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-8 lg:gap-20 lg:px-12">
          <div className="self-start md:sticky md:top-28 md:h-fit">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A3FF12]">
              Membresías
            </p>

            <h2 className="max-w-md text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-6xl">
              Tu membresía
              <br />
              <span className="text-[#A3FF12]">a otro nivel</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/72 sm:text-base lg:text-lg">
              Todo lo que necesitás para entrenar mejor, acceder a beneficios
              exclusivos y sostener tu progreso con una experiencia más completa.
            </p>

            <div className="mt-8">
              <a
                href="#planes"
                className="inline-flex rounded-full bg-[#A3FF12] px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Asociate
              </a>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {membershipItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:rounded-[28px]"
              >
                <div className="relative h-[240px] w-full sm:h-[320px] md:h-[360px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <div className="px-5 py-5 sm:px-8 sm:py-8">
                  <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    {item.description}
                  </p>

                  <a
                    href="#clases"
                    className="mt-5 inline-block text-sm font-medium text-[#A3FF12] underline underline-offset-4"
                  >
                    {item.link}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="planes"
        className="bg-[#0b0b0b] px-5 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A3FF12]">
              Membresías
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl lg:text-6xl">
              Elegí tu
              <br />
              <span className="text-[#A3FF12]">plan ideal</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base lg:text-lg">
              Encontrá la membresía que mejor se adapta a tu ritmo, tus objetivos
              y la experiencia que querés vivir dentro del club.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden rounded-[26px] border sm:rounded-[30px] ${
                  plan.featured
                    ? "border-[#A3FF12]/40 bg-[#151515] shadow-[0_0_45px_rgba(163,255,18,0.08)]"
                    : "border-white/10 bg-[#121212]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-4 top-4 rounded-full border border-[#A3FF12]/30 bg-[#A3FF12]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A3FF12] sm:right-5 sm:top-5 sm:text-[11px]">
                    Más elegido
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-base text-white/70 sm:text-lg">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                    {plan.access}
                  </p>

                  <a
                    href="#contacto"
                    className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition sm:text-base ${plan.buttonClass}`}
                  >
                    Asociate
                  </a>

                  <div className="my-7 h-px w-full bg-white/12 sm:my-8" />

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-white/82"
                      >
                        <Check
                          className="mt-0.5 shrink-0 text-[#A3FF12]"
                          size={20}
                          strokeWidth={2.4}
                        />
                        <span className="text-sm leading-7 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#clases"
                    className="mt-7 inline-block text-sm font-medium text-[#A3FF12] underline underline-offset-4 sm:mt-8 sm:text-base"
                  >
                    Ver clases
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      

      {/* CLASSES */}
      <section
        id="clases"
        className="bg-[#0b0b0b] px-5 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A3FF12]">
              Clases
            </p>

            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl lg:text-6xl">
              Entrenamientos para
              <br />
              <span className="text-[#A3FF12]">cada objetivo</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base lg:text-lg">
              Elegí la disciplina que mejor se adapta a tu ritmo, combiná
              intensidad con recuperación y construí una rutina sostenible.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {classes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] sm:rounded-[28px]"
              >
                <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px] lg:h-[340px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-[#A3FF12]/25 bg-[#A3FF12]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A3FF12] sm:left-6 sm:top-6 sm:text-[11px]">
                    Pulse Club
                  </div>
                </div>

                <div className="px-5 py-5 sm:px-8 sm:py-8">
                  <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    {item.description}
                  </p>

                  <a
                    href="#planes"
                    className="mt-6 inline-block text-sm font-medium text-[#A3FF12] underline underline-offset-4"
                  >
                    Ver membresías
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

{/* BENEFITS */}
      <section
        id="beneficios"
        className="bg-[#0b0b0b] px-5 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A3FF12]">
              Beneficios
            </p>

            <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl lg:text-6xl">
              Mucho más que
              <br />
              <span className="text-[#A3FF12]">entrenar</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base lg:text-lg">
              Diseñamos una experiencia completa para que entrenes con método,
              motivación y herramientas que acompañen tu progreso dentro y fuera
              del club.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-[24px] border border-white/10 bg-[#121212] p-6 transition hover:-translate-y-1 hover:border-[#A3FF12]/30 sm:rounded-[28px] sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A3FF12]/20 bg-[#A3FF12]/10">
                    <Icon
                      className="text-[#A3FF12]"
                      size={26}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white sm:mt-6 sm:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                    {benefit.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA / CONTACTO */}
      <section
        id="contacto"
        className="bg-[#0b0b0b] px-5 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="overflow-hidden rounded-[28px] border border-[#A3FF12]/20 bg-[linear-gradient(135deg,#111111_0%,#171717_55%,#0f0f0f_100%)] p-6 sm:rounded-[34px] sm:p-8 lg:p-14"
          >
            <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A3FF12]">
                  Empezá hoy
                </p>

                <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-6xl">
                  Tu mejor versión
                  <br />
                  <span className="text-[#A3FF12]">empieza ahora</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base lg:text-lg">
                  Sumate a Pulse Training Club y entrená con energía, método y
                  un entorno pensado para sostener resultados reales.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="flex items-center gap-2 text-[#A3FF12]">
                      <MessageCircle size={16} />
                      <span className="text-[11px] uppercase tracking-[0.2em]">
                        WhatsApp
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/80">
                      Respuesta rápida
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="flex items-center gap-2 text-[#A3FF12]">
                      <MapPin size={16} />
                      <span className="text-[11px] uppercase tracking-[0.2em]">
                        Ubicación
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/80">
                      Rosario, Santa Fe
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="flex items-center gap-2 text-[#A3FF12]">
                      <Clock3 size={16} />
                      <span className="text-[11px] uppercase tracking-[0.2em]">
                        Horario
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/80">
                      Lun a sáb · 07 a 22 hs
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A3FF12] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] sm:text-base lg:w-auto"
                >
                  Solicitar información
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#planes"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#A3FF12] hover:text-[#A3FF12] sm:text-base lg:w-auto"
                >
                  Ver planes
                </a>

                <p className="mt-2 max-w-xs text-center text-sm leading-7 text-white/60 lg:text-right">
                  Escribinos para conocer planes, clases disponibles y beneficios
                  según tu objetivo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import {
  fadeIn,
  fadeUp,
  fadeUpTitle,
  photoIn,
  navbarIn,
  stagger,
  buttonInteractive,
} from "@/lib/motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "About Us", "Team", "Classes", "Plans"];

// Variantes simples
const navbarIn = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const buttonInteractive = {
  whileTap: { scale: 0.98 },
  whileHover: { y: -1 },
};

export default function Hero() {
  const [open, setOpen] = useState(false);
  // Parallax sutil de la foto
  const prefersReduced = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Si el usuario prefiere menos animación, parallax ≈ 0
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, 12] // 0→+12px
  );

  return (
    <section className="relative w-full mb-28  lg:h-[1100px]" ref={heroRef}>
      {/* Fondo global (si no lo necesitas, puedes quitar este) */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <Image
          src="/logo-fondo/fondo-humo.webp"
          alt="Fondo general"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
      </motion.div>

      {/* Header */}
      <motion.header
        variants={navbarIn}
        initial="hidden"
        animate="show"
        className="
        relative z-50
        max-w-[1400px] mx-auto px-6 pt-5
        grid grid-cols-[auto_1fr_auto] items-center gap-4
        text-white
      "
      >
        {/* Izquierda: logo + marca */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-fondo/logo-gym.webp"
            width={90}
            height={90}
            alt="Logo"
            priority={false}
          />
          <p className="text-base xl:text-lg font-title font-bold text-[#FFD60A]">
            BrandGym
          </p>
        </div>

        {/* Centro: NAV — desktop */}
        <nav className="justify-self-center hidden md:block">
          <ul className="h-20 flex items-center gap-10">
            {links.map((item) => (
              <li key={item}>
                <a className="font-semibold hover:text-[#FFD60A]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Derecha: CTA (desktop) + Hamburguesa (mobile) */}
        <div className="justify-self-end flex items-center gap-3">
          {/* CTA desktop */}
          <motion.button
            {...buttonInteractive}
            className=" text-center justify-center
            hidden md:inline-flex overflow-hidden
            w-[120px] h-11 rounded-xl
            bg-boton text-black font-semibold
            hover:bg-boton-hover transition
            focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70
          "
          >
            Join Us
          </motion.button>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70"
            aria-label="Open main menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* PANEL mobile (overlay bajo el header) */}
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-panel"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
              md:hidden
              absolute top-full left-0 right-0
              mx-6 mt-3
              rounded-2xl border border-white/10
              bg-black/80 backdrop-blur
              shadow-lg
            "
            >
              <ul className="py-4 flex flex-col">
                {links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm font-medium hover:text-[#FFD60A]"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                {/* CTA mobile al final */}
                <li className="px-4 pt-2">
                  <button
                    className="w-full h-11 rounded-xl bg-boton text-black font-semibold hover:bg-boton-hover transition"
                    onClick={() => setOpen(false)}
                  >
                    Join Us
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO */}
      <section className="relative w-full min-h-[760px] overflow-hidden ">
        {/* Fondo humo del HERO (principal) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="absolute inset-0 -z-10"
          aria-hidden
        >
          <Image
            src="/logo-fondo/fondo-humo.webp"
            alt="Fondo Hero"
            fill
            className="object-cover pointer-events-none select-none"
            priority
          />
        </motion.div>

        <div className=" max-w-[1500px] p-4 mx-auto mb-3 flex flex-col justify-center item-center gap-16 lg:flex-row md:justify-around  md:gap-3">
          {/* TEXTO delante con stagger */}
          <motion.div
            variants={stagger(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative z-10 w-full  mt-10 md:mt-28 px-6 text-white col-span-2 "
          >
            <motion.p
              variants={fadeUp}
              className="w-[220px]  text-[clamp(12px,1.6vw,16px)] font-bold mb-4"
            >
              TRAIN HARD, LIVE STRONG
            </motion.p>

            <motion.h1
              variants={fadeUpTitle}
              className="max-w-[700px] font-title font-bold text-white  text-[clamp(28px,6vw,72px)] tracking-widest leading-[1.1] uppercase text-shadow-hero mb-4"
              style={{ willChange: "transform, opacity, filter" }}
            >
              UNLEASH YOUR POWER
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[800px] text-[clamp(14px,1.7vw,18px)] text-[#CCCCCC] mb-4"
              style={{ willChange: "transform, opacity" }}
            >
              Reach your best self with workouts built to push your limits.
              Strength, discipline, and real results.
            </motion.p>

            <motion.button
              variants={fadeUp}
              {...buttonInteractive}
              className="mt-8 w-full md:w-56 h-16 rounded-xl bg-[#FFD60A] font-semibold text-black text-xl hover:bg-boton-hover transition focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70"
              style={{ willChange: "transform, opacity" }}
            >
              Plans
            </motion.button>
          </motion.div>

          {/* FOTO: anclada abajo-derecha, con entrada + parallax sutil */}
          <motion.div
            variants={photoIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            style={{ y: parallaxY, willChange: "transform, opacity" }}
            aria-hidden
            className=" w-full  aspect-3/2 md:aspect-[4/5] lg:aspect-[16/9] xl:aspect-[16/11] "
          >
            <Image
              src="/logo-fondo/img-musculo.webp"
              alt="Atleta mostrando bíceps"
              width={900}
              height={650}
              sizes="
            (max-width: 768px) 90vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 45vw,
            600px
          "
              className=" object-cover
            object-center sm:object-[30%_center] md:object-[50%_center] xl:object-[70%_center]"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}

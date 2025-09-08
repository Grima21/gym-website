"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
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

export default function Hero() {
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
    <section className="relative w-full mb-28 h-[1100px]" ref={heroRef}>
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
          <p className="text-lg font-title font-bold text-[#FFD60A]">
            BrandGym
          </p>
        </div>

        {/* Centro: nav */}
        <nav className="justify-self-center">
          <ul className="h-20 flex items-center gap-10">
            {["Home", "About Us", "Team", "Classes", "Plans"].map((item) => (
              <li key={item}>
                <a className="font-semibold hover:text-[#FFD60A]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Derecha: botón */}
        <motion.button
          {...buttonInteractive}
          className="
            justify-self-end
            w-[120px] h-11 rounded-xl
            bg-boton text-black font-semibold
            hover:bg-boton-hover transition
            focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70
          "
        >
          Join Us
        </motion.button>
      </motion.header>

      {/* HERO */}
      <section className="relative w-full min-h-[760px] overflow-hidden mt-6">
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

        <div className="relative max-w-[1400px] mx-auto">
          {/* FOTO: anclada abajo-derecha, con entrada + parallax sutil */}
          <motion.div
            variants={photoIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            style={{ y: parallaxY, willChange: "transform, opacity" }}
            className="
    pointer-events-none select-none
    absolute bottom-0 right-0 z-0
    h-full
    origin-bottom-right
  "
            aria-hidden
          >
            <Image
              src="/logo-fondo/img-musculo.webp"
              alt="Atleta mostrando bíceps"
              width={900} // le das más ancho base
              height={1200} // suficiente alto
              className="
      w-auto h-full
      object-cover
      scale-[1.5]
      [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
    "
              priority
            />
          </motion.div>

          {/* TEXTO delante con stagger */}
          <motion.div
            variants={stagger(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative z-10 max-w-[650px] mt-28 md:mt-40 px-6 text-white"
          >
            <motion.p
              variants={fadeUp}
              className="w-[220px] text-xl font-bold mb-4"
            >
              TRAIN HARD, LIVE STRONG
            </motion.p>

            <motion.h1
              variants={fadeUpTitle}
              className="w-[750px] font-title font-bold text-white text-[74px] tracking-widest leading-[1.1] uppercase text-shadow-hero mb-4"
              style={{ willChange: "transform, opacity, filter" }}
            >
              UNLEASH YOUR POWER
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-2xl text-[#CCCCCC] mb-4"
              style={{ willChange: "transform, opacity" }}
            >
              Reach your best self with workouts built to push your limits.
              Strength, discipline, and real results.
            </motion.p>

            <motion.button
              variants={fadeUp}
              {...buttonInteractive}
              className="mt-8 w-56 h-16 rounded-xl bg-[#FFD60A] font-semibold text-black text-xl hover:bg-boton-hover transition focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70"
              style={{ willChange: "transform, opacity" }}
            >
              Plans
            </motion.button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

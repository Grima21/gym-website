"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CardService } from "@/app/data/service";
import { program } from "../data/program";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeUpTitle,
  stagger,
  buttonInteractive,
} from "@/lib/motion";

/* -------------------- Card reusable -------------------- */
function Card({
  title,
  description,
  image,
  alt,
  className = "",
  overlay = true,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp} // entrada de cada card
      whileHover={{ y: -2 }} // micro-interacción sutil
      transition={{ type: "tween", duration: 0.25 }}
      className={`group relative w-full overflow-hidden rounded-2xl ${className}`}
    >
      {/* Wrapper animable para la imagen */}
      <motion.div
        aria-hidden
        initial={false}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={false}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 70vw,
            (max-width: 1280px) 50vw,
            600px
          "
          className="object-cover"
        />
      </motion.div>

      {/* Overlay opcional para mejorar contraste */}
      {overlay && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0.25 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ type: "tween", duration: 0.25 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        />
      )}

      {/* Texto (con pequeño stagger interno) */}
      <motion.div
        variants={stagger(0.08)}
        className="absolute inset-x-4 bottom-4 text-white drop-shadow"
      >
        <motion.p
          variants={fadeUp}
          className="opacity-90 text-[clamp(12px,1.8vw,16px)] font-semibold"
        >
          {description}
        </motion.p>

        <motion.h3
          variants={fadeUpTitle}
          className="font-semibold text-[clamp(16px,2.2vw,25px)] group-hover:text-[#FFD60A]"
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.article>
  );
}

/* -------------------- Section -------------------- */
export default function Service() {
  // Saco cada card por id
  const functional = CardService.find((c) => c.id === 1)!; // wide
  const yoga = CardService.find((c) => c.id === 2)!;
  const crossfit = CardService.find((c) => c.id === 3)!;
  const boxing = CardService.find((c) => c.id === 4)!;

  return (
    <div className="mx-auto w-full max-w-[1280px] xl:max-w-[1500px] px-6">
      {/* ====== GRID de tarjetas (Responsive) ====== */}
      <motion.section
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // dispara al entrar 20% en viewport
        className="mt-16 grid gap-6 md:gap-8 lg:grid-cols-12"
      >
        {/* Functional - ancho (arriba izquierda) */}
        <div className="lg:col-span-8">
          <Card
            {...functional}
            className="aspect-[4/5] md:aspect-[5/3] lg:aspect-[319/150]"
          />
        </div>

        {/* Boxing - alto (arriba derecha) */}
        <div className="lg:col-span-4">
          <Card
            {...boxing}
            className="aspect-[4/5] md:aspect-[121/75] lg:aspect-[77/75]"
          />
        </div>

        {/* Yoga - abajo izquierda */}
        <div className="lg:col-span-4">
          <Card {...yoga} className="aspect-[4/5] md:aspect-[4/3]" />
        </div>

        {/* CrossFit - abajo centro */}
        <div className="lg:col-span-4">
          <Card {...crossfit} className="aspect-[4/5] md:aspect-[4/3]" />
        </div>

        {/* CrossFit duplicado - abajo derecha */}
        <div className="lg:col-span-4">
          <Card {...crossfit} className="aspect-[4/5] md:aspect-[4/3]" />
        </div>
      </motion.section>

      {/* ====== Copy / claim ====== */}
      <motion.section
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 mb-16 text-center"
      >
        <motion.h2
          variants={fadeUpTitle}
          className="text-[clamp(20px,3vw,30px)] leading-tight"
        >
          Fuel your body. Train your <br className="hidden sm:block" />
          mind.{" "}
          <span className="text-[#FFD60A]">
            Unlock your full <br className="hidden sm:block" /> potential.
          </span>
        </motion.h2>
      </motion.section>

      {/* ====== Program list (Responsive table-like) ====== */}
      <section className="mt-10">
        <div className="mx-auto w-full">
          {program.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="
                grid gap-10 items-center py-6
                border-t-4 border-white/20
                grid-cols-1
                md:grid-cols-[88px_1fr_auto]
              "
            >
              {/* Imagen */}
              <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden md:justify-self-start">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 90px, 90px"
                />
              </div>

              {/* Título + descripción */}
              <div className="flex flex-col">
                <h3 className="text-[clamp(25px,2.4vw,32px)] font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-[clamp(20px,1.8vw,24px)] text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Flecha */}
              <motion.button
                {...buttonInteractive}
                aria-label={`Go to ${item.title}`}
                className="justify-self-end shrink-0 p-2 rounded-full hover:bg-white/10 focus-visible:bg-white/10 outline-none"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          ))}

          {/* borde inferior final */}
          <div className="border-t-4 border-white/20" />
        </div>
      </section>
    </div>
  );
}

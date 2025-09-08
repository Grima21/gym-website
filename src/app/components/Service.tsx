"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CardService } from "@/app/data/service";
import { program } from "../data/program";
import { div } from "framer-motion/client";

function Card({
  title,
  description,
  image,
  alt,
  w,
  h,
  className = "",
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      style={{ width: `${w}px`, height: `${h}px` }}
    >
      <Image src={image} alt={alt} fill className="object-cover" />
      {/* overlay + textos (ajústalo a tu estilo) */}
      <div className="absolute inset-x-4 bottom-4 rounded-xl bg-black/35 p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
}

export default function Service() {
  // sacamos cada card por id para ubicarla como en Figma
  const functional = CardService.find((c) => c.id === 1)!; // wide
  const yoga = CardService.find((c) => c.id === 2)!;
  const crossfit = CardService.find((c) => c.id === 3)!;
  const boxing = CardService.find((c) => c.id === 4)!;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <section
        className="
     
        mx-auto
        mt-16
        flex items-start
        gap-[150px]              /* gap central izquierda ↔ derecha */
        "
        style={{ width: `${functional.w + 100 + boxing.w}px` }} // ancho total exacto
      >
        {/* Grupo izquierdo: grid de 2 cols con gap de 46 y 72 */}
        <div
          className="
          grid
          [grid-template-columns:257.1px_247.52px]
          gap-x-[150px] gap-y-[20px]
        "
        >
          {/* TOP: Functional (ocupa 2 columnas) */}
          <div className="col-span-2">
            <Card {...functional} />
          </div>

          {/* BOTTOM: Yoga (col 1) y CrossFit (col 2) */}
          <Card {...yoga} />
          <Card {...crossfit} />
        </div>

        {/* Derecha: Boxing */}
        <Card {...boxing} />
      </section>
      <section className="mt-20 ">
        <h2 className="text-2xl  text-center">
          Fuel your body. Train your <br /> mind.
          <span className="text-[#FFD60A]">
            Unlock your full <br /> potential.
          </span>
        </h2>

        <div className="max-w-full mx-auto px-6 mt-10">
          {program.map((item) => (
            <div
              key={item.id}
              className="
        grid items-center
        grid-cols-[120px_1fr_1.2fr_32px]
        gap-x-20
        py-8
        border-t-2 border-white/30
      "
            >
              {/* Imagen: frame fijo */}
              <div className="relative w-[120px] h-[80px] rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Título: alineado a la izquierda */}
              <h3 className="text-3xl font-bold text-white">{item.title}</h3>

              {/* Descripción: más ancho, sin centrar */}
              <p className="text-lg font-medium text-white/90 leading-relaxed">
                {item.description}
              </p>

              {/* Flecha */}
              <button
                aria-label={`Go to ${item.title}`}
                className="justify-self-end shrink-0 p-2 rounded-full hover:bg-white/10"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          ))}

          {/* borde inferior final */}
          <div className="border-t border-white/30" />
        </div>
      </section>
    </div>
  );
}

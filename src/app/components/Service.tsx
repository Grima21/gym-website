"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CardService } from "@/app/data/service";
import { program } from "../data/program";

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
    <div
      className={`
        group  relative w-full overflow-hidden rounded-2xl 
        ${className}
      `}
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
        className="object-cover group-transition-transform duration-300 hover:scale-105
         hover:translate-y-0"
      />

      {/* Overlay opcional para mejorar contraste */}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      )}

      {/* Texto */}
      <div className="absolute inset-x-4 bottom-4 text-white drop-shadow">
        <p className="opacity-90 text-[clamp(12px,1.8vw,16px)] font-semibold">
          {description}
        </p>
        <h3 className=" font-semibold text-[clamp(16px,2.2vw,25px)] group-hover:text-[#FFD60A]">
          {title}
        </h3>
      </div>
    </div>
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
      <section className="mt-16 grid gap-6 md:gap-8 lg:grid-cols-12">
        {/* Functional - ancho (arriba izquierda) */}
        <div className="lg:col-span-8">
          <Card
            {...functional}
            className="
              aspect-[4/5] md:aspect-[5/3] lg:aspect-[16/10]
            "
          />
        </div>

        {/* Boxing - alto (arriba derecha) */}
        <div className="lg:col-span-4">
          <Card
            {...boxing}
            className="
              aspect-[4/5] md:aspect-[121/75] lg:aspect-[3/4]
            "
          />
        </div>

        {/* Yoga - abajo izquierda */}
        <div className="lg:col-span-4">
          <Card
            {...yoga}
            className="
              aspect-[4/5] md:aspect-[4/3]
            "
          />
        </div>

        {/* CrossFit - abajo centro */}
        <div className="lg:col-span-4">
          <Card
            {...crossfit}
            className="
              aspect-[4/5] md:aspect-[4/3]
            "
          />
        </div>
        <div className="lg:col-span-4">
          <Card
            {...crossfit}
            className="
              aspect-[4/5] md:aspect-[4/3]
            "
          />
        </div>

        {/* Puedes dejar el último espacio (lg:col-span-4) vacío o usarlo para otra tarjeta/CTA */}
      </section>

      {/* ====== Copy / claim ====== */}
      <section className="mt-16 mb-16 text-center">
        <h2 className="text-[clamp(20px,3vw,30px)] leading-tight">
          Fuel your body. Train your <br className="hidden sm:block" />
          mind.{" "}
          <span className="text-[#FFD60A]">
            Unlock your full <br className="hidden sm:block" /> potential.
          </span>
        </h2>
      </section>

      {/* ====== Program list (Responsive table-like) ====== */}
      <section className="mt-10">
        <div className="mx-auto w-full">
          {program.map((item) => (
            <div
              key={item.id}
              className="
              
                grid gap-10 items-center py-6
                border-t-4 border-white/20
                /* Mobile: stack */
                grid-cols-1
                /* md+: tabla alineada */
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

              {/* Título + descripción (stack en mobile, fila en md+) */}
              <div className="flex flex-col ">
                <h3 className="text-[clamp(25px,2.4vw,32px)] font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-[clamp(20px,1.8vw,24px)] text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

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
          <div className="border-t-4 border-white/20" />
        </div>
      </section>
    </div>
  );
}

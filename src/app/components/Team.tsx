"use client";
import Image from "next/image";
import { coach } from "@/app/data/coach"; // ajusta la ruta si tu archivo está en otro lado

export default function Coaches() {
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 mb-28 ">
      <h2 className="text-[#FFD60A] text-3xl font-bold">Meet Our Coaches</h2>
      <p className="text-xl text-white">
        Certified trainers dedicated to your success.
      </p>
      <div
        className=" mx-auto
    grid gap-6 md:grid-cols-2 mt-12"
      >
        {coach.map((c) => (
          <article
            key={c.id}
            className="relative w-full h-[336px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 768px) 419px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            <div className="absolute z-20 bottom-4 left-4">
              <p className="text-[12px] sm:text-sm text-yellow-400 font-medium leading-none">
                {c.category}
              </p>
              <h3 className="text-white font-extrabold text-lg sm:text-xl drop-shadow">
                {c.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

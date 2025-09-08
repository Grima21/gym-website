"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { members } from "@/app/data/members"; // tu array de testimonios

export default function Testimonials() {
  return (
    <section className="py-20 text-center">
      <h4 className="text-yellow-400 uppercase tracking-[3px] mb-2">
        Testimonials
      </h4>
      <h2 className="text-3xl font-bold text-white mb-10">
        What Our Members Say
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop
        className="max-w-6xl"
      >
        {members.map((m, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              {/* Imagen redonda */}
              <Image
                src={m.image}
                alt={m.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                width={80}
                height={80}
              />
              {/* Estrellas */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < m.start ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* Opinión */}
              <p className="italic text-gray-700 mb-4">
                <q>{m.opinion}</q>
              </p>
              {/* Nombre y plan */}
              <h3 className="font-bold text-yellow-500">{m.name}</h3>
              <span className="text-sm text-gray-500">{m.plan}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

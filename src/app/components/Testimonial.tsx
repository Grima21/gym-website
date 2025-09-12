"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { members } from "@/app/data/members"; // tu array de testimonios
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-20 text-center">
      <h4 className="text-yellow-400 uppercase tracking-[3px] text-[clamp(14px,2vw,18px)] mb-2">
        Testimonials
      </h4>
      <h2 className=" text-[clamp(20px,3vw,30px)] font-bold text-white mb-10">
        What Our Members Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop
        grabCursor
        navigation // flechas (las ocultamos en mobile con CSS abajo)
        pagination={{ clickable: true, dynamicBullets: true }} // bullets útiles en mobile
        className="mx-auto mt-10 max-w-6xl px-4 sm:px-6"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
          640: { slidesPerView: 1.2, spaceBetween: 18, centeredSlides: true }, // “peek”
          768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {members.map((m, idx) => (
          <SwiperSlide key={idx} className="!h-auto px-4">
            <div className="h-full bg-white p-6 rounded-2xl shadow-lg flex flex-col">
              {/* Avatar */}
              <Image
                src={m.image}
                alt={m.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                width={80}
                height={80}
              />

              {/* Estrellas */}
              <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < m.start ? "opacity-100" : "opacity-30"}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Opinión */}
              <p className="italic text-gray-700 mb-4 text-center">
                <q>{m.opinion}</q>
              </p>

              {/* Nombre y plan (pegados abajo para igualar alturas) */}
              <div className="mt-auto pt-2 text-center">
                <h3 className="font-bold text-yellow-500">{m.name}</h3>
                <span className="text-sm text-gray-500">{m.plan}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

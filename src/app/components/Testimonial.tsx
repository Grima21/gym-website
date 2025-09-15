"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { members } from "@/app/data/members";
import { fadeUp, fadeUpTitle, stagger } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="py-20 text-center">
      {/* Encabezados con entrada limpia */}
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <motion.h4
          variants={fadeUp}
          className="text-yellow-400 uppercase tracking-[3px] text-[clamp(14px,2vw,18px)] mb-2"
        >
          Testimonials
        </motion.h4>

        <motion.h2
          variants={fadeUpTitle}
          className="text-[clamp(20px,3vw,30px)] font-bold text-white mb-10"
        >
          What Our Members Say
        </motion.h2>

        {/* Carrusel */}
        <motion.div variants={fadeUp}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            loop
            grabCursor
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mx-auto mt-10"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 18,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {members.map((m, idx) => (
              <SwiperSlide key={idx} className="!h-auto px-4">
                {/* Slide animado */}
                <motion.article
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -2 }}
                  transition={{
                    type: "tween",
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="h-full bg-white p-6 rounded-2xl shadow-lg flex flex-col select-none"
                >
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
                    {" "}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < m.start ? "opacity-100" : "opacity-30"}
                      >
                        {" "}
                        ★{" "}
                      </span>
                    ))}{" "}
                  </div>

                  {/* Opinión */}
                  <p className="italic text-gray-700 mb-4 text-center">
                    <q>{m.opinion}</q>
                  </p>

                  {/* Nombre y plan */}
                  <div className="mt-auto pt-2 text-center">
                    <h3 className="font-bold text-yellow-500">{m.name}</h3>
                    <span className="text-sm text-gray-500">{m.plan}</span>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      {/* Estilos rápidos para ocultar flechas en mobile (opcional) */}
      <style jsx global>{`
        @media (max-width: 639px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

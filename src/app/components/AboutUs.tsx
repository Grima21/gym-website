"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeUpTitle,
  stagger,
  buttonInteractive,
} from "@/lib/motion";

import { Clock, User, Medal } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    { value: "8+", label: "Experience", icon: Clock },
    { value: "250+", label: "Clients", icon: User },
    { value: "95%", label: "Efficiency", icon: Medal },
  ];

  const gallery = [
    {
      id: 1,
      images: "/aboutUs-img/service-img.webp",
      alt: "Trainer assisting with bench press exercise",
      width: 320,
      height: 425,
    },
    {
      id: 2,
      images: "/aboutUs-img/matt.webp",
      alt: "Athlete training on cardio machine in black and white",
      width: 400,
      height: 425,
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto mt-40 mb-28">
      <motion.div
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full mx-auto flex flex-col items-center gap-16 lg:flex-row md:justify-center md:px-8"
      >
        {/* left */}
        <motion.div variants={stagger(0.08)} className="max-w-[465px]">
          <motion.h2
            variants={fadeUpTitle}
            className="text-center text-[clamp(25px,3vw,35px)] font-bold text-white tracking-wide mb-10"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-justify text-[clamp(12px,2.5vw,24px)] font-medium mb-10"
          >
            At Brand Gym, we believe fitness is more than training — it’s a
            lifestyle. With certified coaches, modern equipment, and a
            community-driven spirit, we help you unlock your true potential.
          </motion.p>

          {/* <motion.button
            variants={fadeUp}
            {...buttonInteractive}
            className="w-full lg:w-[140px] h-11 rounded-xl bg-boton text-black font-semibold hover:bg-boton-hover transition focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70 mb-10"
          >
            Learn more
          </motion.button> */}

          <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-boton px-8 py-2 text-black font-semibold">
            <span className="relative z-10 ">Hover Me</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-yellow-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>

          <motion.div variants={stagger(0.07)} className="flex gap-10 w-full">
            {stats.map((c, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="select-none"
              >
                <h3 className="flex gap-2 text-3xl text-[#FFD60A] items-center">
                  {c.value} <c.icon />
                </h3>
                <span className="text-lg font-semibold">{c.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* right */}
        <motion.div variants={stagger(0.08)} className="flex gap-2 lg:gap-8">
          {gallery.map((photo) => (
            <motion.div
              key={photo.id}
              variants={fadeUp} // cámbialo a photoIn si quieres el x + blur leve
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden will-change-transform"
            >
              <Image
                src={photo.images}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="rounded-2xl object-cover"
                sizes="(max-width:768px) 80vw, 420px"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

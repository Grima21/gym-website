"use client";
import Image from "next/image";
import { coach } from "@/app/data/coach";
import { motion } from "framer-motion";
import { fadeUp, fadeUpTitle, stagger } from "@/lib/motion";

export default function Coaches() {
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 mb-28 px-4">
      {/* Header con stagger */}
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-1"
      >
        <motion.h2
          variants={fadeUpTitle}
          className="text-[#FFD60A] text-3xl text-[clamp(24px,3vw,30px)] font-bold"
        >
          Meet Our Coaches
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-xl text-[clamp(16px,3vw,20px)] text-white"
        >
          Certified trainers dedicated to your success.
        </motion.p>
      </motion.div>

      {/* Grid animada */}
      <motion.div
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid gap-6 md:grid-cols-2 mt-12"
      >
        {coach.map((c) => (
          <motion.article
            key={c.id}
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="relative w-full h-[336px] rounded-2xl overflow-hidden group select-none"
          >
            <motion.div
              aria-hidden
              initial={false}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 419px, 100vw"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0.25 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
            />

            {/* Textos */}
            <motion.div
              variants={stagger(0.06)}
              className="absolute z-20 bottom-4 left-4"
            >
              <motion.p
                variants={fadeUp}
                className="text-[12px] sm:text-sm text-yellow-400 font-medium leading-none"
              >
                {c.category}
              </motion.p>
              <motion.h3
                variants={fadeUpTitle}
                className="text-white font-extrabold text-lg sm:text-xl drop-shadow"
              >
                {c.name}
              </motion.h3>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

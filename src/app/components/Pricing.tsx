"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeUpTitle,
  stagger,
  buttonInteractive,
} from "@/lib/motion";
import { plans } from "@/app/data/plans";

export default function Pricing() {
  return (
    <section className="max-w-screen-xl mx-auto mt-20 mb-20">
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-4"
      >
        {/* Encabezados */}
        <motion.h3
          variants={fadeUp}
          className="text-center text-[clamp(12px,2vw,20px)] text-[#FFD60A] tracking-[5px]"
        >
          Training Prices
        </motion.h3>

        <motion.h2
          variants={fadeUpTitle}
          className="text-center text-[clamp(20px,3vw,35px)] text-white font-bold"
        >
          Book your training
        </motion.h2>

        {/* Grid de planes */}
        <motion.div
          variants={stagger(0.09)}
          className="
            mt-10 sm:mt-12
            grid gap-4 sm:gap-6 xl:gap-10
            [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] 
            justify-center
          "
          style={{ justifyItems: "center" }}
        >
          {plans.map(
            ({
              id,
              title,
              description,
              icon: Icon,
              monthly,
              monthly3,
              yearly,
              features,
              premium,
            }) => (
              <motion.article
                key={id}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                className="
                  w-full max-w-[350px] p-6 bg-white rounded-2xl shadow-lg 
                  flex items-center flex-col gap-3 max-h-[480px] select-none
                "
              >
                {/* Header icono + badge */}
                <div className="flex items-center justify-between w-full">
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "tween", duration: 0.35 }}
                    className="inline-flex"
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        premium ? "text-yellow-500" : "text-gray-800"
                      }`}
                    />
                  </motion.span>

                  <div className="right-11">
                    {premium && (
                      <motion.span
                        initial={{ y: -6, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="bg-yellow-400 text-xs px-2 py-1 rounded-full"
                      >
                        Premium
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Título y descripción */}
                <motion.h3
                  variants={fadeUpTitle}
                  className="mt-2 font-bold text-[clamp(16px,2.5vw,20px)] text-black text-center"
                >
                  {title}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-[clamp(12px,1vw,16px)] text-yellow-500 text-center"
                >
                  {description}
                </motion.p>

                {/* Precios */}
                <motion.p
                  variants={fadeUp}
                  className="text-[clamp(14px,1vw,18px)] font-semibold text-black"
                >
                  {monthly}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-[clamp(14px,1vw,18px)] font-semibold text-black"
                >
                  {monthly3}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="text-[clamp(14px,1vw,18px)] font-semibold text-black"
                >
                  {yearly}
                </motion.p>

                {/* Features */}
                <motion.ul
                  variants={stagger(0.05)}
                  className="mt-2 space-y-1 text-sm text-gray-600 w-full"
                >
                  {features.map((f, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex">
                      <span className="mr-2">✔</span> {f}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <motion.button
                  variants={fadeUp}
                  {...buttonInteractive}
                  className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
                >
                  Join Us
                </motion.button>
              </motion.article>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

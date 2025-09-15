"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, fadeUpTitle, stagger, buttonInteractive } from "@/lib/motion";
import {
  Facebook,
  Phone,
  Instagram,
  X,
  MapIcon,
  BicepsFlexed,
} from "lucide-react";

export default function Footer() {
  const exploreLinks = [
    { name: "Articles", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  const servicesLinks = [
    { name: "Team", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Coming Soon", href: "#" },
  ];

  const contactInfo = [
    { type: "Address", value: "26 Street, New York, NY 98", icon: MapIcon },
    { type: "Phone", value: "0-900-856-05-39", icon: Phone },
    { type: "Working Hours", value: "Mon-Fri: 8am - 4pm", icon: BicepsFlexed },
  ];

  return (
    <footer className="w-full max-w-screen-2xl mx-auto mt-20 mb-20 px-4">
      {/* Top: newsletter + social */}
      <motion.section
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full"
      >
        <motion.div
          variants={stagger(0.06)}
          className="w-full flex flex-col gap-4 lg:gap-2 lg:flex-row lg:justify-between mb-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#FFD60A] text-[clamp(12px,2vw,18px)] font-semibold"
          >
            Subscribe to get updates <br />
            <span className="text-[clamp(14px,3vw,20px)] text-white">
              fitness tips, and exclusive offers.
            </span>
          </motion.p>

          <motion.div
            variants={stagger(0.05)}
            className="flex flex-col gap-4 md:justify-between"
          >
            <motion.div
              variants={fadeUp}
              className="flex gap-4 items-center"
              role="form"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                inputMode="email"
                placeholder="Your email"
                className="w-64 h-11 bg-[#FFD60A] rounded-xl text-base text-neutral-700 px-4 placeholder-neutral-700/70 outline-none focus:ring-2 focus:ring-yellow-400/60"
                aria-label="Email address"
              />
              <motion.button
                variants={fadeUp}
                {...buttonInteractive}
                className="bg-[#FFD60A] rounded-xl w-36 h-11 text-base text-neutral-700 font-medium hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
              >
                Send
              </motion.button>
            </motion.div>

            <motion.div variants={stagger(0.05)} className="flex gap-5">
              {[Facebook, Instagram, X].map((Icon, i) => (
                <motion.a
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  href="#"
                  aria-label={`Go to ${Icon.name}`}
                  className="inline-flex"
                >
                  <Icon className="text-[#FFD60A] w-8 h-8 hover:text-yellow-500 cursor-pointer" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="w-full h-[6px] bg-yellow-400"
          aria-hidden
        />
      </motion.section>

      {/* Bottom: columns */}
      <motion.section
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row justify-between gap-6 mt-5"
      >
        {/* Logo + description */}
        <motion.div variants={stagger(0.06)}>
          <motion.div variants={fadeUp}>
            <Image
              src="/logo-fondo/logo-gym.webp"
              alt="Brand Gym Logo"
              width={90}
              height={90}
              priority={false}
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(14px,2vw,16px)] text-white w-full max-w-[400px] mt-2"
          >
            Transform your body and mind in our state-of-the-art gym. We offer
            specialized training in boxing, CrossFit, and general fitness for
            all levels.
          </motion.p>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={stagger(0.08)}
          className="flex justify-between items-start lg:gap-16"
        >
          <motion.nav variants={stagger(0.05)} aria-label="Explore">
            <motion.h4
              variants={fadeUpTitle}
              className="text-[clamp(16px,3vw,20px)] text-white font-medium mb-2"
            >
              Explore
            </motion.h4>
            <ul>
              {exploreLinks.map((e, index) => (
                <motion.li key={index} variants={fadeUp}>
                  <a
                    href={e.href}
                    className="text-[clamp(14px,2vw,16px)] hover:text-[#FFD60A] inline-block"
                  >
                    {e.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={stagger(0.05)} aria-label="Services">
            <motion.h4
              variants={fadeUpTitle}
              className="text-[clamp(16px,3vw,20px)] text-white font-medium mb-2"
            >
              Services
            </motion.h4>
            <ul>
              {servicesLinks.map((s, index) => (
                <motion.li key={index} variants={fadeUp}>
                  <a
                    href={s.href}
                    className="text-[clamp(14px,2vw,16px)] hover:text-[#FFD60A] inline-block"
                  >
                    {s.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={stagger(0.06)}
          className="flex flex-col justify-center"
        >
          <ul className="space-y-3">
            {contactInfo.map((c, index) => {
              const Icon = c.icon;
              return (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-0.5">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#FFD60A]" />
                  </div>
                  <div>
                    <p className="text-[clamp(14px,2vw,16px)] text-white/90">
                      {c.type}
                    </p>
                    <p className="text-white">{c.value}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </motion.section>
    </footer>
  );
}

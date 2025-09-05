"Use client";

import { div, section } from "framer-motion/client";
import { Clock, User, Medal } from "lucide-react";
import Image from "next/image";
export default function AboutUs() {
  const stats = [
    { value: "8+", label: "Experience", icon: Clock },
    { value: "250+", label: "clients", icon: User },
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
    <section className="max-w-screen-xl  mx-auto mt-40 mb-28">
      <div className="flex gap-8 ">
        {/* left */}
        <div className="max-w-[465px]">
          <h2 className="text-center text-3xl font-bold text-white tracking-wide mb-10">
            About Us
          </h2>
          <p className="text-justify text-xl font-medium mb-10">
            At Brand Gym, we believe fitness is more than training — it’s a
            lifestyle. With certified coaches, modern equipment, and a
            community-driven spirit, we help you unlock your true potential.
          </p>
          <button
            className="
            justify-self-end
            w-[120px] h-11 rounded-xl
            bg-boton text-black font-semibold
            hover:bg-boton-hover transition
            focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/70  mb-10
          "
          >
            Learn more
          </button>
          <div className="flex gap-10 w-full">
            {stats.map((c, index) => (
              <div key={index}>
                <h3 className="flex gap-2 text-3xl text-[#FFD60A] items-center">
                  {c.value} <c.icon />
                </h3>

                <span className="text-lg font-semibold">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex gap-8">
          {gallery.map((photos) => (
            <div key={photos.id}>
              <Image
                src={photos.images}
                alt={photos.alt}
                width={photos.width}
                height={photos.height}
                className="rounded-2xl object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

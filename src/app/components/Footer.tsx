import { div } from "framer-motion/client";
import {
  Facebook,
  MapPin,
  icons,
  BicepsFlexed,
  Phone,
  Instagram,
  X,
  MapIcon,
} from "lucide-react";
import Image from "next/image";
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
    <footer className="max-w-screen-xl mx-auto mt-20 mb-20">
      <section className="w-full ">
        <div className="w-full flex justify-between mb-8">
          <p className="text-[#FFD60A] text-lg font-semibold">
            Subscribe to get updates <br />
            <span className="text-xl text-white">
              fitness tips, and exclusive offers.
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="email"
              className="w-64 h-11 bg-[#FFD60A] rounded-xl text-base text-neutral-700 p-4 invalid:border-pink-500"
            />
            <button className="bg-[#FFD60A] rounded-xl w-36 h-11 text-base text-neutral-700 font-medium hover:bg-yellow-500 cursor-pointer">
              send
            </button>
          </div>
          <div className="flex gap-5">
            <Facebook className="text-[#FFD60A] w-8 h-8 hover:text-yellow-500 cursor-pointer" />
            <Instagram className="text-[#FFD60A] w-8 h-8  hover:text-yellow-500 cursor-pointer" />
            <X className="text-[#FFD60A] w-8 h-8  hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-[6px] bg-yellow-400"></div>
      </section>
      <section className="flex justify-between gap-4 mt-5 ">
        <div>
          <Image
            src="/logo-fondo/logo-gym.webp"
            alt="Logo gym"
            width={90}
            height={90}
          />
          <p className="text-base text-white w-[400px]">
            Transform your body and mind in our state-of-the-art gym. We offer
            specialized training in boxing, CrossFit, and general fitness for
            all levels.
          </p>
        </div>
        <div className="flex justify-between items-center gap-16">
          <div className="flex flex-col justify-center">
            <h4 className="text-xl text-white font-medium mb-2">Explore</h4>
            <ul>
              {exploreLinks.map((e, index) => (
                <li key={index}>
                  <a href={e.href}>{e.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <ul>
              {servicesLinks.map((s, index) => (
                <li key={index}>
                  <a href={s.href}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <ul>
            {contactInfo.map((c, index) => {
              const Icon = c.icon;
              return (
                <li className="flex gap-3" key={index}>
                  <div>
                    <Icon className="w-10 h-10 text-[#FFD60A]"></Icon>
                  </div>
                  <div>
                    <p>{c.type}</p>
                    <p>{c.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
}

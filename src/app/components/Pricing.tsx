import { div, section } from "framer-motion/client";
import { plans } from "@/app/data/plans";
export default function Pricing() {
  return (
    <section className="max-w-screen-xl mx-auto mt-20 mb-20">
      <h3 className="text-center text-[clamp(12px,2vw,20px)] text-[#FFD60A] tracking-[5px]">
        Training Prices
      </h3>
      <h2 className="text-center text-[clamp(20px,3vw,35px)] text-white font-bold">
        Book your training
      </h2>
      <div
        className="mt-10 sm:mt-12
        grid gap-4 sm:gap-6 xl:gap-10
        [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] px-4
        justify-center"
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
            <div
              key={id}
              className="  w-full max-w-[350px] p-6 bg-white rounded-2xl shadow-lg flex items-center flex-col  gap-3  max-h-[480px]"
            >
              <div className="flex items-center justify-between">
                <Icon
                  className={`w-8 h-8 ${
                    premium ? "text-yellow-500" : "text-gray-800"
                  }`}
                />
                <div className="right-11">
                  {premium && (
                    <span className="bg-yellow-400 text-xs px-2 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </div>
              </div>
              <h3 className="mt-4 font-bold text-[clamp(16px,2.5vw,20px)] text-black">
                {title}
              </h3>
              <p className="text-[clamp(12px,1vw,16px)] text-yellow-500 ">
                {description}
              </p>

              <p className="text-[clamp(14px,1vw,18px)] font-semibold text-black">
                {monthly} <span className="text-sm">/ month</span>
              </p>
              <p className="text-[clamp(14px,1vw,18px)] font-semibold text-black">
                {monthly3} <span className="text-sm">/ month</span>
              </p>
              <p className="text-[clamp(14px,1vw,18px)] font-semibold text-black">
                {yearly} <span className="text-sm">/ year</span>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 ease-in">
                Join Us
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
}

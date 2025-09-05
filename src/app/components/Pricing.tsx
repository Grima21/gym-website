import { div, section } from "framer-motion/client";
import { plans } from "@/app/data/plans";
export default function Pricing() {
  return (
    <section className="max-w-screen-xl mx-auto mt-20 mb-20">
      <h3 className="text-center text-lg text-[#FFD60A] tracking-[5px]">
        Training Prices
      </h3>
      <h2 className="text-center text-3xl text-white font-bold">
        {" "}
        Book your training
      </h2>
      <div className="flex flex-grow gap-5 item-center justify-center mt-16">
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
              className="p-6 bg-white rounded-2xl shadow-lg flex items-center flex-col gap-3 w-96 max-h-[480px]"
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
              <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
              <p className="text-sm text-yellow-500 ">{description}</p>

              <p className="text-lg font-semibold text-black">
                {monthly} <span className="text-sm">/ month</span>
              </p>
              <p className="text-base font-semibold text-black">
                {monthly3} <span className="text-sm">/ month</span>
              </p>
              <p className="text-base font-semibold text-black">
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

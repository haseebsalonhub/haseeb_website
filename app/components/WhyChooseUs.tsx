"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const points = [
  {
    title: "Expert Stylists & Beauticians",
    lottie:
      "https://lottie.host/d3c0a58b-bb5f-4947-8ca3-8f6f58c54947/bof7xfllD8.lottie",
  },
  {
    title: "Premium Quality Products",
    lottie:
      "https://lottie.host/5dfdc7b3-8be8-4009-9487-7c92757f728a/fJcWs2iWP4.lottie",
  },
  {
    title: "Hygienic & Comfortable Ambience",
    lottie:
      "https://lottie.host/19110cd5-1706-4aca-a5df-25237ae95b7c/bgC4UakQVZ.lottie",
  },
  {
    title: "Personalized Beauty Solutions",
    lottie:
      "https://lottie.host/332cf576-5a76-4391-b328-d10019da4e62/OOOUm2L8JJ.lottie",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Why Choose <span className="text-red-600">Haseeb Salon Hub</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We combine expertise, premium products, and a relaxing ambience to
          deliver beauty experiences you’ll love.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              boxShadow: "0 25px 50px rgba(220,38,38,0.25)",
            }}
            className="group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 text-center transition-all duration-300"
          >
            {/* Lottie */}
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-red-50 group-hover:bg-red-100 transition">
              <DotLottieReact
                src={point.lottie}
                loop
                autoplay
                className="w-20 h-20"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 leading-snug">
              {point.title}
            </h3>

            {/* Hover underline */}
            <div className="mt-4 h-[2px] w-0 bg-red-600 mx-auto transition-all duration-300 group-hover:w-12" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;

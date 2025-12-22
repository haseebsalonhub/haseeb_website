import React from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";
const ExpertTeam = () => {
  const team = [
    {
      title: "Professional Hair Stylists",
      desc: "Expert stylists trained in modern, classic, and creative hair techniques.",
      icon: <Scissors className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Certified Beauticians",
      desc: "Skin, beauty, and wellness experts using premium-quality products.",
      icon: <Sparkles className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Makeup Artists",
      desc: "Bridal & party makeup specialists creating flawless, elegant looks.",
      icon: <Users className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Grooming Specialists",
      desc: "Precision grooming services designed for confidence and comfort.",
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Expert Team
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Skilled professionals dedicated to transforming your look with care
          and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-gray-50 p-8 text-center shadow-xl hover:shadow-2xl transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeam;

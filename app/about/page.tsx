"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";

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

const values = [
  {
    title: "Trained & Experienced Professionals",
    desc: "Our team undergoes continuous training to stay updated with trends.",
    icon: <Users className="w-7 h-7 text-red-600" />,
  },
  {
    title: "Hygiene & Comfort First",
    desc: "We maintain the highest hygiene standards for a relaxing experience.",
    icon: <ShieldCheck className="w-7 h-7 text-red-600" />,
  },
  {
    title: "Customer-First Approach",
    desc: "Every service is personalized to match your style and needs.",
    icon: <HeartHandshake className="w-7 h-7 text-red-600" />,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <Header />
      {/* ABOUT HERO */}
      <section className="py-28 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          About <span className="text-red-600">Haseeb Salon Hub</span>
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A premium unisex salon in Krishnagiri delivering expert hair, beauty,
          and grooming services with passion, hygiene, and precision.
        </p>
      </section>

      {/* COMPANY STORY – PREMIUM VERSION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Small accent line */}
            <span className="inline-block mb-4 h-[3px] w-14 bg-red-600 rounded-full" />

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Our <span className="text-red-600">Story</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Haseeb Salon Hub was founded with a simple yet powerful vision —
              to bring a <strong>premium salon experience</strong> to
              Krishnagiri. We blend creativity, comfort, and professionalism to
              ensure every client walks out feeling confident and refreshed.
            </p>

            {/* Vision & Mission cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become Krishnagiri’s most trusted destination for style,
                  beauty, and grooming excellence.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deliver world-class salon services with hygiene, care, and
                  customer satisfaction at the heart of everything we do.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative group"
          >
            {/* Image glow */}
            <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/haseeb4.jpeg"
                alt="Haseeb Salon Hub"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
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

      {/* WHY US */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why We Stand Out</h2>
          <p className="mt-4 max-w-xl mx-auto text-red-100">
            We go beyond styling — we create confidence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white text-gray-900 rounded-3xl p-8 shadow-xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton phoneNumber="919952991143" />
    </main>
  );
}

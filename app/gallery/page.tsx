"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";

const gallerySections = [
  {
    title: "Haircuts & Hairstyling",
    description:
      "Modern, classic, and trendsetting hairstyles crafted by experts.",
    images: [
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
    ],
  },
  {
    title: "Bridal & Party Makeup",
    description: "Flawless makeup looks for weddings and special occasions.",
    images: ["/haseeb8.jpg", "/gallery/braid2.webp", "/services/bridal.jpeg"],
  },
  {
    title: "Salon Interiors & Exteriors",
    description:
      "A hygienic, luxurious, and comfortable ambience for relaxation.",
    images: ["/gallery/gallery4.jpeg", "/haseeb_front.jpeg", "/haseeb2.jpeg"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      {/* GALLERY HERO */}
      <section className="py-28 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Our <span className="text-red-600">Gallery</span>
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our finest haircuts, bridal makeovers, transformations, and
          premium salon interiors.
        </p>
      </section>

      {/* GALLERY SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {gallerySections.map((section, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {section.description}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl group"
                >
                  <Image
                    src={img}
                    alt={section.title}
                    width={500}
                    height={400}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold tracking-wide">
                      View Style
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
      <Footer />
      <WhatsAppButton phoneNumber="919952991143" />
    </main>
  );
}

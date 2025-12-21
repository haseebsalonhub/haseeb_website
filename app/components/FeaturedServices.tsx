"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hair Colouring",
    desc: "Professional haircuts, styling, coloring & treatments.",
    image: "/services/hair_colouring.jpg",
  },
  {
    title: "Hair Stylling",
    desc: "Facials, skincare treatments & beauty services.",
    image: "/services/hair_style.jpg",
  },
  {
    title: "Braids",
    desc: "Complete grooming services for a confident look.",
    image: "/services/braids.webp",
  },
  {
    title: "Bridal hair",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/services/bridal.jpeg",
  },
  {
    title: "Kid's Hair Cut",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/services/kids.jpg",
  },
  {
    title: "Hair Cut ",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/services/hair_cut.jpg",
  },
  {
    title: "Hair Highlighting",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Body Waxing",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Shaving",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Detan",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Make-Up",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Pedicure",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Manicure",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Eyebrow Threading",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Bridal Services",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
  {
    title: "Head Massage",
    desc: "Elegant bridal & party makeup for special moments.",
    image: "/hero1.jpg",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Premium Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Luxury beauty and grooming experiences designed just for you.
        </p>
      </div>

      {/* Horizontal Scrolling Cards */}
      <motion.div
        className="flex gap-8 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedServices;

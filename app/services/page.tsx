"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";

const serviceSections = [
  {
    category: "Hair Services",
    description:
      "Professional hair care services tailored to enhance your style and confidence.",
    services: [
      {
        title: "Hair Cut",
        desc: "Precision haircuts customized to suit your face shape and style.",
        image: "/services/hair_cut.jpg",
      },
      {
        title: "Hair Styling",
        desc: "Trendy and classic hairstyles for every occasion.",
        image: "/services/hair_style.jpg",
      },
      {
        title: "Hair Colouring",
        desc: "Expert coloring services using premium, safe products.",
        image: "/services/hair_colouring.jpg",
      },
      {
        title: "Hair Highlighting",
        desc: "Enhance your look with natural and vibrant highlights.",
        image: "/services/hair_colouring.jpg",
      },
      {
        title: "Braids",
        desc: "Creative and stylish braiding techniques for all ages.",
        image: "/services/braids.webp",
      },
      {
        title: "Kid's Hair Cut",
        desc: "Gentle and stylish haircuts for kids in a friendly environment.",
        image: "/services/kids.jpg",
      },
    ],
  },
  {
    category: "Beauty & Skin Care",
    description:
      "Rejuvenating skin and beauty treatments designed for a glowing look.",
    services: [
      {
        title: "Detan",
        desc: "Remove tan and restore your natural skin tone.",
        image: "/hero1.jpg",
      },
      {
        title: "Facial Treatments",
        desc: "Deep cleansing and glow-enhancing facial services.",
        image: "/hero1.jpg",
      },
      {
        title: "Pedicure",
        desc: "Relaxing foot care for soft, healthy, and beautiful feet.",
        image: "/hero1.jpg",
      },
      {
        title: "Manicure",
        desc: "Professional hand and nail care for a polished look.",
        image: "/hero1.jpg",
      },
      {
        title: "Body Waxing",
        desc: "Smooth and hygienic hair removal with premium wax.",
        image: "/hero1.jpg",
      },
      {
        title: "Eyebrow Threading",
        desc: "Perfectly shaped eyebrows to enhance facial features.",
        image: "/hero1.jpg",
      },
    ],
  },
  {
    category: "Makeup Services",
    description:
      "Elegant and flawless makeup for weddings, parties, and special occasions.",
    services: [
      {
        title: "Bridal Makeup",
        desc: "Stunning bridal makeup for your most memorable day.",
        image: "/services/bridal.jpeg",
      },
      {
        title: "Party Makeup",
        desc: "Glamorous makeup looks for parties and celebrations.",
        image: "/services/bridal.jpeg",
      },
      {
        title: "Engagement Makeup",
        desc: "Soft and elegant makeup for engagement ceremonies.",
        image: "/services/bridal.jpeg",
      },
    ],
  },
  {
    category: "Grooming Services",
    description:
      "Complete grooming solutions for a clean, confident, and polished look.",
    services: [
      {
        title: "Shaving",
        desc: "Clean and comfortable shaving by skilled professionals.",
        image: "/hero1.jpg",
      },
      {
        title: "Head Massage",
        desc: "Relaxing head massage to relieve stress and boost circulation.",
        image: "/hero1.jpg",
      },
      {
        title: "Beard Grooming",
        desc: "Expert beard trimming and shaping for a sharp look.",
        image: "/hero1.jpg",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* HERO */}
      <section className="py-28 text-center relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Our <span className="text-red-600">Services</span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover a complete range of premium hair, beauty, makeup, and
          grooming services crafted to elevate your style.
        </p>
      </section>

      {/* SERVICE SECTIONS */}
      <div className="space-y-28 pb-32">
        {serviceSections.map((section, i) => (
          <section key={i} className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {section.category}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {section.description}
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                >
                  <div className="relative h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{service.desc}</p>

                    <Link
                      href="/contact"
                      className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition"
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
      <WhatsAppButton phoneNumber="919952991143" />
    </main>
  );
}

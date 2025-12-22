"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import WhatsAppButton from "../components/WhatsappIcon";

const page = () => {
  return (
    <div>
      <Header />

      {/* CONTACT HERO */}
      <section className="py-28 text-center relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Contact <span className="text-red-600">Us</span>
        </motion.h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Book your appointment or get in touch with us for premium salon
          services tailored just for you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <ContactPage />

      <Footer />
      <WhatsAppButton phoneNumber="919952991143" />
    </div>
  );
};

export default page;

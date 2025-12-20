"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-title span", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Glow accent */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        {/* Badge */}
        <div className="hero-badge inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white tracking-wide">
          Premium Unisex Salon in Krishnagiri
        </div>

        {/* Title */}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          <span className="block">Premium Care.</span>
          <span className="block text-red-200">Perfect Style.</span>
        </h1>

        {/* Description */}
        <p className="hero-desc text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Experience expert hair styling, beauty treatments, and grooming
          services crafted to enhance your confidence in a luxurious, relaxing
          atmosphere.
        </p>

        {/* CTA */}
        <div className="hero-cta flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-white text-red-600 px-10 py-4 rounded-full font-semibold shadow-xl"
          >
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              Book Appointment
            </span>
          </Link>

          <Link
            href="/services"
            className="px-10 py-4 rounded-full border border-white/70 text-white font-semibold hover:bg-white hover:text-red-600 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

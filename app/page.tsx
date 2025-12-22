"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLenis } from "./lib/lenis";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactPage from "./components/ContactPage";
import WhatsAppButton from "./components/WhatsappIcon";
import ExpertTeam from "./components/ExpertTeam";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    initLenis();

    const ctx = gsap.context(() => {
      /* 🔥 SECTION REVEAL */
      gsap.utils.toArray<HTMLElement>(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 120, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      });

      /* ✨ STAGGER GROUPS */
      gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
          },
        });
      });

      /* 🌊 PARALLAX */
      gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
        gsap.fromTo(
          el,
          { y: -80 },
          {
            y: 80,
            scrollTrigger: {
              trigger: el,
              scrub: true,
            },
          }
        );
      });

      /* 🎨 BACKGROUND COLOR SHIFT */
      gsap.to("body", {
        backgroundColor: "#fff5f5",
        scrollTrigger: {
          trigger: "#why-choose-us",
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <section
        id="why-choose-us"
        className="scroll-section stagger-group parallax"
      >
        <WhyChooseUs />
      </section>

      <section className="scroll-section stagger-group">
        <FeaturedServices />
      </section>
      <section
        id="why-choose-us"
        className="scroll-section stagger-group parallax"
      >
        <ExpertTeam />
      </section>

      <section className="scroll-section stagger-group">
        <Testimonials />
      </section>

      <section className="scroll-section stagger-group">
        <ContactPage />
      </section>

      <WhatsAppButton phoneNumber="919952991143" />
      <Footer />

      {/* Cursor Glow */}
      <div id="cursor-glow" />
    </main>
  );
}

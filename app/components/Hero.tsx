"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  const slides = [
    {
      img: "/haseeb4.jpeg",
      title: "Premium Care.",
      subtitle: "Perfect Style.",
    },
    {
      img: "/haseeb_front.jpeg",
      title: "Bridal & Party Elegance",
      subtitle: "Look flawless on your special day.",
    },
    {
      img: "/haseeb3.jpeg",
      title: "Luxury Hair Styling",
      subtitle: "Trendy styles crafted by expert hands.",
    },
    {
      img: "/haseeb2.jpeg",
      title: "Complete Family Grooming",
      subtitle: "Styles for men, women & kids.",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 🔹 Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1200}
        effect="fade"
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-[1]" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center z-[2] px-6">
                <div className="text-center max-w-3xl text-white">
                  <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm">
                    Premium Unisex Salon in Krishnagiri
                  </span>

                  <h1
                    ref={i === 0 ? headingRef : null}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                  >
                    {slide.title}
                  </h1>

                  <p
                    ref={i === 0 ? taglineRef : null}
                    className="text-xl md:text-2xl mt-4 text-gray-200"
                  >
                    {slide.subtitle}
                  </p>

                  <button
                    ref={i === 0 ? buttonRef : null}
                    className="mt-10 bg-white text-red-600 px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-red-600 hover:text-white transition"
                    onClick={() => router.push("/contact")}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

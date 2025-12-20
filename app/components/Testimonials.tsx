"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  text: string;
  img: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Syed Sameer",
    role: "Regular Client",
    text: "Excellent salon with top-quality service! The staff is skilled, friendly, and very professional. The place is neat, and the results came out exactly as expected. Highly recommended for anyone looking for the best grooming experience!",
    img: "/testimonials/client1.png",
  },
  {
    name: "Towheed Abrar",
    role: "Bride – 2024",
    text: "My stylist, somesh, was a pro at cutting and gave me one of the best cuts I've ever had!",
    img: "/testimonials/client2.png",
  },
  {
    name: "Leo Charles",
    role: "Grooming Client",
    text: "I have so much of head pain. So I visit HASEEB SALON and that person (Somesh) very nice man and I will fully satisfied ( head massage) that person. But one thing he is not a salon employee. He is one of the best therapy. So I thanks once again HESEEB salon hub. I THANK TO SOMESH",
    img: "/testimonials/client3.png",
  },
  {
    name: "Vicky vignesh",
    role: "Beauty Client",
    text: "Excellent service by the salon attendant! Very professional and polite. Really impressed with the work. #santhosh...",
    img: "/testimonials/client4.png",
  },
  {
    name: "Sanandh M",
    role: "Beauty Client",
    text: "I recently got a haircut done, and it exceeded my expectations! thehairstylist SANTHOSH skilled and atentive to my needs.... I really love😍😍😍",
    img: "/testimonials/client5.png",
  },
  {
    name: "Ajith M",
    role: "Beauty Client",
    text: "I showed him a photo and told him to cut his hair like this. He styled his hair like that. I was satisfied.",
    img: "/testimonials/client6.png",
  },
];

const floatingAvatars = [
  { img: "/testimonials/client1.png", top: "18%", left: "8%" },
  { img: "/testimonials/client2.png", top: "25%", right: "10%" },
  { img: "/testimonials/client3.png", bottom: "20%", left: "6%" },
  { img: "/testimonials/client4.png", top: "35%", left: "7%" },
  { img: "/testimonials/client5.png", bottom: "15%", right: "12%" },
  { img: "/testimonials/client6.png", bottom: "55%", right: "8%" },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6 relative overflow-hidden">
      {/* Floating avatars */}
      {floatingAvatars.map((avatar, index) => (
        <motion.img
          key={index}
          src={avatar.img}
          alt="client"
          className="w-14 h-14 rounded-full border-2 border-red-600 shadow-xl absolute"
          style={{
            top: avatar.top,
            bottom: avatar.bottom,
            left: avatar.left,
            right: avatar.right,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title */}
        <p className="text-red-600 uppercase tracking-widest font-semibold text-sm">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Real experiences from clients who trust Haseeb Salon Hub for their
          beauty and grooming needs.
        </p>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl relative border border-gray-100">
                <FaQuoteLeft className="text-4xl text-red-600 mb-6 mx-auto" />

                <p className="text-gray-600 italic leading-relaxed mb-8">
                  {item.text}
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-2 border-red-600 mb-3"
                  />
                  <h4 className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </h4>
                  {item.role && (
                    <p className="text-sm text-gray-500">{item.role}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

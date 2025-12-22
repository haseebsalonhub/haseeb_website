"use client";

import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const serviceTitles = [
    "Hair Colouring",
    "Hair Styling",
    "Braids",
    "Bridal Hair",
    "Kid's Hair Cut",
    "Hair Cut",
    "Hair Highlighting",
    "Body Waxing",
    "Shaving",
    "Detan",
    "Make-Up",
    "Pedicure",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Web3Forms config
    formData.append("access_key", "7c8e9c86-cf3e-450d-aacf-bb0f3de2ed9c");
    formData.append("subject", "New Enquiry – Haseeb Salon Hub");
    formData.append("from_name", "Haseeb Salon Hub Website");

    toast.loading("Sending your enquiry...", { id: "submitToast" });
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Thank you! We’ll contact you soon 💇‍♀️✨", {
          id: "submitToast",
        });

        // Reset form after success
        setTimeout(() => {
          formRef.current?.reset();
        }, 300);
      } else {
        toast.error(result.message || "Something went wrong 😕", {
          id: "submitToast",
        });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", {
        id: "submitToast",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT – Contact Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-10 max-w-md">
            Have a question or want to book an appointment? We’d love to pamper
            you. Reach out to us anytime.
          </p>

          <ul className="space-y-6 text-gray-800">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <span>
                <strong>Haseeb Salon Hub</strong>
                <br />
                Salem Highway, NH Service Road, near Madina Masjid,
                <br />
                Gandhi Nagar, Krishnagiri, Tamil Nadu 635002
              </span>
            </li>

            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-red-600" />
              <a href="tel:+919952991143" className="hover:underline">
                +91 99529 91143
              </a>
            </li>

            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-red-600" />
              <a
                href="mailto:haseebsalonhub@gmail.com"
                className="hover:underline"
              >
                haseebsalonhub@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://www.instagram.com/haseeb_salon_hub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.9172200367952!2d78.20921797506878!3d12.521642787753887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac353355aed6fb%3A0x5c1407a33157575d!2sHaseeb%20Salon%20Hub!5e0!3m2!1sen!2sin!4v1766309856462!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT – Appointment Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h3 className="text-3xl font-bold text-center text-red-600 mb-8">
            Book an Appointment
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-red-600 focus:border-red-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-red-600 focus:border-red-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-red-600 focus:border-red-600"
              />
            </div>

            {/* Services Dropdown */}
            <div>
              <label className="text-sm font-medium text-gray-800">
                Service You Are Looking For
              </label>
              <select
                name="service"
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-red-600 focus:border-red-600"
              >
                <option value="">Select a Service</option>
                {serviceTitles.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us what service you’re looking for..."
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-red-600 focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition shadow-lg ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

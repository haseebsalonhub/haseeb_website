"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass background */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
              Haseeb
              <span className="text-red-600 ml-1">Salon Hub</span>
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium tracking-wide"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full"></span>
              </motion.div>
            ))}
          </nav>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-red-700 transition"
            >
              Book Appointment
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0 }}
          className="md:hidden bg-white shadow-xl border-t"
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              Book Now
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

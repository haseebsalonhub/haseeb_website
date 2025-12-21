"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass background */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center">
            <Image
              src="/logo_haseeb.png"
              alt="Haseeb Salon Hub"
              width={80}
              height={20}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={`font-medium tracking-wide transition ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.div>
              );
            })}
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
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-800 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
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

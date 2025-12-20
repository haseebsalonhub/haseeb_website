"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;

import React from "react";
import ContactPage from "../components/ContactPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappIcon";

const page = () => {
  return (
    <div>
      <Header />
      <ContactPage />
      <Footer />
      <WhatsAppButton phoneNumber="919952991143" />
    </div>
  );
};

export default page;

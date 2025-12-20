import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Haseeb Salon Hub</h2>
          <p className="text-sm text-red-100 leading-relaxed">
            A premium unisex salon in Krishnagiri offering expert hair, beauty,
            and grooming services to help you look confident and feel your best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-red-100">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-red-100">
            <li>Haircuts & Styling</li>
            <li>Beauty & Skincare</li>
            <li>Bridal Makeup</li>
            <li>Grooming Services</li>
            <li>Massage & Relaxation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-red-100">
            <li>
              📍 Salem Highway, Near Madina Masjid,
              <br />
              Krishnagiri, Tamil Nadu
            </li>
            <li>📞 +91 97868 88800</li>
            <li>⏰ 9:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-red-100">
          <p>
            © {new Date().getFullYear()} Haseeb Salon Hub. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <span className="font-semibold text-white">Grow Branz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

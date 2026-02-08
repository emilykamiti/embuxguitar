import { Youtube, Instagram, Twitter } from 'lucide-react';
import logoImage from '../../assets/logo.jpg'; // Import as image file

export function Footer() {
  return (
    <footer className="bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logoImage}
            alt="Company Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Youtube size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Returns & FAQ</a>
          <a href="#" className="hover:text-black transition-colors">Contact Support</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2026 EmBux · Powered by EmBux</p>
        </div>
      </div>
    </footer>
  );
}
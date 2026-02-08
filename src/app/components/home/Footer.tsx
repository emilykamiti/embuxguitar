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
            className="text-black hover:text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-black hover:text-gary-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
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
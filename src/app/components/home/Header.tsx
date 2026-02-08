import { useState, useEffect } from 'react';
import { Youtube, Instagram, Twitter, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.jpg';
import { useCart } from '../../context/CartContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`text-white fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left: Social Icons - Update with actual URLs */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@EmBuxGuitarMusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-gray-300 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_HERE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/YOUR_TWITTER_HERE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="block">
              <img
                src={logoImage}
                alt="Company Logo"
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="hover:text-gray-300 transition-colors text-lg">Shop</Link>

            {/* Fixed: Changed from internal Link to external <a> tag for YouTube */}
            <a
              href="https://www.youtube.com/@EmBuxGuitarMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors text-lg"
            >
              The Studio
            </a>

            <Link to="/cart" aria-label="Cart" className="hover:text-gray-300 transition-colors relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}
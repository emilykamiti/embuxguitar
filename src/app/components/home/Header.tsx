import { useState, useEffect } from 'react';
import { Youtube, Instagram, Twitter, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.jpg';
import { useCart } from '../../context/CartContext'; // Add this import

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart(); // Get cart function
  const cartCount = getTotalItems(); // Get cart count

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
          {/* Left: Social Icons */}
          <div className="flex items-center gap-6">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-300 transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition-colors">
              <Twitter size={24} />
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

            <Link to="/studio" className="hover:text-gray-300 transition-colors text-lg">The Studio</Link>
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
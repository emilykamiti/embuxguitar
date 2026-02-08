import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhiteHeader } from '../components/WhiteHeader';
import { Footer } from '../components/home/Footer';

const allProducts = [
  // Core Four
  { id: 1, name: "PRODUCTION", price: "$29.00", category: "CORE FOUR", image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 2, name: "SHUTTER SPEED", price: "$29.00", category: "CORE FOUR", image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhcGhpYyUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 3, name: "REVERB", price: "$29.00", category: "CORE FOUR", image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJndW5keSUyMHJlZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 4, name: "DECONSTRUCTED", price: "$29.00", category: "CORE FOUR", image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

  // Additional Products
  { id: 5, name: "YELLOW VIBES", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1566678124699-d693d419f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDM2OTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 6, name: "PURPLE HAZE", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1768489038264-bcbe2a175e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDM2OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 7, name: "PINK EDITION", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1716369786573-d9bfd79bce28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdHNoaXJ0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAzNjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 8, name: "NAVY CLASSIC", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1734249024828-f89d910cc69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwYmx1ZSUyMHRzaGlydHxlbnwxfHx8fDE3NzAzNjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 9, name: "WHITE MINIMAL", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1485920784995-d65789b1c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMjc5NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 10, name: "BLACK SERIES", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 11, name: "BLUE EDITION", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhcGhpYyUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 12, name: "RED ZONE", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJndW5keSUyMHJlZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

  // Oldies
  { id: 13, name: "CHEVRON HOODIE", price: "$65.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBmYXNoaW9uJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 14, name: "NEW STUDIO CANDLE", price: "$35.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1643717714079-b5c739c1e420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VudGVkJTIwY2FuZGxlJTIwYmxhY2t8ZW58MXx8fHwxNzcwMjI3Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 15, name: "CLASSIC TEE", price: "$29.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1566678124699-d693d419f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDM2OTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 16, name: "VINTAGE PURPLE", price: "$29.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1768489038264-bcbe2a175e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDM2OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 17, name: "RETRO PINK", price: "$29.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1716369786573-d9bfd79bce28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdHNoaXJ0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAzNjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 18, name: "BLUE CLASSIC", price: "$29.00", category: "OLDIES", image: "https://images.unsplash.com/photo-1734249024828-f89d910cc69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwYmx1ZSUyMHRzaGlydHxlbnwxfHx8fDE3NzAzNjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

  // Clearance
  { id: 19, name: "CLEARANCE BLACK", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 20, name: "CLEARANCE BLUE", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhcGhpYyUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 21, name: "CLEARANCE RED", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJndW5keSUyMHJlZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 22, name: "CLEARANCE YELLOW", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1566678124699-d693d419f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDM2OTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 23, name: "CLEARANCE PURPLE", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1768489038264-bcbe2a175e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDM2OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 24, name: "CLEARANCE PINK", price: "$19.00", category: "CLEARANCE", image: "https://images.unsplash.com/photo-1716369786573-d9bfd79bce28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdHNoaXJ0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAzNjkwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },

  // More products to fill the grid
  { id: 25, name: "STUDIO ESSENTIALS", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1485920784995-d65789b1c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRzaGlydCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMjc5NzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 26, name: "MIDNIGHT BLACK", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 27, name: "OCEAN BLUE", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhcGhpYyUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 28, name: "CRIMSON RED", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJndW5keSUyMHJlZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 29, name: "SUNSET YELLOW", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1566678124699-d693d419f72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDM2OTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 30, name: "VIOLET DREAM", price: "$29.00", category: "ALL", image: "https://images.unsplash.com/photo-1768489038264-bcbe2a175e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDM2OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const categories = ['ALL', 'CORE FOUR', 'CLEARANCE', 'OLDIES'];

export function Shop() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = activeCategory === 'ALL'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  // Calculate the number of items in the last row
  const itemsCount = filteredProducts.length;
  const itemsPerRow = 4;
  const itemsInLastRow = itemsCount % itemsPerRow;

  // Determine if we need to center the last row
  const needsCentering = itemsInLastRow > 0 && itemsInLastRow < itemsPerRow;

  return (
    <div className="min-h-screen bg-gray-200">
      <WhiteHeader />

      <main className="max-w-7xl mx-auto  px-6 py-10">
        {/* Store Heading */}
        <h1 className="text-5xl md:text-4xl mt-20 italic text-center mb-10 uppercase tracking-tight">
          STORE
        </h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg uppercase tracking-wide transition-colors ${
                activeCategory === category
                  ? 'text-black font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>


        <div className={`flex flex-wrap ${needsCentering ? 'justify-center' : 'justify-start'} gap-8`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs"
            >
              <Link
                to={`/product/${product.id}`}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Card Container with centered pop-out effect */}
                <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex-1 transform hover:scale-105 origin-center">
                  {/* Image Container */}
                  <div className="p-4 pb-3">
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 pt-1 text-center">
                    <h3 className="italic uppercase mb-1 text-lg font-medium">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-light">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
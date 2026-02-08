import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "PRODUCTION",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "SHUTTER SPEED",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ3JhcGhpYyUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "REVERB",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJndW5keSUyMHJlZCUyMHRzaGlydHxlbnwxfHx8fDE3NzAyMjcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "DECONSTRUCTED",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGdyYXBoaWMlMjB0c2hpcnQlMjBhcHBhcmVsfGVufDF8fHx8MTc3MDIyNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CoreFour() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl italic text-center mb-16 uppercase tracking-tight">
          THE CORE FOUR
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer flex flex-col relative"
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
          ))}
        </div>
      </div>
    </section>
  );
}
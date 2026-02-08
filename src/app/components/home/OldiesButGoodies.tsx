import { Link } from 'react-router-dom';

const oldieProducts = [
  {
    id: 1,
    name: "CHEVRON HOODIE",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBmYXNoaW9uJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
{
  id: 2,
  name: "WHITE GRAPHIC T-SHIRT",
  price: "$29.00",
  image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
}
];

export function OldiesButGoodies() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-5xl md:text-6xl italic mb-6 uppercase tracking-tight">
              OLDIES,<br />BUT GOODIES
            </h2>
            <p className="text-gray-700 text-lg">
              Don't worry, we're still stocking some classic MKBHD pieces you can grab right in time for fall.
            </p>
          </div>

          {/* Right: Products - matching CoreFour design */}
          <div className="grid grid-cols-2 gap-8">
            {oldieProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer flex flex-col relative"
              >
                {/* Card Container with same hover effect */}
                <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex-1 transform hover:scale-105 origin-center">
                  {/* Image Container with consistent aspect ratio */}
                  <div className="p-4 pb-3">
                    <div className="overflow-hidden h-80 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
      </div>
    </section>
  );
}
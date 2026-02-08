import { Link } from 'react-router-dom';
import { WhiteHeader } from '../components/WhiteHeader';
import { Footer } from '../components/home/Footer';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const recommendedProducts = [
  { id: 13, name: "CHEVRON HOODIE", price: "$65.00", image: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBmYXNoaW9uJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzAyMjcyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 14, name: "STRIPED EDITION", price: "$29.00", image: "https://images.unsplash.com/photo-1767605520993-3351a27aae40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpcGVkJTIwdHNoaXJ0JTIwYnVyZ3VuZHl8ZW58MXx8fHwxNzcwMzgyMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 15, name: "RAINBOW PILLOW", price: "$45.00", image: "https://images.unsplash.com/photo-1713920273122-61f17239194d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwcGlsbG93JTIwY3VzaGlvbnxlbnwxfHx8fDE3NzAzODIyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

export function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />

      <main className="max-w-6xl mx-auto mt-16 px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <h1 className="text-4xl italic mb-6 uppercase">Your Cart is Empty</h1>
            <Link
              to="/shop"
              className="inline-block relative bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wide transition-colors overflow-hidden group"
              style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
            >
              <span className="relative z-10">Continue Shopping</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Header */}
            <h1 className="text-2xl md:text-3xl italic mb-12 uppercase">
              {totalItems} ITEM{totalItems > 1 ? 'S' : ''} IN YOUR CART FOR ${totalPrice.toFixed(2)}
            </h1>

            {/* Cart Items Table */}
            <div className="mb-12">
              {/* Table Header - Adjusted to bring quantity and price closer */}
              <div className="grid grid-cols-12 pb-4 border-b border-gray-300 mb-6">
                <div className="col-span-8 italic font-bold uppercase text-sm">ITEM</div>
                <div className="col-span-1 italic font-bold uppercase text-sm">QUANTITY</div>
                <div className="col-span-3 flex items-center justify-end pr-2 italic uppercase text-sm">
                  <span className="mr-10">PRICE</span>
                  <div className="w-5"></div>
                </div>
              </div>

              {/* Cart Items - Reduced space between rows */}
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 items-center pb-6">
                    {/* Product Info - Takes more space, center-aligned vertically */}
                    <div className="col-span-8 flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover"
                      />
                      <div className="flex flex-col justify-center">
                        <h3 className="italic uppercase font-md mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.size}</p>
                      </div>
                    </div>

                    {/* Quantity - Left aligned with slightly larger dropdown */}
                    <div className="col-span-1 flex">
                      <div className="relative w-18">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="px-3 py-2.5 border-2 border-gray-300 appearance-none pr-9 cursor-pointer hover:border-gray-400 transition-colors bg-white w-full"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                          <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Price & Remove - Takes same space but positioned closer */}
                    <div className="col-span-3 flex items-center justify-end pr-2">
                      <span className="text-lg mr-6">{item.price}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-black transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal Section - Modified to have border only from quantity to price columns */}
              <div className="grid grid-cols-12 pt-6 pb-6">
                {/* Empty space for first 8 columns - No border here */}
                <div className="col-span-8"></div>

                {/* Border starts from the quantity column (col-span-1) */}
                <div className="col-span-1 flex flex-col items-center border-t border-gray-300 pt-6 -mt-6">
                  <p className="text-sm italic font-bold uppercase mb-1">SUBTOTAL</p>
                </div>

                {/* Border continues through the price column (col-span-3) */}
                <div className="col-span-3 flex items-start justify-end pr-2 border-t border-gray-300 pt-6 -mt-6">
                  <p className="text-md font-bold italic">${totalPrice.toFixed(2)}</p>
                </div>
              </div>

              {/* Buttons Section - Back to Shopping on far left, Checkout on far right */}
              <div className="grid grid-cols-12 pt-4">
                {/* Back to Shopping button - Far left, spans 4 columns */}
                <div className="col-span-4 flex">
                  <div
                    className="w-full"
                    style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                  >
                    <Link
                      to="/shop"
                      className="relative bg-white border-2 border-gray-200 text-black hover:border-gray-400 hover:text-gray-900 py-3 px-4 font-bold uppercase tracking-wide transition-colors overflow-hidden group w-full text-center block"
                      style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                    >
                      <span className="relative z-10">BACK TO SHOPPING</span>
                      <div className="absolute inset-0 bg-gray-100/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    </Link>
                  </div>
                </div>

                {/* Empty middle space (4 columns) */}
                <div className="col-span-4"></div>

                {/* Checkout button - Far right, spans 4 columns */}
                <div className="col-span-4 flex">
                  <div
                    className="w-full"
                    style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                  >
                    <Link
                      to="/checkout"
                      className="relative bg-red-600 hover:bg-red-700 text-white py-3 px-4 font-bold uppercase tracking-wide transition-colors overflow-hidden group w-full text-center block"
                      style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
                    >
                      <span className="relative z-10">CHECK OUT</span>
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* You May Also Like - Match Shop page layout */}
      <section className="py-2 bg-white">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl italic mb-12 uppercase">YOU MAY ALSO LIKE</h2>

          {/* Calculate centering logic for last row */}
          {(() => {
            const itemsCount = recommendedProducts.length;
            const itemsPerRow = 4;
            const itemsInLastRow = itemsCount % itemsPerRow;
            const needsCentering = itemsInLastRow > 0 && itemsInLastRow < itemsPerRow;

            return (
              <div className={`flex flex-wrap ${needsCentering ? 'justify-center' : 'justify-start'} gap-8`}>
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="group cursor-pointer flex flex-col h-full"
                    >
                      {/* Card Container - Removed transform effect */}
                      <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex-1">
                        {/* Image Container - Removed hover scale effect */}
                        <div className="relative overflow-hidden h-[400px] w-full">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Info - Outside below the card */}
                      <div className="mt-4 text-center">
                        <h3 className="italic uppercase mb-1 text-lg font-medium transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-700 font-light">{product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      <Footer />
    </div>
  );
}
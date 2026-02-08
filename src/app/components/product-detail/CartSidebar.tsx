import { X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  showCart: boolean;
  onClose: () => void;
  product: any;
  selectedSize: string;
  quantity: number;
  selectedImage: number;
  similarProducts: any[];
  onAddToCart: (product: any) => void;
}

export function CartSidebar({
  showCart,
  onClose,
  product,
  selectedSize,
  quantity,
  selectedImage,
  similarProducts,
  onAddToCart
}: CartSidebarProps) {
  if (!showCart) return null;

  return (
    <>
      {/* White Transparent Overlay */}
      <div
        className="fixed inset-0 bg-white/70 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto animate-slideIn">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6">
            <div className="flex items-center gap-2">
              <Check className="text-black-600" size={28} />
              <h2 className="text-xl italic font-bold uppercase">ADDED TO CART</h2>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Item - UPDATED: Vertically centered content */}
          <div className="flex gap-4 mb-6 pb-6">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-24 h-32 object-cover"
            />
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="italic uppercase mb-1">
                {product.name} - {selectedSize}
              </h3>
              <p className="mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
            </div>
          </div>

          {/* Cart Subtotal */}
          <div className="flex justify-between items-center mb-6 pb-6">
            <span className="font-medium">Cart Subtotal ({quantity} item{quantity > 1 ? 's' : ''}):</span>
            <span className="font-medium">{product.price}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8">
            <Link
              to="/cart"
              onClick={onClose}
              className="relative flex-1 bg-white border-2 border-gray-200 text-white py-3 px-6 font-bold uppercase tracking-wide transition-colors overflow-hidden group flex items-center justify-center"
              style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
            >
              <span className="relative text-black z-10">VIEW CART</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>
            <button
              className="relative flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 font-bold uppercase tracking-wide transition-colors overflow-hidden group"
              style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
            >
              <span className="relative z-10">CHECKOUT</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
          </div>

          {/* You May Also Like */}
          <div>
            <h3 className="text-xl italic font-bold uppercase mb-6">YOU MAY ALSO LIKE</h3>
            <div className="space-y-6">
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="flex gap-4 group">
                  {/* Clickable product image - goes to product detail */}
                  <Link
                    to={`/product/${similarProduct.id}`}
                    onClick={onClose}
                    className="flex-shrink-0"
                  >
                    <img
                      src={similarProduct.images[0]}
                      alt={similarProduct.name}
                      className="w-24 h-32 object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>

                  {/* Content area - vertically centered beside image */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-3">
                      {/* Clickable product title - goes to product detail */}
                      <Link
                        to={`/product/${similarProduct.id}`}
                        onClick={onClose}
                        className="block hover:text-gray-700 transition-colors"
                      >
                        <h4 className="italic uppercase text-sm mb-1">
                          {similarProduct.name}
                        </h4>
                      </Link>
                      <p className="text-sm">{similarProduct.price}</p>
                    </div>

                    {/* Add to Cart button - adds directly to cart */}
                    <button
                      onClick={() => onAddToCart(similarProduct)}
                      className="relative bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-sm font-bold uppercase tracking-wide transition-colors overflow-hidden group/btn w-fit"
                      style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                    >
                      <span className="relative z-10">ADD TO CART</span>
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import { useState } from 'react';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
  selectedSize: string;
  onSizeSelect: (size: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export function ProductInfo({
  product,
  selectedSize,
  onSizeSelect,
  quantity,
  onQuantityChange,
  onAddToCart
}: ProductInfoProps) {
  const [showCareInstructions, setShowCareInstructions] = useState(false);
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  return (
    <div>
      <h1 className="text-5xl md:text-4xl italic mb-6 uppercase">
        {product.name}
      </h1>

      <p className="text-2xl mb-8">{product.price}</p>

      <p className="text-gray-700 mb-10 leading-relaxed text-md">
        {product.description}
      </p>

      {/* Size Selector - Reduced height */}
      <div className="mb-8">
        <label className="block mb-4 text-lg">Select size</label>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              className={`border-2 transition-colors w-14 h-12 flex items-center justify-center text-lg ${
                selectedSize === size
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart - Reduced dropdown width */}
      <div className="flex gap-6 mb-10">
        <div className="relative">
          <select
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value))}
            className="px-3 py-3 border-2 border-gray-300 appearance-none w-20 h-12 cursor-pointer hover:border-gray-400 transition-colors text-lg bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-xl">
            ⌄
          </div>
        </div>

        <button
          onClick={onAddToCart}
          className="relative flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 font-bold uppercase tracking-wide transition-colors overflow-hidden group text-lg"
          style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
        >
          <span className="relative z-10">ADD TO CART</span>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
        </button>
      </div>

      {/* Wash and Care Instructions */}
      <div className="border-t border-gray-200 pt-8">
        <button
          onClick={() => setShowCareInstructions(!showCareInstructions)}
          className="flex items-center justify-between w-full text-left text-lg hover:text-gray-700 transition-colors"
        >
          <span className="font-medium">Wash and Care Instructions</span>
          <span className="text-3xl">{showCareInstructions ? '−' : '+'}</span>
        </button>

        {showCareInstructions && (
          <div className="mt-6 text-gray-700 text-base space-y-3 animate-fadeIn">
            <p>• Machine wash cold with like colors</p>
            <p>• Tumble dry low</p>
            <p>• Do not bleach</p>
            <p>• Iron on low heat if needed</p>
            <p>• Do not dry clean</p>
          </div>
        )}
      </div>
    </div>
  );
}
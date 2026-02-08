import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard } from 'lucide-react';

export function Checkout() {
  const { items, getTotalItems, getTotalPrice } = useCart();

  const [formData, setFormData] = useState({
    email: '',
    contactNewsletter: false,
    country: 'United States',
    fullName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    paymentMethod: 'card',
    useSameAddress: true,
    promoCode: '',
  });

  const subtotal = getTotalPrice();
  const discount = 5.40;
  const total = subtotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order completed! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple header with logo */}
      <header className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="block w-fit">
            <span className="text-2xl font-bold">EMBUX</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Forms */}
          <div>
            <form onSubmit={handleSubmit}>
              {/* Express Checkout */}
              <div className="mb-8">
                <h2 className="text-center text-gray-600 mb-4">Express Checkout</h2>
                <button
                  type="button"
                  className="w-full bg-black text-white py-4 rounded hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=17949&format=png"
                    alt="Google"
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span>Pay</span>
                </button>
                <div className="text-center text-gray-500 my-6">or</div>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-xl italic mb-4 uppercase">Contact</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  required
                />
                <label className="flex items-center gap-2 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="contactNewsletter"
                    checked={formData.contactNewsletter}
                    onChange={handleInputChange}
                    className="w-5 h-5 accent-red-600"
                  />
                  <span className="text-sm">Contact me about new announcements</span>
                </label>
              </div>

              {/* Shipping */}
              <div className="mb-8">
                <h2 className="text-xl italic mb-4 uppercase">Shipping</h2>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 appearance-none bg-white"
                    required
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Kenya</option>
                    <option>Australia</option>
                    <option>Germany</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 mb-4"
                  required
                />

                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 mb-4"
                  required
                />

                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 mb-4"
                />

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State/province"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>

                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 mb-2"
                  required
                />
                <p className="text-sm text-gray-500">Shipping carrier requires a contact number</p>
              </div>

              {/* Delivery */}
              <div className="mb-8">
                <h2 className="text-xl italic mb-4 uppercase">Delivery</h2>
                <div className="bg-gray-100 px-4 py-6 rounded text-gray-600 text-sm">
                  Enter your shipping address to show delivery options
                </div>
              </div>

              {/* Payment */}
              <div className="mb-8">
                <h2 className="text-xl italic mb-4 uppercase">Payment</h2>

                {/* Card Payment */}
                <div className="border-2 border-red-600 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard size={20} />
                    <span className="font-medium">Card</span>
                  </div>

                  <div className="mb-4 relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card number"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      placeholder="Expiration date"
                      className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                      required
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        placeholder="Security code"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        required
                      />
                      <CreditCard size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-start gap-2 mb-4 pl-6"
                >
                  <img
                    src="https://www.paypal.com/favicon.ico"
                    alt="PayPal"
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="font-medium">PayPal</span>
                </button>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="useSameAddress"
                    checked={formData.useSameAddress}
                    onChange={handleInputChange}
                    className="w-5 h-5 accent-red-600"
                  />
                  <span className="text-sm">Use my shipping address for billing</span>
                </label>
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-bold uppercase tracking-wide transition-colors"
              >
                Complete order
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                This order is handled by our Merchant of Record and merchandising partner, Fourthwall.com, who handles order fulfillment.
              </p>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div className="bg-gray-50 rounded-lg p-6">
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.size}</p>
                    </div>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="border-t border-gray-300 pt-4 mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes/VAT</span>
                  <span>-</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>
                    <span>Discount (Pillowpromo)</span>
                    <div className="text-xs text-gray-500">30% off for eligible products</div>
                  </div>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Total</span>
                  <div className="text-right">
                    <span className="text-xs text-gray-600 mr-2">USD</span>
                    <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <details className="cursor-pointer">
                <summary className="text-sm text-gray-600 list-none flex items-center justify-between">
                  <span>Promo code or gift card</span>
                  <span>▼</span>
                </summary>
                <div className="mt-4">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Enter code"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />
                  <button
                    type="button"
                    className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
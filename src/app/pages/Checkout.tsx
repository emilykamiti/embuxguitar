import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoImage from '../assets/logo.jpg';
import { CreditCard, ChevronDown, Tag, X } from 'lucide-react';

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

  const [showPromoInput, setShowPromoInput] = useState(false);
  const [appliedPromos, setAppliedPromos] = useState<string[]>(['Pillowpromo']);

  const subtotal = getTotalPrice();
  const discount = appliedPromos.includes('Pillowpromo') ? 5.40 : 0;
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

  const handleApplyPromo = () => {
    if (formData.promoCode.trim() && !appliedPromos.includes(formData.promoCode)) {
      setAppliedPromos([...appliedPromos, formData.promoCode]);
      setFormData({ ...formData, promoCode: '' });
    }
  };

  const handleRemovePromo = (promoToRemove: string) => {
    setAppliedPromos(appliedPromos.filter(promo => promo !== promoToRemove));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Logo Centered in Left Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Remove pt-8 from this container */}
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Logo Centered in the left part */}
          <div className="flex justify-center lg:justify-center items-start pt-8">
            {/* Added items-start and pt-8 to align with form content */}
            <Link to="/" className="block">
              <img
                src={logoImage}
                alt="Company Logo"
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>
          {/* Right Column - Empty for grid alignment */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Main Checkout Content - Reduced top padding since logo is now at same level */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Changed from py-8 to py-6 */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Express Checkout Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="mx-4 text-gray-600 text-sm font-medium whitespace-nowrap">
                    Express Checkout
                  </span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white py-3.5 hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 font-medium"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=17949&format=png"
                    alt="Google"
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span>Pay with Google</span>
                </button>

                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="mx-4 text-gray-500 text-sm">or</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium italic uppercase tracking-wide">Contact</h2>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none hover:border-black focus:border-black transition-colors"
                    required
                  />
                  <label className="flex items-center  gap-3 mt-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="contactNewsletter"
                      checked={formData.contactNewsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-red-600"
                    />
                    <span className="text-sm text-gray-700">Contact me about new announcements</span>
                  </label>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium italic uppercase tracking-wide">Shipping</h2>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Country</label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors appearance-none bg-white pr-10"
                      required
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Kenya</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Japan</option>
                      <option>China</option>
                      <option>India</option>
                      <option>Brazil</option>
                      <option>Mexico</option>
                      <option>Spain</option>
                      <option>Italy</option>
                      <option>South Korea</option>
                    </select>
                    <ChevronDown
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  required
                />

                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  required
                />

                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State/province"
                    className="px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    Shipping carrier requires a contact number
                  </p>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium italic uppercase tracking-wide">Delivery</h2>
                <div className="bg-gray-50 px-5 py-4 border border-gray-200 text-gray-600 text-sm">
                  Enter your shipping address to show delivery options
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-medium italic uppercase tracking-wide">Payment</h2>

                {/* Credit Card Payment */}
                <div className="border-2 border-red-600 p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <CreditCard size={20} className="text-gray-700" />
                    <span className="font-medium text-gray-900">Card</span>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Card number"
                      className="w-full px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors pr-24"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                        alt="Visa"
                        className="h-4"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="Mastercard"
                        className="h-4"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      placeholder="Expiration date (MM/YY)"
                      className="px-4 py-3 hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        placeholder="Security code"
                        className="w-full px-4 py-3  hover:border-black border border-gray-300 focus:outline-none focus:border-black transition-colors pr-10"
                        required
                      />
                      <CreditCard
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* PayPal Option */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                  className="w-full px-5 py-3.5 hover:border-black border-2 border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-start gap-3"
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

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="useSameAddress"
                    checked={formData.useSameAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-red-600"
                  />
                  <span className="text-sm text-gray-700">
                    Use my shipping address for billing
                  </span>
                </label>
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-bold uppercase tracking-wider transition-colors"
              >
                Complete order
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed max-w-md mx-auto">
                This order is handled by our Merchant of Record and merchandising partner,
                Fourthwall.com, who handles order fulfillment.
              </p>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="border border-gray-200 bg-gray-50 p-6">
              {/* Cart Items List */}
              <div className="space-y-5 mb-6 pb-6 border-b border-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-28 object-cover"
                      />
                      <span className="absolute -top-1.5 -right-1.5 bg-gray-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5">{item.size}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900 whitespace-nowrap self-center">
                      ${parseFloat(item.price.replace('$', '')).toFixed(0)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal ({getTotalItems()} item{getTotalItems() > 1 ? 's' : ''})
                  </span>
                  <span className="font-medium">${subtotal.toFixed(0)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-red-600 font-medium">-${discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes/VAT</span>
                  <span className="text-gray-500">-</span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-3 ">
                  <span className="text-base font-semibold text-gray-900">Total</span>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-0.5">USD</div>
                    <div className="text-xl font-bold text-gray-900">${total.toFixed(0)}</div>
                  </div>
                </div>
              </div>

              {/* Promo Code Section */}
              <div className="border-t border-gray-200 pt-6">
                <button
                  type="button"
                  onClick={() => setShowPromoInput(!showPromoInput)}
                  className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-gray-900 mb-3"
                >
                  <span>Promo code or gift card</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${showPromoInput ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {showPromoInput && (
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      name="promoCode"
                      value={formData.promoCode}
                      onChange={handleInputChange}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {/* Applied Promo Codes */}
                {appliedPromos.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {appliedPromos.map((promo) => (
                        <div
                          key={promo}
                          className="inline-flex items-center gap-1.5 bg-gray-100 border-1 border-gray-300 px-3 py-2 text-sm"
                        >
                          <Tag size={12} className="text-gray-500" />
                          <span className="font-medium">{promo}</span>
                          <button
                            type="button"
                            onClick={() => handleRemovePromo(promo)}
                            className="text-gray-400 hover:text-gray-600 ml-1 transition-colors bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                            aria-label={`Remove ${promo}`}
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
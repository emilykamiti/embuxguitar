import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Shop } from './pages/Shop';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import { Cart } from './pages/Cart'; // If you have a Cart page
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <CartProvider> {/* Wrap everything with CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
           <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} /> {/* Add cart route if you have it */}
        </Routes>
      </Router>
    </CartProvider>
  );
}
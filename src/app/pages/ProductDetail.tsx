import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { WhiteHeader } from '../components/WhiteHeader';
import { Footer } from '../components/home/Footer';
import { ImageGallery } from '../components/product-detail/ImageGallery';
import { ProductInfo } from '../components/product-detail/ProductInfo';
import { VideoSection } from '../components/product-detail/VideoSection';
import { DetailSection } from '../components/product-detail/DetailSection';
import { CartSidebar } from '../components/product-detail/CartSidebar';
import { products } from '../data/products';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '1'));
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  // Get similar products (all products except current one)
  const similarProducts: Product[] = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    // Add to cart using context
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.images[selectedImage],
    });

    // Show cart sidebar
    setShowCart(true);
  };

  const handleAddSimilarToCart = (similarProduct: Product) => {
    // Add similar product to cart
    addToCart({
      productId: similarProduct.id,
      name: similarProduct.name,
      price: similarProduct.price,
      size: 'M', // Default size for similar products
      quantity: 1, // Default quantity
      image: similarProduct.images[0],
    });

    // Show cart sidebar
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      {/* Main content with conditional blur */}
      <div className={`min-h-screen bg-white transition-all duration-300 ${showCart ? 'fixed inset-0 overflow-hidden' : ''}`}>
        <div className={`${showCart ? 'white/10' : ''}`}>
          <WhiteHeader />

          <main className="max-w-[1800px] mx-auto px-6 py-30">
            {/* Main product grid */}
            <div className="grid lg:grid-cols-3 gap-14 mb-20">
              {/* Left: Image Gallery - Takes 2 columns out of 3 */}
              <div className="lg:col-span-2">
                <ImageGallery
                  images={product.images}
                  selectedImage={selectedImage}
                  onImageSelect={setSelectedImage}
                />
              </div>

              {/* Right: Product Info - Takes 1 column out of 3 */}
              <div className="lg:col-span-1">
                <ProductInfo
                  product={product}
                  selectedSize={selectedSize}
                  onSizeSelect={setSelectedSize}
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>

            {/* Video Section */}
            <VideoSection />

            {/* Detail Section */}
            <DetailSection />
          </main>

          <Footer />
        </div>
      </div>

      {/* Cart Sidebar with adjusted white blur backdrop */}
      <CartSidebar
        showCart={showCart}
        onClose={handleCloseCart}
        product={product}
        selectedSize={selectedSize}
        quantity={quantity}
        selectedImage={selectedImage}
        similarProducts={similarProducts}
        onAddToCart={handleAddSimilarToCart}
      />
    </>
  );
}
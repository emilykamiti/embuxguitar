import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: string;
  size: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  showNotification: boolean;
  setShowNotification: (show: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const existingItemIndex = items.findIndex(
      (i) => i.productId === item.productId && i.size === item.size
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      const newItems = [...items];
      newItems[existingItemIndex].quantity += item.quantity;
      setItems(newItems);
    } else {
      // Add new item
      const newItem = {
        ...item,
        id: Date.now(),
      };
      setItems([...items, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        showNotification,
        setShowNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

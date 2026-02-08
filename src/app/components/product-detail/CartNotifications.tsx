import { useEffect } from 'react';
import { Check } from 'lucide-react';

interface CartNotificationProps {
  show: boolean;
  onClose: () => void;
}

export function CartNotification({ show, onClose }: CartNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-slide-down flex items-center gap-3">
      <Check size={24} />
      <div>
        <p className="font-bold">Added to cart</p>
        <p className="text-sm text-green-100">Item successfully added to your cart</p>
      </div>
    </div>
  );
}

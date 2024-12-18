import { X } from 'lucide-react';
import type { CartItem } from '../../types';
import { CartTable } from './CartTable';
import { CartSummary } from './CartSummary';
import { CartActions } from './CartActions';
import { EmptyCart } from './EmptyCart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export function CartModal({ isOpen, onClose, items, onRemoveItem }: CartModalProps) {
  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartTable items={items} onRemoveItem={onRemoveItem} />
            <CartSummary totalItems={totalItems} totalAmount={totalAmount} />
            <CartActions onClose={onClose} />
          </>
        )}
      </div>
    </div>
  );
}
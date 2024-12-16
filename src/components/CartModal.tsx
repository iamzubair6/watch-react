import { ShoppingCart, X } from 'lucide-react';
import type { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export function CartModal({ isOpen, onClose, items, onRemoveItem }: CartModalProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.color} - Size {item.size}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-xl">${total.toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50"
                >
                  Continue Shopping
                </button>
                <button className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
import { ShoppingCart } from 'lucide-react';

export function EmptyCart() {
  return (
    <div className="text-center py-8">
      <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
      <p className="text-gray-500">Your cart is empty</p>
    </div>
  );
}
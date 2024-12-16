import { ShoppingCart } from 'lucide-react';

interface FloatingCartProps {
  itemCount: number;
  onClick: () => void;
}

export function FloatingCart({ itemCount, onClick }: FloatingCartProps) {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
        {itemCount}
      </span>
    </button>
  );
}
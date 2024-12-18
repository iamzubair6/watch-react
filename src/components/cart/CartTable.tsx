import { Trash2 } from 'lucide-react';
import type { CartItem } from '../../types';

interface CartTableProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export function CartTable({ items, onRemoveItem }: CartTableProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-4 mb-2 text-sm text-gray-600 border-b pb-2">
        <div className="col-span-2">Item</div>
        <div>Color</div>
        <div>Size</div>
        <div>Qnt</div>
        <div className="text-right">Price</div>
      </div>
      
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-6 gap-4 py-4 items-center">
          <div className="col-span-2 flex items-center gap-3">
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
            <span className="font-medium">{item.name}</span>
          </div>
          <div className="capitalize">{item.color}</div>
          <div>{item.size}</div>
          <div>{item.quantity}</div>
          <div className="flex items-center justify-between">
            <span>${item.price.toFixed(2)}</span>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-500 hover:text-red-600 p-1"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
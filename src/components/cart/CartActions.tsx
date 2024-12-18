interface CartActionsProps {
  onClose: () => void;
}

export function CartActions({ onClose }: CartActionsProps) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onClose}
        className="flex-1 px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
      >
        Continue Shopping
      </button>
      <button className="flex-1 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Checkout
      </button>
    </div>
  );
}
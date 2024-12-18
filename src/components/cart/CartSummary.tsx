interface CartSummaryProps {
  totalItems: number;
  totalAmount: number;
}

export function CartSummary({ totalItems, totalAmount }: CartSummaryProps) {
  return (
    <div className="flex justify-between items-center text-lg font-medium mt-4 pt-4 border-t">
      <div>Total</div>
      <div className="flex gap-8">
        <span>{totalItems}</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
}
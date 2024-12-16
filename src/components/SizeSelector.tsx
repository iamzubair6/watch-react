import type { WristSize } from "../types";

interface SizeSelectorProps {
  selectedSize: WristSize;
  onSizeSelect: (size: WristSize) => void;
}

const sizes: { size: WristSize; price: number }[] = [
  { size: "S", price: 69 },
  { size: "M", price: 79 },
  { size: "L", price: 89 },
  { size: "XL", price: 99 },
];

export function SizeSelector({
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) {
  return (
    <div className="flex gap-2">
      {sizes.map(({ size, price }) => (
        <button
          key={size}
          onClick={() => onSizeSelect(size)}
          className={`px-4 py-2 rounded-md  border border-[#DBDFEA] text-sm font-bold ${
            selectedSize === size ? " text-primary " : ""
          }`}
        >
          {size}
          <span className="ml-1 text-sm font-medium text-[#8091A7]">
            ${price}
          </span>
        </button>
      ))}
    </div>
  );
}

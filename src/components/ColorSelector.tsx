import type { BandColor } from "../types";

interface ColorSelectorProps {
  selectedColor: BandColor;
  onColorSelect: (color: BandColor) => void;
}

const colors: { value: BandColor; bg: string }[] = [
  { value: "purple", bg: "bg-brand-purple" },
  { value: "turquoise", bg: "bg-brand-turquoise" },
  { value: "blue", bg: "bg-brand-blue" },
  { value: "black", bg: "bg-brand-black" },
];

export function ColorSelector({
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div className="flex gap-2">
      {colors.map(({ value, bg }) => (
        <button
          key={value}
          onClick={() => onColorSelect(value)}
          className={`w-8 h-8 rounded-full ${bg} ${
            selectedColor === value ? "ring-2 ring-offset-2 ring-primary" : ""
          }`}
          aria-label={`Select ${value} color`}
        />
      ))}
    </div>
  );
}

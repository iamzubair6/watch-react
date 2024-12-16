import type { BandColor } from '../types';

interface ColorSelectorProps {
  selectedColor: BandColor;
  onColorSelect: (color: BandColor) => void;
}

const colors: { value: BandColor; bg: string }[] = [
  { value: 'purple', bg: 'bg-purple-500' },
  { value: 'turquoise', bg: 'bg-teal-400' },
  { value: 'blue', bg: 'bg-blue-500' },
  { value: 'black', bg: 'bg-gray-900' }
];

export function ColorSelector({ selectedColor, onColorSelect }: ColorSelectorProps) {
  return (
    <div className="flex gap-2">
      {colors.map(({ value, bg }) => (
        <button
          key={value}
          onClick={() => onColorSelect(value)}
          className={`w-8 h-8 rounded-full ${bg} ${
            selectedColor === value ? 'ring-2 ring-offset-2 ring-blue-500' : ''
          }`}
          aria-label={`Select ${value} color`}
        />
      ))}
    </div>
  );
}
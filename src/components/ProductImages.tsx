import type { BandColor } from "../types";

const images = {
  purple: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
  turquoise:
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
  blue: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  black: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
};

interface ProductImagesProps {
  selectedColor: BandColor;
}

export function ProductImages({ selectedColor }: ProductImagesProps) {
  return (
    <div className="w-full max-w-xl">
      <img
        src={images[selectedColor]}
        alt={`Smart watch in ${selectedColor}`}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
}

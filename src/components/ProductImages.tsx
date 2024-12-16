import type { BandColor } from "../types";

const images = {
  purple: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
  turquoise:
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
  blue: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  black: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
};

export const ProductImages = ({
  selectedColor,
}: {
  selectedColor: BandColor;
}) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <img
        src={images[selectedColor]}
        alt={`Watch with ${selectedColor} band`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

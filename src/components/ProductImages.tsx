import blackImage from "../assets/black.png";
import blueImage from "../assets/blue.png";
import turquoiseImage from "../assets/cyan.png";
import purpleImage from "../assets/lg-a 3.png";
import type { BandColor } from "../types";

const images = {
  purple: purpleImage,
  turquoise: turquoiseImage,
  blue: blueImage,
  black: blackImage,
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

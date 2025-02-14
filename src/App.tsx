import { Heart, Star, StarHalfIcon } from "lucide-react";
import { useState } from "react";
import blackImage from "./assets/black.png";
import blueImage from "./assets/blue.png";
import turquoiseImage from "./assets/cyan.png";
import purpleImage from "./assets/lg-a 3.png";
import { CartModal } from "./components/cart/CartModal";
import { ColorSelector } from "./components/ColorSelector";
import { FloatingCart } from "./components/FloatingCart";
import { ProductImages } from "./components/ProductImages";
import { SizeSelector } from "./components/SizeSelector";
import type { BandColor, CartItem, WristSize } from "./types";

const images = {
  purple: purpleImage,
  turquoise: turquoiseImage,
  blue: blueImage,
  black: blackImage,
};

function App() {
  const [selectedColor, setSelectedColor] = useState<BandColor>("purple");
  const [selectedSize, setSelectedSize] = useState<WristSize>({
    size: "M",
    price: 79,
  });
  console.log("🚀 ~ App ~ selectedSize:", selectedSize);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    const newItem: CartItem = {
      id: `${Date.now()}`,
      name: "Classy Modern Smart watch",
      color: selectedColor,
      size: selectedSize?.size,
      quantity,
      price: selectedSize?.price,
      image: images[selectedColor],
    };

    setCartItems((prev) => [...prev, newItem]);
    setQuantity(1);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[360px] md:h-[500px] lg:h-[720px]">
            <ProductImages selectedColor={selectedColor} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Classy Modern Smart watch
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <StarHalfIcon className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 " />
                </div>
                <span className="text-gray-500">(2 Reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xl text-[#8091A7] line-through">
                $99.00
              </span>
              <span className="text-2xl font-bold text-primary">
                ${selectedSize?.price}
              </span>
            </div>

            <p className="text-gray-600">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Band Color</h3>
                <ColorSelector
                  selectedColor={selectedColor}
                  onColorSelect={setSelectedColor}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Wrist Size</h3>
                <SizeSelector
                  selectedSize={selectedSize}
                  onSizeSelect={setSelectedSize}
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={addToCart}
                  className="flex-1 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>

                <button className="p-3 ">
                  <Heart className="w-6 h-6 text-blue-500 hover:text-red-600 hover:fill-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCart
        itemCount={cartItems.length}
        onClick={() => setIsCartOpen(true)}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;

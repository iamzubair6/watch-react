import { useState } from "react";
import { Heart, Star, StarHalf } from "lucide-react";
import { ProductImages } from "./components/ProductImages";
import { ColorSelector } from "./components/ColorSelector";
import { SizeSelector } from "./components/SizeSelector";
import { CartModal } from "./components/CartModal";
import { FloatingCart } from "./components/FloatingCart";
import type { BandColor, WristSize, CartItem } from "./types";

const images = {
  purple: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
  turquoise:
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
  blue: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  black: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
};

function App() {
  const [selectedColor, setSelectedColor] = useState<BandColor>("purple");
  const [selectedSize, setSelectedSize] = useState<WristSize>("M");
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    const newItem: CartItem = {
      id: `${Date.now()}`,
      name: "Classy Modern Smart watch",
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: 79,
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
                  <Star className="w-5 h-5 fill-current" />
                  <StarHalf className="w-5 h-5" />
                </div>
                <span className="text-gray-500">(2 Reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-gray-900">$79.00</span>
              <span className="text-lg text-gray-500 line-through">$99.00</span>
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

                <button className="p-3 border rounded-lg hover:bg-gray-50">
                  <Heart className="w-6 h-6" />
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

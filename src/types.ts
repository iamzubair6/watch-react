export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  reviews: number;
  rating: number;
}

export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export type BandColor = "purple" | "turquoise" | "blue" | "black";
export type WristSize = { size: "S" | "M" | "L" | "XL"; price: number };

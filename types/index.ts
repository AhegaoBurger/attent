export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "rings" | "necklaces" | "bracelets" | "earrings";
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  title: string;
  path: string;
}

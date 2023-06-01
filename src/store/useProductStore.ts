import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}
export interface Product {
  _id?: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  priceSymbol: string;
  currency: string;
  quantity: number;
  // sold: number;
  status: string;
  photos: Image[];
  coverPhoto: Image;
  subcategory: string;
  category: string;
  rating: number;
  features: string[];
  specifications: {
    name: string;
    value: string;
    id: string;
  }[];
  availability?: {
    inStock: boolean;
    quantity: number;
    deliveryDate: Date;
  };
  bestSeller: boolean;
  featured: boolean;
  newArrival: boolean;
  specialOffer: boolean;
}

type productState = {
  products: Product[];
  addToProducts: (product: Product) => void;
  removeProduct: (productId: string) => void;
  editProduct: (productId: string, updatedProduct: Product) => void;
};

export const useProductState = create<productState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        addToProducts: (product: Product) =>
          set((state) => ({ products: [...state.products, product] })),
        removeProduct: (productId: string) =>
          set((state) => ({
            products: state.products.filter(
              (product) => product._id !== productId
            ),
          })),
        editProduct: (productId: string, updatedProduct: Product) =>
          set((state) => ({
            products: state.products.map((product) =>
              product._id === productId ? updatedProduct : product
            ),
          })),
      }),
      {
        name: "productState-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

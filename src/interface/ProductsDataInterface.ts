import { StaticImageData } from "next/image";

export type Product = {
  _id: string;
  name: string;
  coverPhoto?: any;
  image?: any;
  images?: string[];
  price: number;
  rating: number;
  priceSymbol: string;
  description: string;
  status?: string;
  product?: any;
  quantity?: number;
};
export type IRelatedProductItem = {
  _id: string;
  image: string | StaticImageData;
  name: string;
  price: number;
  priceSymbol: string;
  rating: number;
};
export type SingleInfoPageComponentProduct = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  priceSymbol: string;
  description: string;
};
export type IProductReviews = {
  text: string;
  rating: number;
  name: string;
  date: any;
  photo?: string;
};

export type ProductsProps = {
  products: Product[];
};
export type featuredProducts = {
  featuredProducts: Product[];
};
export type ProductCardsProps = {
  products: Product[];
};

export type WishlistProps = {
  product: Product;
  WishListId: string;
};

// coverPhoto?: string | StaticImageData
// image?: string | StaticImageData;

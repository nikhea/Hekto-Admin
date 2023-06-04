import * as yup from "yup";
interface Image {
  asset_id: any;
  secure_url: any;
  thumbnail_url: any;
  public_id: any;
}
export const productSchema = yup.object().shape({
  name: yup.string().required().trim().max(64),
  shortDescription: yup.string().required().trim().max(800),
  description: yup.string().required().trim().max(1000),
  price: yup.number().required(),
  quantity: yup.number().required(),
  // sold: yup.number().required(),
  photos: yup.array().required(),
  coverPhoto: yup.mixed().required(),
  specifications: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        value: yup.string().required(),
        _id: yup.string().required(),
      })
    )
    .required(),
  availability: yup
    .object()
    .shape({
      inStock: yup.boolean().required(),
      quantity: yup.number().required(),
      deliveryDate: yup.date().required(),
    })
    .required(),
  subcategory: yup.string().required(),
  category: yup.string().required(),
  rating: yup.number().required(),
  features: yup.array().of(yup.string()).required(),
  status: yup.string().required(),
  bestSeller: yup.boolean().required(),
  featured: yup.boolean().required(),
  newArrival: yup.boolean().required(),
  specialOffer: yup.boolean().required(),
});

export interface ProductForm {
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
  coverPhoto: any;
  subcategory: string;
  category: string;
  rating: number;
  features: string[];
  specifications: {
    name: string;
    value: string;
    _id: string;
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

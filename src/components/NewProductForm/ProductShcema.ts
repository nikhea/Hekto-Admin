import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  priceSymbol: yup.string().required(),
  currency: yup.string().required(),
  quantity: yup.number().required(),
  sold: yup.number().required(),
  photos: yup.array().of(yup.string()).required(),
  coverPhoto: yup.string().required(),
  specifications: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        value: yup.string().required(),
        id: yup.string().required(),
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
});

export interface ProductForm {
  name: string;
  description: string;
  price: number;
  priceSymbol: string;
  currency: string;
  quantity: number;
  sold: number;
  status: string;
  photos: string[];
  coverPhoto: string;
  subcategory: string;
  category: string;
  rating: number;
  features: string[];
  specifications: {
    name: string;
    value: string;
    id: string;
  }[];
  availability: {
    inStock: boolean;
    quantity: number;
    deliveryDate: Date;
  };
}

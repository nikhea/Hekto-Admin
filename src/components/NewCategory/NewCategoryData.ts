import * as yup from "yup";

export type newCategoryDataData = {
  name: string;
  description: string;
  image: string;
};

export const newCategoryDataSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().url().required(),
});

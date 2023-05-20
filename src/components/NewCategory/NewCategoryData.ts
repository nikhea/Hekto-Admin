import * as yup from "yup";

export type newCategoryDataData = {
  name: string;
  description: string;
  coverPhoto: string;
};

export const newCategoryDataSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  coverPhoto: yup.string().url().required(),
});

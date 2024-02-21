import * as yup from "yup";

export type newSubCategoryDataData = {
  name: string;
  description: string;
  // coverPhoto: string;
  photo: any;

  category: string;
};

export const newSubCategoryDataSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  // coverPhoto: yup.string().url().required(),
  // photo: yup.mixed().required(),
});

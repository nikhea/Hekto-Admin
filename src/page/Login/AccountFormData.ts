import * as yup from "yup";

export type loginAccountFormData = {
  email: string;
  password: string;
};

export const loginAccountSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export type registerAccountFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export const registerAccountSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

import * as yup from "yup";

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

export const updateSchema = yup.object().shape({
  // gender: yup.string(),
  // dateOfBirth: yup.date(),
  // city: yup.string(),
  // state: yup.string(),
  // lga: yup.string(),
  // country: yup.string(),
  // address: yup.string(),
  // phone: yup.number(),
  // facebook: yup.string().matches(re, "URL is not valid"),
  // tiwtter: yup.string().matches(re, "URL is not valid"),
  // linkedin: yup.string().matches(re, "URL is not valid"),
  // instagram: yup.string().matches(re, "URL is not valid"),
  // postcode: yup.string(),
});
export const genderOPtions = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

import axios from "../../lib/axios";

export const fetchCategories = async () => {
  const { data } = await axios.get("category");
  return data;
};

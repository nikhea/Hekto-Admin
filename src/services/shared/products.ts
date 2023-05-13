import axios from "../../lib/axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("products");
  // console.log(data);

  return data;
};

export const fetchSingleProducts = async (name: any) => {
  const { data } = await axios.get(`products/${name}`);
  return data;
};

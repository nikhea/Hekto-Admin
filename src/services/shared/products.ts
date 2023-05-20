import axios from "../../lib/axios";

export const fetchAllProducts = async () => {
  const { data } = await axios.get("products/all");
  // console.log(data);

  return data.data;
};

export const fetchSingleProducts = async (name: any) => {
  const { data } = await axios.get(`products/${name}`);
  return data;
};

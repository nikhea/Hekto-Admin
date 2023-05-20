import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { fetchAllProducts } from "../../services/shared/products";

interface Props {
  initialData: any; // replace 'any' with your actual type
}

export const useFetchAllProducts = () => {
  const { data: products } = useQuery([queryKey.products], fetchAllProducts);

  return products;
};

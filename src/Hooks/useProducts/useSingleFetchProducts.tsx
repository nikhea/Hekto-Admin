import { useQuery } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";
import { FC } from "react";

interface Props {
  name?: string;
}

export const useSingleFetchProducts: FC<Props> = (name) => {
  const { data: product } = useQuery([queryKey.products, name], () =>
    fetchSingleProducts(name)
  );

  return product;
};

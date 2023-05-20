import { useQuery } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";
import { FC } from "react";

interface Props {
  name?: any;
}

export const useSingleFetchProducts: FC<Props> = (props) => {
  const { data: product } = useQuery(
    [queryKey.products, props.name],
    () => fetchSingleProducts(props.name)
    // {
    //   initialData: props.initialData.product,
    //   refetchOnMount: true,
    // }
  );

  return product;
};

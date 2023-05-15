import { useQuery } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";

interface Props {
  initialData: any;
  id: string | undefined;
}

export const useSingleFetchProducts = (props: Props) => {
  const { data: product } = useQuery(
    [queryKey.products, props.id],
    () => fetchSingleProducts(props.id),
    {
      initialData: props.initialData.product,
      refetchOnMount: true,
    }
  );

  return product;
};

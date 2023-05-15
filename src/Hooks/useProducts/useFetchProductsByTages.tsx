import { useQuery } from "@tanstack/react-query";
import { fetchProductsByTages } from "../../services/shared/products";
import { queryKey } from "../queryKeys";

interface Props {
  initialData: any;
  tage?: any;
}

export const useFetchProductsByTage = (props: Props) => {
  const { data: product } = useQuery(
    [queryKey.productsTage],
    () => fetchProductsByTages(),
    {
      //   initialData: props.initialData.product,
      refetchOnMount: true,
    }
  );

  return product;
};

import { useQuery } from "@tanstack/react-query";
import { fetchOrdersStats } from "../../services/authenticated/order";
import { queryKey } from "../queryKeys";

interface Props {
  initialData?: any; // replace 'any' with your actual type
}

export const useFetchOrdersStats = (props?: Props) => {
  const { data, isLoading } = useQuery(
    [queryKey.orderstats],
    fetchOrdersStats,
    {
      refetchOnMount: true,
    }
  );

  return data;
};

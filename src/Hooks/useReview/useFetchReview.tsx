import { useQuery } from "@tanstack/react-query";
import { fetchProductReview } from "../../services/authenticated/review";
import { queryKey } from "../queryKeys";

export const useFetchProductReviews = (props: any) => {
  const { data: reviews, isLoading } = useQuery([queryKey.reviews, props], () =>
    fetchProductReview(props)
  );

  return {
    reviews,
    isLoading,
  };
};

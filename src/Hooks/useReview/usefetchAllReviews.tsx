import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAllProducts } from "../../services/shared/products";
import { queryKey } from "../queryKeys";
import { fetchAllReview } from "../../services/authenticated/reviews";

const usefetchAllReviews = () => {
  const { data: reviews } = useQuery([queryKey.reviews], fetchAllReview);

  return reviews;
};

export default usefetchAllReviews;

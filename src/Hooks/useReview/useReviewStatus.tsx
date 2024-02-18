import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { UpdateReviewStatusServer } from "../../services/authenticated/reviews";
import { queryKey } from "../queryKeys";

const useUpdateReviewStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, status, isLoading, data } = useMutation(
    async (reviewId: string) => {
      await UpdateReviewStatusServer(reviewId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.reviews]);
        // queryClient.invalidateQueries();
      },
    }
  );

  const updateReviewStatus = async (reviewId: string) => {
    await mutateAsync(reviewId);
  };
  return {
    updateReviewStatus,
    status,
    isLoading,
    data,
  };
};

export default useUpdateReviewStatus;

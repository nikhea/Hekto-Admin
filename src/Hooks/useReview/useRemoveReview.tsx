import { useQueryClient, useMutation } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { removeReviewServer } from "../../services/authenticated/reviews";

const useRemoveReview = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, status, isLoading, data } = useMutation(
    removeReviewServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.reviews]);
      },
    }
  );

  const removeReview = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeReview,
    status,
    removeReviewisLoading: isLoading,
    data,
  };
};

export default useRemoveReview;

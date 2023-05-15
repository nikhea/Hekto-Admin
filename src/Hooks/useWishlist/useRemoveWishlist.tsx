import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeWishlist } from "../../services/authenticated/wishlist";
import { queryKey } from "../queryKeys";
export const useRemoveWishlist = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(removeWishlist, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey.wishlist]);
    },
  });

  const removeFromWishlist = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeFromWishlist,
    status,
    isLoading,
    data,
  };
};

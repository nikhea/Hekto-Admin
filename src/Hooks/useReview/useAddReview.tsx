import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProductReviewServer } from "../../services/authenticated/review";
import { useCartState } from "../../store/useCartStore";
import { queryKey } from "../queryKeys";
import NiceModal from "@ebay/nice-modal-react";
import { usePathname } from "next/navigation";

export const addProductReview = () => {
  const pathname = usePathname();

  console.log(pathname);

  let productID: any;
  const queryClient = useQueryClient();

  const addNewProductReview = useMutation(
    async ({ productId, rating, comment }: any) => {
      await addProductReviewServer(productId, rating, comment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();

        NiceModal.remove("review-modal");
      },
    }
  );

  const addReview = async (
    productId: string,
    rating: number,
    comment: string
  ) => {
    await addNewProductReview.mutateAsync({ productId, rating, comment });
  };
  return {
    addReview,
    status: addNewProductReview.status,
    isLoading: addNewProductReview.isLoading,
    data: addNewProductReview.data,
  };
};

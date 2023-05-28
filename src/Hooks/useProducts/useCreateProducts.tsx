import React from "react";
import { queryKey } from "../queryKeys";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createProductServer } from "../../services/shared/products";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { useMultiImageStore } from "../../store/useMultipleImageStore";

const useCreateProducts = () => {
  const { clearStore } = useSingleImageStore();
  const { clearStore: ClearMultiple } = useMultiImageStore();

  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    createProductServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.products]);
        // clearStore();
        // ClearMultiple()
      },
    }
  );

  const createNewProduct = async (productData: any) => {
    await mutateAsync(productData);
  };
  return {
    createNewProduct,
    status,
    createProductLoading: isLoading,
    data,
  };
};

export default useCreateProducts;

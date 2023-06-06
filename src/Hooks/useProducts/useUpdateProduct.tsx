import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { UpdateProductServer } from "../../services/shared/products";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { queryKey } from "../queryKeys";

const useUpdateProduct = () => {
  const { clearStore } = useSingleImageStore();
  const queryClient = useQueryClient();
  const UpdateProduct = useMutation(
    async ({ productId, productData }: any) => {
      await UpdateProductServer(productId, productData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.products]);
        queryClient.invalidateQueries();
        clearStore();
      },
    }
  );

  const updateProduct = async (productId: string, productData: any) => {
    await UpdateProduct.mutateAsync({ productId, productData });
  };
  return {
    updateProduct,
    status: UpdateProduct.status,
    isLoading: UpdateProduct.isLoading,
    data: UpdateProduct.data,
  };
};

export default useUpdateProduct;

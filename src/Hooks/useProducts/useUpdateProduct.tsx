import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { UpdateProductServer } from "../../services/shared/products";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { queryKey } from "../queryKeys";

const useUpdateProduct = () => {
  const { clearStore } = useSingleImageStore();
  const queryClient = useQueryClient();
  const { mutateAsync, status, isLoading, data } = useMutation(
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
    await mutateAsync({ productId, productData });
  };
  // console.log(isLoading);

  return {
    updateProduct,
    status,
    isLoading,
    data,
  };
};

export default useUpdateProduct;

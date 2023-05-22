import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { queryKey } from "../queryKeys";
import { removeCategories } from "../../services/shared/categories";

const useRemoveCategories = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    removeCategories,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.categories]);
      },
    }
  );

  const removeFromCategories = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeFromCategories,
    status,
    removeFromCategoriesisLoading: isLoading,
    data,
  };
};

export default useRemoveCategories;

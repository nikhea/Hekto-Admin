import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKey } from "../queryKeys";
import { UpdateCategoriesServer } from "../../services/shared/categories";
import { useSingleImageStore } from "../../store/useSingleImageStore";

const useUpdateCategories = () => {
  const { clearStore } = useSingleImageStore();
  const queryClient = useQueryClient();
  const UpdateCategories = useMutation(
    async ({ categoriesId, categoriesData }: any) => {
      await UpdateCategoriesServer(categoriesId, categoriesData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.categories]);
        queryClient.invalidateQueries();
        clearStore();
      },
    }
  );

  const updateCategories = async (
    categoriesId: string,
    categoriesData: any
  ) => {
    await UpdateCategories.mutateAsync({ categoriesId, categoriesData });
  };
  return {
    updateCategories,
    status: UpdateCategories.status,
    isLoading: UpdateCategories.isLoading,
    data: UpdateCategories.data,
  };
};

export default useUpdateCategories;

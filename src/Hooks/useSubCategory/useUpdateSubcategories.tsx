import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { UpdateSubCategoriesServer } from "../../services/shared/subcategories";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { queryKey } from "../queryKeys";

const useUpdateSubcategories = () => {
  const { clearStore } = useSingleImageStore();
  const queryClient = useQueryClient();
  const UpdateSubCategories = useMutation(
    async ({ subCategoriesId, SubCategoriesData }: any) => {
      await UpdateSubCategoriesServer(subCategoriesId, SubCategoriesData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.categories]);
        queryClient.invalidateQueries();
        clearStore();
      },
    }
  );

  const updateSubCategories = async (
    subCategoriesId: string,
    SubCategoriesData: any
  ) => {
    await UpdateSubCategories.mutateAsync({
      subCategoriesId,
      SubCategoriesData,
    });
  };

  return {
    updateSubCategories,
    status: UpdateSubCategories.status,
    updateSubCategoriesIsLoading: UpdateSubCategories.isLoading,
    data: UpdateSubCategories.data,
  };
};

export default useUpdateSubcategories;

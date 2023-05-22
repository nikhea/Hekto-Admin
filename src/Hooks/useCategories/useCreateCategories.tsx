import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategories } from "../../services/shared/categories";
import { queryKey } from "../queryKeys";
import { useSingleImageStore } from "../../store/useSingleImageStore";

const useCreateCategories = () => {
  const { clearStore } = useSingleImageStore();

  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    createCategories,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.categories]);
        clearStore();
      },
    }
  );

  const createNewCategories = async (categoriesData: any) => {
    await mutateAsync(categoriesData);
  };
  return {
    createNewCategories,
    status,
    createCategoriesisLoading: isLoading,
    data,
  };
};

export default useCreateCategories;

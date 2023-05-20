import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategories } from "../../services/shared/categories";
import { queryKey } from "../queryKeys";

const useCreateCategories = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    createCategories,
    {
      onSuccess: () => {
        // queryCache.invalidateQueries(WISHLIST_QUERY_KEY);
        queryClient.invalidateQueries([queryKey.wishlist]);
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

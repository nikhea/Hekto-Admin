import { useQueryClient, useMutation } from "@tanstack/react-query";
import { removeSubCategories } from "../../services/shared/subcategories";
import { queryKey } from "../queryKeys";

const useRemoveSubCategories = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    removeSubCategories,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.subcategory]);
      },
    }
  );

  const removeFromSubCategories = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeFromSubCategories,
    status,
    removeSubCategoriesisLoading: isLoading,
    data,
  };
};

export default useRemoveSubCategories;

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { queryKey } from "../queryKeys";
import { createSubCategories } from "../../services/shared/subcategories";
const useCreateSubCategories = () => {
  const { clearStore } = useSingleImageStore();

  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    createSubCategories,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.subcategory]);
        clearStore();
      },
    }
  );

  const createNewSubCategories = async (subcategoriesData: any) => {
    await mutateAsync(subcategoriesData);
  };
  return {
    createNewSubCategories,
    status,
    createSubCategoriesisLoading: isLoading,
    data,
  };
};

export default useCreateSubCategories;

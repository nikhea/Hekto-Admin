import { useQueryClient, useMutation } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { removeProductServer } from "../../services/shared/products";

const useRemoveFromProducts = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, status, isLoading, data } = useMutation(
    removeProductServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.products]);
      },
    }
  );

  const removeFromProducts = async (id: string) => {
    await mutateAsync(id);
  };

  return {
    removeFromProducts,
    status,
    removeFromProductsisLoading: isLoading,
    data,
  };
};

export default useRemoveFromProducts;

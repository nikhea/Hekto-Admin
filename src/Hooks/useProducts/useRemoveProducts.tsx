import { useQueryClient, useMutation } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { removeProductServer } from "../../services/shared/products";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

const useRemoveFromProducts = () => {
  const queryClient = useQueryClient();
  let navigate = useNavigate();

  const { mutateAsync, status, isLoading, data } = useMutation(
    removeProductServer,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.products]);
        navigate(routes.products);
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

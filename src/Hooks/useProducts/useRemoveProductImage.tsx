import { useQueryClient, useMutation } from "@tanstack/react-query";
import { queryKey } from "../queryKeys";
import { removeProductImage } from "../../services/shared/products";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

const useRemoveSingleProductImage = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, status, isLoading, data } = useMutation(
    async ({ id, assetId }: any) => {
      await removeProductImage(id, assetId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.products]);
        // queryClient.invalidateQueries();
      },
    }
  );

  const removeSingleProductImage = async (id: string, assetId: any) => {
    await mutateAsync({ id, assetId });
  };

  return {
    removeSingleProductImage,
    status,
    removeSingleProductImageisLoading: isLoading,
    data,
  };
};

export default useRemoveSingleProductImage;

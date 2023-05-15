import { useMutation, useQueryClient } from "@tanstack/react-query";
import { increaseCartItemQuantityServer } from "../../services/authenticated/cart";
import { useCartState } from "../../store/useCartStore";
import { queryKey } from "../queryKeys";

export const increaseCartItemQuantity = () => {
  const { removeFromCart, addToCart, increaseQuantity } = useCartState();
  const queryClient = useQueryClient();

  const increaseCartItemQuantity = useMutation(
    async ({ ItemId, quantity }: any) => {
      await increaseCartItemQuantityServer(ItemId, quantity);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.carts]);
      },
    }
  );

  const increaseQuantitys = async (
    ItemId: string,
    quantity: any,
    product: any
  ) => {
    try {
      increaseQuantity(product._id);
      await increaseCartItemQuantity.mutateAsync({ ItemId, quantity });
    } catch (error) {
      //   addToCart(product);
    }
  };
  return {
    increaseQuantitys,
    status: increaseCartItemQuantity.status,
    isLoading: increaseCartItemQuantity.isLoading,
    data: increaseCartItemQuantity.data,
  };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decreaseCartItemQuantityServer } from "../../services/authenticated/cart";
import { useCartState } from "../../store/useCartStore";
import { queryKey } from "../queryKeys";

export const decreaseCartItemQuantity = () => {
  const { removeFromCart, addToCart, decreaseQuantity } = useCartState();
  const queryClient = useQueryClient();

  const decreaseCartItemQuantity = useMutation(
    async ({ ItemId, quantity }: any) => {
      await decreaseCartItemQuantityServer(ItemId, quantity);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.carts]);
      },
    }
  );

  const decreaseQuantitys = async (
    ItemId: string,
    quantity: any,
    product: any
  ) => {
    try {
      decreaseQuantity(product._id);
      await decreaseCartItemQuantity.mutateAsync({ ItemId, quantity });
    } catch (error) {
      //   addToCart(product);
    }
  };
  return {
    decreaseQuantitys,
    status: decreaseCartItemQuantity.status,
    isLoading: decreaseCartItemQuantity.isLoading,
    data: decreaseCartItemQuantity.data,
  };
};

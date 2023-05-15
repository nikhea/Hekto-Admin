import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../../services/authenticated/cart";
import { useCartState } from "../../store/useCartStore";
import { queryKey } from "../queryKeys";

export const useRemoveCartItems = () => {
  const { removeFromCart, addToCart } = useCartState();
  const queryClient = useQueryClient();

  const removeCartItemMutation = useMutation(
    async ({ product, itemId }: any) => {
      await deleteCartItem(product, itemId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey.carts]);
      },
    }
  );

  const removeCartItem = async (product: any, itemId: string) => {
    try {
      removeFromCart(product._id);
      await removeCartItemMutation.mutateAsync({ product, itemId });
    } catch (error) {
      addToCart(product);
    }
  };
  return {
    removeCartItem,
    status: removeCartItemMutation.status,
    isLoading: removeCartItemMutation.isLoading,
    data: removeCartItemMutation.data,
  };
};

//   const { mutateAsync, status, isLoading, data } = useMutation(async (productId:any, itemId: any) => {
//     await deleteCartItem(productId, itemId);

//   }, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["carts"]);
//     },
//   });

//   const deleteCartItems = async (product: any, itemId: string) => {
//     // await mutateAsync({product,itemId} );
//     await removeCartItemMutation.mutateAsync({product, itemId});

//   };
//   return {
//     deleteCartItems,
//     status,
//     isLoading,
//     data,
//   };

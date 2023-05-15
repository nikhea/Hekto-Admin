import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCartState } from "../../store/useCartStore";
import { fetchCart } from "../../services/authenticated/cart";
import { queryKey } from "../queryKeys";

export const useCart = () => {
  const { data, isLoading, error } = useQuery([queryKey.carts], fetchCart, {
    refetchOnMount: true,
  });

  const { cart: CartItemState } = useCartState();

  useEffect(() => {
    if (data) {
      useCartState.setState(() => ({
        cart: data[0],
      }));
    }
  }, [data]);

  return {
    CartItemState,
    isLoading,
    error,
  };
};

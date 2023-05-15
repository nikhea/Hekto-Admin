import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCartState } from "../../store/useCartStore";
import { useUser } from "../../auth/auth";
import { StripPayment } from "../../services/authenticated/stripe";

export const useStripePay = () => {
  const { cart } = useCartState();
  const userData = useUser();
  const cartItem = cart.items;
  const user = userData.data;

  const queryClient = useQueryClient();

  const makeCheckout = useMutation(
    async () => {
      await StripPayment(cartItem, user);
    },
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(["carts"]);
      },
    }
  );

  const handleCheckout = async () => {
    try {
      await makeCheckout.mutateAsync();
    } catch (error) {}
  };
  return {
    handleCheckout,
    status: makeCheckout.status,
    isLoading: makeCheckout.isLoading,
    data: makeCheckout.data,
  };
};

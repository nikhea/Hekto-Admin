// @ts-nocheck
import {
  useQueryClient,
  useMutation,
  MutationStatus,
} from "@tanstack/react-query";
import { UpdateOrderStatusServer } from "../../services/authenticated/order";
import { queryKey } from "../queryKeys";

interface UpdateOrderStatusResult {
  updateReviewStatus: (reviewId: string, statusId: string) => Promise<void>;
  queryStatus: MutationStatus;
  isLoading: boolean;
  data: any;
}
interface Order {
  reviewId: string;
  // Define other properties of an order here
}

const useUpdateOrderStatus = (): UpdateOrderStatusResult => {
  const queryClient = useQueryClient();
  const {
    mutateAsync,
    status: queryStatus,
    isLoading,
    data,
  } = useMutation(
    async ({ reviewId, statusId }: { reviewId: string; statusId: string }) => {
      await UpdateOrderStatusServer(reviewId, statusId);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKey.orders]);
        queryClient.invalidateQueries([queryKey.orderstats]);
      },
    }
  );

  const updateReviewStatus = async (reviewId: string, statusId: string) => {
    await mutateAsync({ reviewId, statusId });
  };

  return {
    updateReviewStatus,
    queryStatus,
    isLoading,
    data,
  };
};

export default useUpdateOrderStatus;
// queryClient.invalidateQueries([queryKey.orderstats]);

// const useUpdateOrderStatus = (): UpdateOrderStatusResult => {
//   const queryClient = useQueryClient();
//   const {
//     mutateAsync,
//     status: queryStatus,
//     isLoading,
//     data,
//   } = useMutation(
//     async ({ reviewId, statusId }: { reviewId: string; statusId: string }) => {
//       await UpdateOrderStatusServer(reviewId, statusId);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries([queryKey.orders]);
//       },
//     }
//   );

//   const updateReviewStatus = async (reviewId: string, statusId: string) => {
//     await mutateAsync({ reviewId, statusId });
//   };

//   return {
//     updateReviewStatus,
//     queryStatus,
//     isLoading,
//     data,
//   };
// };

import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { useCartState } from "../../store/i";
import { notify } from "../../utils/notify";

export const fetchOrders = async () => {
  const { data } = await axios.get("orders", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};
export const fetchOrdersStats = async () => {
  const { data } = await axios.get("orders/stats", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  console.log(data, "end");
  return data.data;
};

export const UpdateOrderStatusServer = async (
  orderId: string,
  status: string
) => {
  try {
    const token = storage.getToken();
    const { data } = await axios.patch(
      `orders/${orderId}/status`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // if (data.statuscode === 200) {
    //   notify({
    //     type: "success",
    //     message: data.message,
    //   });
    // }
    // if (data.statuscode === 201) {
    //   notify({
    //     type: "success",
    //     message: data.message,
    //   });
    // }
    if (data.statuscode === 404) {
      notify({
        type: "error",
        message: data.message,
      });
    }
    if (data.statuscode === 400) {
      notify({
        type: "error",
        message: data.message,
      });
    }
    if (data.statuscode === 500) {
      notify({
        type: "error",
        message: data.message,
      });
    }
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      notify({
        type: "error",
        message: error.response.data.message,
      });
    } else {
      notify({
        type: "error",
        message: error.response.data.message,
      });
    }
  }
};

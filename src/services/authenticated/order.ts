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

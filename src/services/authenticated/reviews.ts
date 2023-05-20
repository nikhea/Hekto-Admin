import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const fetchAllReview = async () => {
  const { data } = await axios.get("review", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};

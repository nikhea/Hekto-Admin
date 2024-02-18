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

export const UpdateReviewStatusServer = async (reviewId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(`review/${reviewId}/status`, {
        headers: {
          Authorization: `Bearer ${storage.getToken()}`,
        },
      });
      resolve(data);
      if (data.statuscode === 200) {
        notify({
          type: "info",
          message: data.message,
        });
      }
      if (data.statuscode === 201) {
        notify({
          type: "success",
          message: data.message,
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

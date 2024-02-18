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
    } catch (err) {
      reject(err);
    }
  });
};

export const removeReviewServer = async (id: string) => {
  try {
    const token = storage.getToken();
    const response = await axios.delete(`review/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { statuscode, message } = response.data;

    if (statuscode === 200) {
      notify({
        type: "success",
        message: message,
      });
    } else {
      notify({
        type: "error",
        message: message,
      });
    }
  } catch (error: any) {
    console.log(error);

    if (error.response && error.response.status === 404) {
      notify({
        type: "error",
        message: error.response.data.message,
      });
    } else {
      notify({
        type: "error",
        message: "An error occurred while deleting the review.",
      });
    }
    console.error("Error:", error.message);
  }
};

// export const removeReviewServer = async (id: string) => {
//   const { data } = await axios.delete(`review/${id}`, {
//     headers: {
//       Authorization: `Bearer ${storage.getToken()}`,
//     },
//   });

//   if (data.statuscode === 400) {
//     notify({
//       type: "error",
//       message: data.message,
//     });
//   }
//   if (data.statuscode === 404) {
//     notify({
//       type: "error",
//       message: data.message,
//     });
//   }
//   if (data.statuscode === 200) {
//     notify({
//       type: "success",
//       message: data.message,
//     });
//   }
//   console.log(data);
// };

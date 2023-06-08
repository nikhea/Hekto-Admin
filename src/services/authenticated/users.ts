import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const fetchAllUser = async () => {
  const { data } = await axios.get("user", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};
export const updateProfileServer = async ({ profileData }: any) => {
  console.log(profileData, "dskdkjjdkfjkdjfj");

  const res = await axios.patch(
    `user/me/profile`,
    { profileData },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  if (res.data.statuscode === 409) {
    notify({
      type: "info",
      message: res.data.message,
    });
  }
  if (res.data.statuscode === 201) {
    notify({
      type: "success",
      message: res.data.message,
    });
  }
  if (res.data.statuscode === 400) {
    notify({
      type: "error",
      message: res.data.message,
    });
  }
  return {
    status: res.status,
    data: res.data.data,
  };
};

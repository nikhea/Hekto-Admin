import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { useSingleImageStore } from "../../store/useSingleImageStore";
import { notify } from "../../utils/notify";

export const fetchAllUser = async () => {
  const { data } = await axios.get("user", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};
export const addProfileImage = async (ProfileImage: any) => {
  const res = await axios.patch(
    `user/me/profile/image`,
    { ProfileImage },
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
  if (res.data.statuscode === 200) {
    notify({
      type: "success",
      message: res.data.message,
    });
    useSingleImageStore.getState().clearStore();
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
export const updateProfileServer = async ({ profileData }: any) => {
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
  if (res.data.statuscode === 200) {
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

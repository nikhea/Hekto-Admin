import { storage } from "../../auth/utils";
import Axiosclient from "../../lib/axios";
import { notify } from "../../utils/notify";
export const addProfileImage = async (ProfileImage: any) => {
  // http://localhost:4000/api/properties

  // const res = await Axiosclient.put(`user/me`, imageDate);
  const res = await Axiosclient.patch(
    `user/me`,
    { ProfileImage },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  notify({
    type: "success",
    message: res?.data.message,
  });
  return {
    status: res.status,
    data: res.data.data,
  };
};

export const updateProfile = async (data: any) => {
  const res = await Axiosclient.patch(
    `user/me/profile`,
    { data },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  notify({
    type: "success",
    message: res?.data.message,
  });
  return {
    status: res.status,
    data: res.data.data,
  };
};

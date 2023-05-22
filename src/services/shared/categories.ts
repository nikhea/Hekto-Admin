import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const fetchCategories = async () => {
  const { data } = await axios.get("category");
  return data.data;
};
export const fetchSingleCategories = async (name: any) => {
  const { data } = await axios.get(`category/${name}`);
  return data.data;
};
export const createCategories = async ({ categoriesData }: any) => {
  const { data } = await axios.post(
    "category",
    { categoriesData },
    {
      headers: {
        Authorization: `Bearer ${storage.getToken()}`,
      },
    }
  );
  if (data.statuscode === 409) {
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
  if (data.statuscode === 400) {
    notify({
      type: "error",
      message: data.message,
    });
  }
  return data.data;
};

export const UpdateCategoriesServer = async (
  categoriesId: string,
  categoriesData: any
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(
        `category/${categoriesId}`,
        { categoriesData },
        {
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
        }
      );
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
export const removeCategories = async (id: string) => {
  const { data } = await axios.delete(`category/${id}`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  if (data.statuscode === 400) {
    notify({
      type: "error",
      message: data.message,
    });
  }
  if (data.statuscode === 200) {
    notify({
      type: "success",
      message: data.message,
    });
  }

  // return data.data;
};

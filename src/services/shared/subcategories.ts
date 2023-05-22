import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";

export const fetchSubCategories = async () => {
  const { data } = await axios.get("subcategory/pagination");
  return data;
};
export const fetchSubSingleCategories = async (name: any) => {
  const { data } = await axios.get(`subcategory/${name}`);
  return data.data;
};
export const createSubCategories = async ({ subCategoriesData }: any) => {
  const { data } = await axios.post(
    "subcategory",
    { subCategoriesData },
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

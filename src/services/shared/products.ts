import axios from "../../lib/axios";
import { storage } from "../../auth/utils";
import { notify } from "../../utils/notify";
import { ProductForm } from "../../components/NewProductForm/ProductShcema";

export const fetchAllProducts = async () => {
  const { data } = await axios.get("products/all");
  // console.log(data);

  return data.data;
};
export const fetchSingleProducts = async (name: any) => {
  const { data } = await axios.get(`products/${name}`);
  return data;
};
export const createProductServer = async (productData: any) => {
  const { data } = await axios.post(
    "products",
    { ...productData },
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
export const removeProductServer = async (id: string) => {
  const { data } = await axios.delete(`products/${id}`, {
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

export const UpdateProductServer = async (
  productId: string,
  productData: any
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(
        `products/${productId}`,
        { productData },
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

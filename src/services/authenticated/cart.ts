import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { useCartState } from "../../store/i";
import { notify } from "../../utils/notify";

const cartStore = useCartState.getState();

export const fetchCart = async () => {
  const { data } = await axios.get("carts", {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });

  return data.data;
};

export const addToCartServer = async (product: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      // useCartState.getState().addToCart(product);
      const { data } = await axios.post(
        "carts",
        {
          items: { product: product._id, quantity: 1 },
        },
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
      useCartState.getState().removeFromCart(product._id);
      // cartStore.removeFromCart(product._id);
      reject(err);
    }
  });
};
export const increaseCartItemQuantityServer = async (
  ItemId: string,
  quantity: number
) => {
  const type = "increase";
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(
        `/carts/${ItemId}/increase`,
        { quantity, type },
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
export const decreaseCartItemQuantityServer = async (
  ItemId: string,
  quantity: number
) => {
  const type = "increase";
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(
        `/carts/${ItemId}/decrease`,
        { quantity, type },
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
export const deleteCartItem = async (product: any, itemId: string) => {
  const productId = product._id;

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(
        `carts/${itemId}`,

        {
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
        }
      );
      console.log(data);

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
      cartStore.addToCart(product);

      reject(err);
    }
  });
};
export const ClearCartServer = async (cartId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(
        `/carts/${cartId}/empty`,

        {
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
        }
      );
      console.log(data);

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
// const items = {
//   product: productId,
//   quantity: 1,
// };
// const { data } = await axios.post(
//   "wishlist",
//   { items },
//   {
//     headers: {
//       Authorization: `Bearer ${storage.getToken()}`,
//     },
//   }
// );
// if (data.statuscode === 409) {
//   notify({
//     type: "info",
//     message: data.message,
//   });
// }
// if (data.statuscode === 201) {
//   notify({
//     type: "success",
//     message: data.message,
//   });
// }
// if (data.statuscode === 400) {
//   notify({
//     type: "error",
//     message: data.message,
//   });
// }
// return data.data;
// const productId = product._id;
// console.log(productId);
// useCartState.getState().removeFromCart(product._id);

// try {
//   // Remove the item from the Zustand store
//   useCartState.getState().removeFromCart(product._id);

//   // await axios.delete(`carts/${itemId}`);
// } catch (error) {
//   // If there's an error, add the item back to the Zustand store
//   // cartStore.addToCart(product);
//   throw error;
// }

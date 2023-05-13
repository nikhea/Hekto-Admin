import { storage } from "../../auth/utils";
import axios from "../../lib/axios";
import { notify } from "../../utils/notify";
export const StripPayment = async (cartItem: any, user: any) => {
  try {
    const res = await axios.post(
      "stripe/create-checkout-session",
      {
        cartItem,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${storage.getToken()}`,
        },
      }
    );
    if (res.data.url) {
      window.location.href = res.data.url;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// try {
//   const res = await axios.post(
//     `stripe/create-checkout-session`,
//     {
//       cartItem,
//       user,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${storage.getToken()}`,
//       },
//     }
//   );
//   // console.log(res.data.url);
//   if (res.data.url) {
//     window.location.href = res.data.url;
//   }
// } catch (error) {
//   console.log(error);
// }

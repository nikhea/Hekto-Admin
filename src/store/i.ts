import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  photos: string[];
  coverPhoto: string;
  specifications: {
    name: string;
    value: string;
  }[];
  availability: {
    quantity: number;
    deliveryDate: string;
  };
  category: string;
  subcategory: string;
  features: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartStore {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: (cart: CartState) => void;
}

// Define the initial cart state
const initialCartState: CartState = {
  items: [],
};

// Create the cart store
export const useCartState = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: initialCartState,
        addToCart: (item) => {
          set((state) => ({
            cart: {
              ...state.cart,
              items: [
                ...state.cart.items,
                {
                  product: item.product,
                  quantity: item.quantity,
                },
              ],
            },
          }));
        },
        removeFromCart: (id) => {
          set((state) => ({
            cart: {
              ...state.cart,
              items: state.cart.items.filter((item) => item.product._id !== id),
            },
          }));
        },
        clearCart: (cart) => {
          set(() => ({
            cart,
          }));
        },
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

// import { create, SetState } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   sold: number;
//   photos: string[];
//   coverPhoto: string;
//   specifications: {
//     name: string;
//     value: string;
//   }[];
//   availability: {
//     quantity: number;
//     deliveryDate: string;
//   };
//   category: string;
//   subcategory: string;
//   features: string[];
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
//   totalPrice?: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// interface CartStore extends CartState {
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   getTotal: () => number;
// }

// interface UseCartStore {
//   cart: CartState;
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   getTotal: () => number;
// }

// type CartStoreSetter = SetState<CartStore>;

// const cartStore = (set: CartStoreSetter) => ({
//   items: [],
//   addToCart: (item: CartItem) => {
//     set((state) => ({
//       items: [...state.items, item],
//     }));
//   },
//   removeFromCart: (id: string) => {
//     set((state) => ({
//       items: state.items.filter((item) => item.product._id !== id),
//     }));
//   },
//   clearCart: () => {
//     set({ items: [] });
//   },
//   increaseQuantity: (id: string) => {
//     set((state) => ({
//       items: state.items.map((item) => {
//         if (item.product._id === id) {
//           return {
//             ...item,
//             quantity: item.quantity + 1,
//           };
//         } else {
//           return item;
//         }
//       }),
//     }));
//   },
//   decreaseQuantity: (id: string) => {
//     set((state) => ({
//       items: state.items.map((item) => {
//         if (item.product._id === id) {
//           return {
//             ...item,
//             quantity: item.quantity > 1 ? item.quantity - 1 : 1,
//           };
//         } else {
//           return item;
//         }
//       }),
//     }));
//   },
//   getTotal: () => {
//     return cartStore.getState().items.reduce((total, item) => {
//       return total + item.quantity * item.product.price;
//     }, 0);
//   },
// });

// const useCartStore = create<UseCartStore>(
//   devtools(
//     persist(
//       (set) =>
//         cartStore((args) => {
//           set(args as any);
//         }),
//       {
//         name: "cart-storage",
//       }
//     )
//   )
// );

// export default useCartStore;

// getTotal: () => {
//   return get().cart.items.reduce((total, item) => {
//     return total + item.quantity * item.product.price;
//   }, 0);
// },

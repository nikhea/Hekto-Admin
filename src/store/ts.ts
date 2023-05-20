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
  totalPrice?: number;
}

interface CartState {
  items: CartItem[];
}

interface CartStore {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: (cart: CartState) => void;
  // increaseQuantity: (id: string) => void;
  // decreaseQuantity: (id: string) => void;
  // getTotal: () => number;
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
          const existingItem = initialCartState.items.find(
            (cartItem) => cartItem.product._id === item.product._id
          );
          if (existingItem) {
            // If the item already exists in the cart, we update the quantity of the existing item
            set((state) => ({
              cart: {
                ...state.cart,
                items: state.cart.items.map((cartItem) =>
                  cartItem.product._id === item.product._id
                    ? {
                        ...cartItem,
                        quantity: cartItem.quantity + item.quantity,
                      }
                    : cartItem
                ),
              },
            }));
          } else {
            // If the item does not exist in the cart, we add it as a new item
            set((state) => ({
              cart: {
                ...state.cart,
                items: [...state.cart.items, item],
              },
            }));
          }
        },
        removeFromCart: (id) => {
          set((state) => ({
            cart: {
              ...state.cart,
              items: state.cart.items.filter((item) => item.product._id !== id),
            },
          }));
        },
        clearCart: () => {
          set((state) => ({
            cart: {
              items: [],
            },
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

// import { create } from "zustand";
// import {devtools, persist} from 'zustand/middleware'

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

// interface CartStore {
//   cart: CartState;
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: (cart: CartState) => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   getTotal: () => number;
// }
// const cartStore  = (set) => ({

// })

// const useCartStore = create(
//   devtools(
//       persist(cartStore, {
//           name: "cart-storage",
//       })
//   )
// )

// export default useCartStore;

// addToCart: (product) => {
//     const exists = get().cartItems.find((item) => item.id === product.id);
//     if (exists) {
//       set((state) => ({
//         cartItems: state.cartItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       }));
//     } else {
//       set((state) => ({ cartItems: [...state.cartItems, { ...product, quantity: 1 }] }));
//     }
//   },

// const existingItem = initialCartState.items.find(
//   (cartItem) => cartItem.product._id === item.product._id
// );
// console.log(existingItem, "existing item");

// if (existingItem) {
//   // If the item already exists in the cart, we update the quantity of the existing item
//   console.log(existingItem, "existing item");

// set((state) => ({
//   cart: {
//     ...state.cart,
//     items: state.cart.items.map((cartItem) =>
//       cartItem.product._id === item.product._id
//         ? {
//             ...cartItem,
//             quantity: cartItem.quantity + item.quantity,
//           }
//         : cartItem
//     ),
//   },
// }));
// } else {
//   // If the item does not exist in the cart, we add it as a new item
//   console.log(initialCartState);

//   set((state) => ({
//     cart: {
//       ...state.cart,
//       items: [...state.cart.items, item],
//     },
//   }));
// }

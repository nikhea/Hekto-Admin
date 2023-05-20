import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

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
  priceSymbol: string;
  category: string;
  subcategory: string;
  features: string[];
}

interface CartItem {
  _id: any;
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartStore {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  getProductItemTotal: (quantity: number, price: number) => number;
  getSubTotal: () => number;
  isProductInCart: (productId: string) => boolean;
  getTotalQuantity: () => number;

  // getTotal: () => void;
  clearCart: (cart: CartState) => void;
  getItemDetails: (
    productId: string
  ) => { itemId: any; quantity: number } | undefined;
}

const initialCartState: CartState = {
  items: [],
};

// Create the cart store
export const useCartState = create<CartStore>()(
  devtools(
    // persist(
    (set, get) => ({
      cart: initialCartState,
      addToCart: (item) => {
        const existingItem = get().cart.items.find(
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
      removeFromCart: (id: any) => {
        set((state) => ({
          cart: {
            ...state.cart,
            items: state.cart.items.filter((item) => item.product._id !== id),
          },
        }));
      },
      getTotalQuantity: () => {
        const { items } = get().cart;
        let totalQuantity = 0;

        for (const item of items) {
          totalQuantity += item.quantity;
        }

        return totalQuantity;
      },
      increaseQuantity: (id: string) => {
        set((state) => ({
          cart: {
            ...state.cart,
            items: state.cart.items.map((item) => {
              if (item.product._id === id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              } else {
                return item;
              }
            }),
          },
        }));
      },
      decreaseQuantity: (id: string) => {
        set((state) => ({
          cart: {
            ...state.cart,
            items: state.cart.items.map((item) => {
              if (item.product._id === id) {
                return {
                  ...item,
                  quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                };
              } else {
                return item;
              }
            }),
          },
        }));
      },
      isProductInCart: (productId: string) => {
        const { items } = get().cart;
        return items.some((item) => item.product._id === productId);
      },
      getItemDetails: (productId: string) => {
        const { items } = get().cart;
        const item = items.find((item) => item.product._id === productId);

        if (item) {
          return { itemId: item._id, quantity: item.quantity };
        }

        return undefined;
      },

      getProductItemTotal: (quantity, price) => {
        return quantity * price;
      },
      getSubTotal: () => {
        const { items } = get().cart;
        let subTotal = 0;

        for (const item of items) {
          const { quantity, product } = item;
          subTotal += quantity * product.price;
        }

        return subTotal;
      },
      clearCart: () => {
        set(() => ({
          cart: {
            items: [],
          },
        }));
      },
    })
    // {
    //   name: "cart-storage",
    // }
    // )
  )
);

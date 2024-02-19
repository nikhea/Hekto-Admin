import { create } from "zustand";

// Define an interface for the state
interface DeliveryStatusState {
  status: string;
  setStatus: (newStatus: string) => void;
}

// Define a function to create the store with a default value
const createDeliveryStatusStore = (
  initialStatus: string
): (() => DeliveryStatusState) =>
  create<DeliveryStatusState>((set) => ({
    status: initialStatus,
    setStatus: (newStatus: string) => set({ status: newStatus }),
  }));

// Use the create function to create the custom hook
const useDeliveryStatusStore = createDeliveryStatusStore("pending");

export default useDeliveryStatusStore;

// import { create } from "zustand";

// const useDeliveryStatusStore = create((set) => ({
//   status: "pending",
//   setStatus: (newStatus: string) => set({ status: newStatus }),
// }));

// export default useDeliveryStatusStore;

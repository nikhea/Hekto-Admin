// import { create } from "zustand";
// import { persist, createJSONStorage, devtools } from "zustand/middleware";

// type stepState = {
//   step: number;
//   nextStep : (step: number) => void;
//   prevStep: (step: number) => void;
// };

// export const useStepState = create<stepState>()(
//   devtools(
//     persist(
//       (set) => ({
//         step: 0,
//         nextStep: () => set({ step:step +1 }),
//         prevStep: () => set({step: step - 1 }),
//       }),
//       {
//         name: "stepState-storage",
//         storage: createJSONStorage(() => sessionStorage),
//       }
//     )
//   )
// );

export const i = "s";

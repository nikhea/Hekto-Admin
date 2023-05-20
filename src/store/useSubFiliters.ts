import { create } from "zustand";

type IUseSubFiliters = {
  pageNumber: number;
  limitProducts: number;
  sortProducts: number;
  searchQuery: string;
  selectedRating: number | null;
  setSelectedRating: (value: number | null) => void;
  setPageNumber: (pageNumber: number) => void;
  setLimitProduct: (limitProducts: number) => void;
  setSortProduct: (sortProducts: number) => void;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
  handleLimitChange: (limitProducts: number) => void;
  handleSortChange: (sortProducts: number) => void;
  handleSearch: (query: string) => void;
};

export const useSubFiliters = create<IUseSubFiliters>((set) => ({
  pageNumber: 1,
  limitProducts: 9,
  sortProducts: -1,
  searchQuery: "",
  selectedRating: null,
  setSelectedRating: (value) => set(() => ({ selectedRating: value })),
  setPageNumber: (pageNumber) => set(() => ({ pageNumber })),
  setLimitProduct: (limitProducts: number) => set(() => ({ limitProducts })),
  setSortProduct: (sortProducts: number) => set(() => ({ sortProducts })),
  handlePreviousClick: () =>
    set((state) => ({ pageNumber: state.pageNumber - 1 })),
  handleNextClick: () => set((state) => ({ pageNumber: state.pageNumber + 1 })),
  handleLimitChange: (limit: number) => set({ limitProducts: limit }),
  handleSortChange: (sort: number) => set({ sortProducts: sort }),
  handleSearch: (query: string) => set({ searchQuery: query }),
}));

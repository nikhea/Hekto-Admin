import { create } from "zustand";

interface DataItem {
  _id: string;
  name: string;
  photo: {
    secure_url: string;
  };
}

interface StoreState {
  data: DataItem[];
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  handleOpen: () => void;
  handleClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredData: DataItem[];
  onSelect: (name: string) => void;
}

export const useModelStore = create<StoreState>((set) => ({
  data: [],
  open: true,
  setOpen: (isOpen) => set({ open: isOpen }),
  handleOpen: () => set({ open: true }),
  handleClose: () => set({ open: false }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  get filteredData() {
    return this.data.filter((item: DataItem) =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  },
  onSelect: (name) => {},
}));

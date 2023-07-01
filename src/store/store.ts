import { create } from "zustand";

export interface MoviesStore {
  search: string;
  setSearch: (value: string) => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  search: "",
  setSearch: (value: string) => set(() => ({ search: value })),
}));

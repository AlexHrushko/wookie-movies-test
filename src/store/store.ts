import { Movie } from "@/models";
import { create } from "zustand";

export interface MoviesStore {
  search: string;
  setSearch: (value: string) => void;
  movieForDetailsView: Movie | null;
  setMoviewForDetailsView: (movie: Movie | null) => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  search: "",
  setSearch: (value: string) => set(() => ({ search: value })),
  movieForDetailsView: null,
  setMoviewForDetailsView: (movie: Movie | null) =>
    set(() => ({ movieForDetailsView: movie })),
}));

import { Movie } from "@/models";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface MoviesStore {
  search: string;
  setSearch: (value: string) => void;
  movieForDetailsView: Movie | null;
  setMoviewForDetailsView: (movie: Movie | null) => void;
}

// Using Zustand to create a store. The store is persisted in sessionStorage.
export const useMoviesStore = create(
  persist<MoviesStore>(
    (set) => ({
      search: "",
      setSearch: (value: string) => set(() => ({ search: value })),
      movieForDetailsView: null,
      setMoviewForDetailsView: (movie: Movie | null) =>
        set(() => ({ movieForDetailsView: movie })),
    }),
    {
      name: "wookie-movies-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

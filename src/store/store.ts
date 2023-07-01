import { Movie } from "@/models";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface MoviesStore {
  search: string;
  setSearch: (value: string) => void;
  movieForDetailsView: Movie | null;
  setMoviewForDetailsView: (movie: Movie | null) => void;
  savedMovies: Movie[];
  addMovieToSaved: (movie: Movie) => void;
  removeMovieFromSaved: (id: string) => void;
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
      savedMovies: [],
      addMovieToSaved: (movie: Movie) => {
        set((state) => {
          if (state.savedMovies.find((m) => m.id === movie.id)) {
            return state;
          }
          return {
            savedMovies: [...state.savedMovies, movie],
          };
        });
      },
      removeMovieFromSaved: (id: string) => {
        set((state) => ({
          savedMovies: state.savedMovies.filter((movie) => movie.id !== id),
        }));
      },
    }),
    {
      name: "wookie-movies-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

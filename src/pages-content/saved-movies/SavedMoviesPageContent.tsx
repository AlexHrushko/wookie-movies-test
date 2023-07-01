"use client";

import styles from "./SavedMoviesPageContent.module.css";
import { useMoviesStore } from "@/store";
import { GenresList } from "@/components";
import { getGroupedMoviesByGenre } from "@/utils/getGroupedMoviesByGenre";

export const SavedMoviesPageContent = () => {
  const { movies } = useMoviesStore((state) => ({
    movies: state.savedMovies,
  }));

  return (
    <main className={styles.root}>
      {movies && <GenresList groupedMovies={getGroupedMoviesByGenre(movies)} />}
    </main>
  );
};

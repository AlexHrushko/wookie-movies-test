"use client";

import styles from "./SavedMoviesPageContent.module.css";
import { useMoviesStore } from "@/store";
import { GenresList } from "@/components";
import { getGroupedMoviesByGenre } from "@/utils/getGroupedMoviesByGenre";

export const SavedMoviesPageContent = () => {
  const { movies } = useMoviesStore((state) => ({
    movies: state.savedMovies,
  }));

  const renderContent = () => {
    if (Object.keys(movies).length === 0) {
      return (
        <div className={styles.empyListContainer}>
          You don&apos;t have saved movies
        </div>
      );
    }

    return <GenresList groupedMovies={getGroupedMoviesByGenre(movies)} />;
  };

  return <main className={styles.root}>{renderContent()}</main>;
};

import { GroupedMovies, Movie } from "@/models";
import { useEffect, useState } from "react";

// Hook for grouping movies by genre
export const useGroupedMoviesByGenre = (movies: Movie[]) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [groupedMovies, setGroupedMovies] = useState<GroupedMovies>();

  // Getting all possible genres from movies
  useEffect(() => {
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!genres.includes(genre)) {
          setGenres((genres) => [...genres, genre]);
        }
      });
    });
  }, [movies]);

  // Grouping movies by genre
  useEffect(() => {
    genres.forEach((genre) => {
      const moviesByGenre = movies.filter((movie) =>
        movie.genres.includes(genre)
      );

      setGroupedMovies((groupedMovies) => ({
        ...groupedMovies,
        [genre]: moviesByGenre,
      }));
    });
  }, [genres]);

  return { groupedMovies, genres };
};

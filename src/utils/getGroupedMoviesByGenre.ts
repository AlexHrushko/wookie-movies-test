import { GroupedMovies, Movie } from "@/models";

// Function for grouping movies by genre
export const getGroupedMoviesByGenre = (movies: Movie[]) => {
  let genres: string[] = [];
  let groupedMovies: GroupedMovies = {};

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres = [...genres, genre];
      }
    });
  });

  genres.forEach((genre) => {
    const moviesByGenre = movies.filter((movie) =>
      movie.genres.includes(genre)
    );
    groupedMovies = {
      ...groupedMovies,
      [genre]: moviesByGenre,
    };
  });

  return groupedMovies;
};

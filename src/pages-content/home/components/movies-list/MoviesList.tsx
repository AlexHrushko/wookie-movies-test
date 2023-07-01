import { Movie } from "@/models";
import styles from "./MoviesList.module.css";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

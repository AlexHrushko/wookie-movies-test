import { Movie } from "@/models";
import styles from "./MoviesList.module.css";
import { MoviesListItem } from "../movies-list-item";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div className={styles.root}>
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

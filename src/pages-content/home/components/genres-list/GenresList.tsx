import { GroupedMovies, Movie } from "@/models";
import styles from "./GenresList.module.css";
import { MoviesList } from "../movies-list";

interface GenresListProps {
  groupedMovies: GroupedMovies;
}

export const GenresList = ({ groupedMovies }: GenresListProps) => {
  return Object.keys(groupedMovies).map((genre) => {
    return (
      <div className={styles.root} key={genre}>
        <h2>{genre}</h2>

        <MoviesList movies={groupedMovies[genre]} />
      </div>
    );
  });
};

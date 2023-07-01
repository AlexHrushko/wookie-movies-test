import { Movie } from "@/models";
import styles from "./MoviesListItem.module.css";
import Link from "next/link";
import { useMoviesStore } from "@/store";

interface MoviesListItemProps {
  movie: Movie;
}

export const MoviesListItem = ({ movie }: MoviesListItemProps) => {
  const { setMoviewForDetailsView } = useMoviesStore((state) => ({
    setMoviewForDetailsView: state.setMoviewForDetailsView,
  }));

  const handleMovieClick = (movie: Movie) => {
    setMoviewForDetailsView(movie);
  };

  return (
    <Link
      href={`/${movie.slug}`}
      key={movie.id}
      onClick={() => handleMovieClick(movie)}
    >
      <div className={styles.root}>{movie.title}</div>
    </Link>
  );
};

import { Movie } from "@/models";
import styles from "./MoviesListItem.module.css";
import Link from "next/link";
import { useMoviesStore } from "@/store";
import Image from "next/image";
import { API_ENDPOINT } from "@/constants";
import { Bookmark } from "../bookmark";

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
      <div className={styles.root}>
        <Image fill src={`${API_ENDPOINT}/${movie.backdrop}`} alt="backdrop" />
        <p className={styles.title}>{movie.title}</p>

        <div className={styles.bookmark}>
          <Bookmark movie={movie} />
        </div>
      </div>
    </Link>
  );
};

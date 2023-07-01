import { Movie } from "@/models";
import { useMoviesStore } from "@/store";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import styles from "./Bookmark.module.css";

interface BookmarkProps {
  movie: Movie;
}

export const Bookmark = ({ movie }: BookmarkProps) => {
  const { savedMovies, addMovieToSaved, removeMovieFromSaved } = useMoviesStore(
    (state) => ({
      savedMovies: state.savedMovies,
      addMovieToSaved: state.addMovieToSaved,
      removeMovieFromSaved: state.removeMovieFromSaved,
    })
  );
  const isMovieSaved = savedMovies.some(
    (savedMovie) => savedMovie.id === movie.id
  );

  const onClickAdd = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    event.preventDefault();

    addMovieToSaved(movie);
  };

  const onClickRemove = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    event.preventDefault();

    removeMovieFromSaved(movie.id);
  };

  if (isMovieSaved) {
    return (
      <BookmarkIcon onClick={onClickRemove} className={styles.solidBookmark} />
    );
  } else {
    return (
      <BookmarkIcon onClick={onClickAdd} className={styles.outlineBookmark} />
    );
  }
};

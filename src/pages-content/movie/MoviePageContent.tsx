"use client";

import styles from "./MoviePageContent.module.css";
import { useParams } from "next/navigation";
import { useMoviesStore } from "@/store";
import Image from "next/image";
import { API_ENDPOINT } from "@/constants";
import moment from "moment";

export const MoviePageContent = () => {
  const { movie: slug } = useParams();

  // I made movie details view with using store, because i didn't find request in description for getting movie details by slug or id.
  // But i think it will be better to use request for getting movie details by slug or id.
  const { movie } = useMoviesStore((state) => ({
    movie: state.movieForDetailsView,
  }));

  console.log(movie);

  const renderContent = () => {
    if (!movie || slug !== movie.slug) {
      return "Cant find movie with this slug";
    }

    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            width={400}
            height={600}
            src={`${API_ENDPOINT}/${movie.poster}`}
            alt="poster"
          />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>
            <h2>{movie.title}</h2>

            <div>{movie.imdb_rating} / 10</div>
          </div>

          <p>
            {moment(movie.released_on).format("YYYY.MM.DD")} | {movie.length} |{" "}
            {movie.director}
          </p>

          <p>Cast: {movie.cast.join(", ")}</p>

          <p>{movie.overview}</p>
        </div>
      </div>
    );
  };

  return <main className={styles.root}>{renderContent()}</main>;
};

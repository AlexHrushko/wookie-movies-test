"use client";

import styles from "./MoviePageContent.module.css";
import { useParams } from "next/navigation";
import { useMoviesStore } from "@/store";

export const MoviePageContent = () => {
  const { movie } = useParams();

  // I made movie details view with using store, because i didn't find request in description for getting movie details by slug or id.
  // But i think it will be better to use request for getting movie details by slug or id.
  const { movieForDetailsView } = useMoviesStore((state) => ({
    movieForDetailsView: state.movieForDetailsView,
  }));

  const renderContent = () => {
    if (!movieForDetailsView || movie !== movieForDetailsView.slug) {
      return "Cant find movie with this slug";
    }

    return <div>{movieForDetailsView.slug}</div>;
  };

  return <main className={styles.main}>{renderContent()}</main>;
};

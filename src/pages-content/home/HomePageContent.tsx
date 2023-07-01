"use client";

import { useEffect, useState } from "react";
import styles from "./HomePageContent.module.css";
import { useMoviesStore } from "@/store";
import axios from "axios";
import { Movie } from "@/models";
import { useGroupedMoviesByGenre } from "@/hooks";
import { GenresList } from "./components";

const MOVIES_API_URL = "https://dev.flixforge.com/p/test_movies.pl";

export const HomePageContent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useMoviesStore((state) => ({
    search: state.search,
  }));
  const { groupedMovies } = useGroupedMoviesByGenre(movies);

  // Doing a request to the API for getting movies.
  // In task description i didn't finc information about using additianal libraries for making requests. So i used axios and useEffect but there is will be good to use for exapme react-query.
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        search.trim.length > 0
          ? `${MOVIES_API_URL}?q=${search}`
          : MOVIES_API_URL,
        {
          headers: {
            Authorization: "Bearer SecretPass",
          },
        }
      )
      .then((response) => {
        setMovies(response.data.movies as Movie[]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [search]);

  return (
    <main className={styles.root}>
      {isLoading && "Loading..."}

      {groupedMovies && <GenresList groupedMovies={groupedMovies} />}
    </main>
  );
};

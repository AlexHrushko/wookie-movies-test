"use client";

import { useEffect, useState } from "react";
import styles from "./HomePageContent.module.css";
import { useMoviesStore } from "@/store";
import axios from "axios";
import { GroupedMovies, Movie } from "@/models";
import { getGroupedMoviesByGenre } from "@/utils/getGroupedMoviesByGenre";
import { API_ENDPOINT } from "@/constants";
import { GenresList } from "@/components";

const MOVIES_API_URL = `${API_ENDPOINT}/p/test_movies.pl`;

export const HomePageContent = () => {
  const [movies, setMovies] = useState<GroupedMovies>({});
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useMoviesStore((state) => ({
    search: state.search,
  }));

  // Doing a request to the API for getting movies.
  // In task description i didn't find information about using additianal libraries for making requests. So i used axios and useEffect but there is will be good to use for exapmle react-query.
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        search.trim().length > 0
          ? `${MOVIES_API_URL}?q=${search}`
          : MOVIES_API_URL,
        {
          headers: {
            Authorization: "Bearer SecretPass",
          },
        }
      )
      .then((response) => {
        setMovies(getGroupedMoviesByGenre(response.data.movies as Movie[]));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [search]);

  const renderContent = () => {
    if (isLoading) {
      return <div className={styles.empyListContainer}>Loading...</div>;
    }

    if (Object.keys(movies).length === 0) {
      return <div className={styles.empyListContainer}>Cant find movies</div>;
    }

    return <GenresList groupedMovies={movies} />;
  };

  return <main className={styles.root}>{renderContent()}</main>;
};

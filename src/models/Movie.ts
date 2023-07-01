export interface Movie {
  id: string;
  title: string;
  overview: string;
  classification: string;
  director: string;
  imdb_rating: number;
  length: string;
  slug: string;
  backdrop: string;
  poster: string;
  genres: string[];
  released_on: Date;
  cast: string[];
}

export interface GroupedMovies {
  [key: string]: Movie[];
}

"use client";

import styles from "./SearchInput.module.css";
import { useMoviesStore } from "@/store";

export const SearhcInput = () => {
  const { search, setSearch } = useMoviesStore((state) => ({
    search: state.search,
    setSearch: state.setSearch,
  }));

  return (
    <div className={styles.root}>
      &#128270;
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

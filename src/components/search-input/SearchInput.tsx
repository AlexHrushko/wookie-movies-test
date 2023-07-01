"use client";

import { useDebouncedFn } from "beautiful-react-hooks";
import styles from "./SearchInput.module.css";
import { useMoviesStore } from "@/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearhcInput = () => {
  const router = useRouter();
  const { search, setSearch } = useMoviesStore((state) => ({
    search: state.search,
    setSearch: state.setSearch,
  }));
  const [localSearch, setLocalSearch] = useState(search);

  // I used debounce for saving search value to store only after little pause to not triggering search request after every changing.
  const saveToStore = useDebouncedFn(
    (value: string) => {
      setSearch(value);
      router.push("/");
    },
    500,
    undefined,
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    saveToStore(e.target.value);
    setLocalSearch(value);
  };

  return (
    <div className={styles.root}>
      &#128270;
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
        value={localSearch}
        onChange={onChange}
      />
    </div>
  );
};

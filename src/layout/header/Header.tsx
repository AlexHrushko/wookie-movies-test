import Link from "next/link";
import styles from "./Header.module.css";
import { Logo, SearchInput } from "@/components";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Logo />

      <div className={styles.searchAndLinksContainer}>
        <Link href="/saved-movies" className={styles.headerLink}>
          <p>Saved</p>
        </Link>
        <SearchInput />
      </div>
    </div>
  );
};

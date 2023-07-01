import styles from "./Header.module.css";
import { Logo, SearhcInput } from "@/components";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <SearhcInput />
    </div>
  );
};

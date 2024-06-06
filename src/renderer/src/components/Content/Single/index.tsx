import { Button } from "@Components/Button";
import styles from "./styles.module.css";
import { ReactNode } from "react";

type DoubleProps = {
  children: ReactNode;
};

export function Single({ children }: DoubleProps) {
  return <div className={styles.container}>{children}</div>;
}

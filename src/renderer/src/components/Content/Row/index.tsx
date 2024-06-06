import React, { ReactNode } from "react";

import styles from "./styles.module.css";

type TripleProps = {
  children: ReactNode;
};

export function Row({ children }: TripleProps) {
  return <div className={styles.container}>{children}</div>;
}

import React, { ReactNode } from "react";

import styles from "./styles.module.css";

type TripleProps = {
  children: ReactNode;
};

export function Triple({ children }: TripleProps) {
  return <div className={styles.container}>{children}</div>;
}

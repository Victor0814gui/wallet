import styles from "./styles.module.css";
import React, { ReactNode } from "react";

type DoubleProps = {
  children: ReactNode;
};

export function Double({ children }: DoubleProps) {
  return <div className={styles.container}>{children}</div>;
}

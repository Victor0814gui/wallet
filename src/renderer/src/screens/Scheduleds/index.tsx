import React from "react";

import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

export function Scheduleds() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>Scheduleds</h1>
        <p>
          Aqui você vai ver as compras agendadas e as programadas, incluindo
          alguns insigns para maximizar seus resultados.
        </p>
      </div>
    </div>
  );
}

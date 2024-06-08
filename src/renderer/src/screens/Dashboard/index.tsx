import React from "react";

import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

const data = [10, 20, 30, 25, 15, 40, 50];

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>Dashboard</h1>
        <div className={styles.columns}>
          <div className={styles.box}>
            <h2 className={styles.heading}>Entradas do mês</h2>
            <h1 className={styles.text}>R$ 5000</h1>
            <h2 className={styles.marker}>acréscimo: 6.8%</h2>
          </div>
          <div className={styles.box}>
            <h2 className={styles.heading}>Saidas do mês</h2>
            <h1 className={styles.text}>R$ 5000</h1>
            <h2 className={styles.heading}>acréscimo: 6.8%</h2>
          </div>
          <div className={styles.box}>
            <h2 className={styles.heading}>Agendados</h2>
            <h1 className={styles.text}>R$5000</h1>
            <h2 className={styles.heading}>acréscimo: 22.6%</h2>
          </div>
          <div className={styles.box}>
            <h2 className={styles.heading}>Balanço atual</h2>
            <h1 className={styles.text}>R$ 5000</h1>
            <h2 className={styles.heading}>acréscimo: 32.6%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

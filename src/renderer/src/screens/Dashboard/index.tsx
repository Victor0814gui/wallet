import React from "react";

import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";
import { Analitcs } from "./Sections/Analitcs";
import BarChart from "./Components/BarChart";

const data = [10, 20, 30, 25, 15, 40, 50];

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {/* <BarChart data={data} width={500} height={300} /> */}
      </div>
    </div>
  );
}

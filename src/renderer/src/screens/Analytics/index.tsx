import React from "react";

import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { COLORS } from "../../styles/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
  datasets: [
    {
      label: "Vendas do mês",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
      borderWidth: 1,
    },
    {
      label: "Gastos do mês",
      data: [42, 32, 62, 12, 53, 43, 38],
      backgroundColor: "white",
      borderColor: COLORS.primary,
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Gráfico de Barras de Vendas",
    },
  },
};

const lineChatData = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
  datasets: [
    {
      label: "Vendas de 2021",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: COLORS.primary,
      tension: 0.1,
    },
    {
      label: "Vendas de 2020",
      data: [40, 55, 56, 81, 80, 59, 65],
      fill: false,
      borderColor: "rgba(255, 99, 132, 1)",
      tension: 0.1,
    },
  ],
};

const lineChatOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Gráfico de Linhas de Vendas com Limites",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
    },
  },
};

export function Analytics() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div>
          <h1>Analitcs</h1>
          <p className={styles.heading}>
            Um resumo do seu fluxo de caixa do mês
          </p>
        </div>
        <Bar data={data} options={options} />
        <div>
          <h2>Gastos de mês</h2>
          <p className={styles.heading}>
            Parabêns, você está lidando muito bem com as suas finanças!
          </p>
        </div>
        <Line data={lineChatData} options={lineChatOptions} />;
      </div>
    </div>
  );
}

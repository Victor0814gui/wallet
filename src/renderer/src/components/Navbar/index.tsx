import React from "react";

import {
  House,
  ChartPieSlice,
  Timer,
  Cardholder,
  ChartBar,
  Broom,
  Gear,
  Kanban,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Cardholder size={42} weight="fill" color="white" />
        <h1 className={styles.logo}>Wallet</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.item} onClick={() => navigate("/dashboard")}>
          <House size={26} weight="fill" />
          <p className={styles.itemText}>Home</p>
        </div>
        <div className={styles.item} onClick={() => navigate("/analytics")}>
          <ChartPieSlice size={26} weight="fill" />
          <p className={styles.itemText}>Analytics</p>
        </div>
        <div className={styles.item} onClick={() => navigate("/timer")}>
          <Timer size={26} weight="fill" />
          <p className={styles.itemText}>Timer</p>
        </div>
        <div className={styles.item} onClick={() => navigate("/purchases")}>
          <Cardholder size={26} weight="fill" />
          <p className={styles.itemText}>Purchases</p>
        </div>
        <div className={styles.item} onClick={() => navigate("/reports")}>
          <ChartBar size={26} weight="fill" />
          <p className={styles.itemText}>Reports</p>
        </div>
        <div className={styles.item} onClick={() => navigate("/tools")}>
          <Broom size={26} weight="fill" />
          <p className={styles.itemText}>Tools</p>
        </div>
      </div>
      <div className={styles.item} onClick={() => navigate("/account-manager")}>
        <Kanban size={26} weight="fill" />
        <p className={styles.itemText}>Manager Account</p>
      </div>
      <div className={styles.item} onClick={() => navigate("/settings")}>
        <Gear size={26} weight="fill" />
        <p className={styles.itemText}>Settings</p>
      </div>
    </div>
  );
}

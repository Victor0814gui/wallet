import React from "react";


import { Smiley, Heart, Horse, House, Graph, ChartPieSlice, Timer, Cardholder, ChartBar, Broom, Gear, Kanban } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";



export function Navbar(){
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>Wallet</h1>
            <div className={styles.content}>
                <div className={styles.item} onClick={() => navigate("/dashboard")}>
                    <House size={26} weight="fill" />
                    <p className={styles.itemText}>Home</p>
                </div>
                <div className={styles.item} onClick={() => navigate("/analitcs")}>
                    <ChartPieSlice size={26} weight="fill" />
                    <p className={styles.itemText}>Analitcs</p>
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
    )
}
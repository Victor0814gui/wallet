import React from "react";

import {
  Smiley,
  Heart,
  Horse,
  House,
  Graph,
  ChartPieSlice,
  Timer,
  Cardholder,
  ChartBar,
  Broom,
  Gear,
  Kanban,
  DownloadSimple,
  Coin,
  ArrowsLeftRight,
  CardsThree,
  ArrowUpRight,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";

import { Content } from "../../../../components/Content";

export function Analitcs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.balanceIndicator}>
          <p className={styles.heading}>Total balance</p>
          <p className={styles.text}>R$6.010.29</p>
          <Content.Row>
            <p>seu saldo aumentou</p>
            <ArrowUpRight size={20} color={"var(--violet)"} />
          </Content.Row>
        </div>
        <div className={styles.actions}>
          <div className={styles.icon}>
            <DownloadSimple size={26} weight="fill" />
          </div>
          <div className={styles.icon}>
            <Coin size={26} weight="fill" />
          </div>
          <div className={styles.icon}>
            <ArrowsLeftRight size={26} weight="fill" />
          </div>
          <div className={styles.icon}>
            <CardsThree size={26} weight="fill" />
          </div>
        </div>
        <div className={styles.list}>
          <p className={styles.heading}>Total balance</p>
          {new Array(3).fill({ id: 0 }).map((e) => (
            <div className={styles.item}>
              <div className={styles.icon}>
                <ArrowsLeftRight size={26} weight="fill" />
              </div>
              <p className={styles.heading}>40.234</p>
              <div className={styles.itemMetrics}>
                <p className={styles.heading}>1.9%</p>
                <ArrowsLeftRight size={18} weight="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { ElementType, InputHTMLAttributes } from "react";

import { Smiley, Heart, Horse, Mailbox } from "@phosphor-icons/react";
import styles from "./styles.module.css";

type InputProps = {
  label: string;
  icon?: ElementType;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, icon: Icon, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      {Icon && <Icon size={26} color="#777777" />}
      <input
        {...rest}
        type="text"
        className={styles.input}
        placeholder={label}
      />
    </div>
  );
}

import React, { ButtonHTMLAttributes, ElementType, InputHTMLAttributes } from "react";


import { Smiley, Heart, Horse, Mailbox } from "@phosphor-icons/react";
import styles from "./styles.module.css";


type ButtonProps = {
    label: string;
    icon?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
    label,
    icon: Icon,
    ...rest
}: ButtonProps){
    return (
        <button {...rest} className={styles.container}>
            {label}
            {Icon && <Icon size={20} color="#ffffff" weight="bold"/>}
        </button>
    )
}
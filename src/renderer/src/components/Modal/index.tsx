
import React from "react";

import styles from "./styles.module.css";
import { Info } from "@phosphor-icons/react";
import { useModalStore } from "../../stores/useModalStore";
import {motion} from "framer-motion";



type ModalProps = {
    id: string;
    title: string;
    description: string;
    action: () => void;
}


export function Modal(props:ModalProps){
    const {removeModal} = useModalStore();

    const handleRemoveModal = () => {
        removeModal();
    }

    return(
        <div className={styles.container}>
            <motion.div 
                initial={{scale: 0.7}}
                animate={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.300 }}
                className={styles.modal}
            >
                <div className={styles.header}>
                    <Info size={32} weight="bold" color="#000000" />
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
                <p className={styles.description}>{props.description}</p>
                <div className={styles.footer}>
                    <button className={styles.button} onClick={handleRemoveModal}>Cancenlar</button>
                    <button onClick={props.action} className={`${styles.button} ${styles.buttonColored}`}>Confirmar</button>
                </div>
            </motion.div>
        </div>
    )
}
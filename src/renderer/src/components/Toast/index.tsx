
import React, { useEffect } from "react";

import styles from "./styles.module.css";
import { Info, X } from "@phosphor-icons/react";
import { useToastStore } from "../../stores/useToastStore";

import {motion} from "framer-motion";


type ToastProps = {
    id: string;
    title: string;
    description?: string;
    type: "warning" | "error" | "success";
}


export function Toast({
    title = "Cliente não econtrado"
}: ToastProps){
    const { removeToast } = useToastStore();


    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast();
        },3000)

        return () => clearTimeout(timer);
    })
    return(
        <motion.div 
            animate={{ x: 30 }}
            transition={{ ease: "easeOut", duration: 0.300 }}
            className={styles.container}
        >
            <Info size={26}  />
            <p>{title}</p>
            <X size={26}  onClick={removeToast}/>
        </motion.div>
    )
}
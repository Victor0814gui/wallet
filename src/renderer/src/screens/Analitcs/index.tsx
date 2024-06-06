import React from "react";



import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

 

export function Analitcs(){
 
    return(
        <div className={styles.container}>
            <Navbar/>
           <div className={styles.content}>
                <h1>Analitcs    </h1>
           </div>
        </div>
    )
}
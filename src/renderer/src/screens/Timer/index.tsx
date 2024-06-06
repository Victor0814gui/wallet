import React from "react";



import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

 

export function Timer(){
 
    return(
        <div className={styles.container}>
            <Navbar/>
           <div className={styles.content}>
                <h1>Timer</h1>
           </div>
        </div>
    )
}
import React from "react";



import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

 

export function Reports(){
 
    return(
        <div className={styles.container}>
            <Navbar/>
           <div className={styles.content}>
                <h1>Reports    </h1>
           </div>
        </div>
    )
}
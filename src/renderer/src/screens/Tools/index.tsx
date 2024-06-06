import React from "react";



import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";

 

export function Tools(){
 
    return(
        <div className={styles.container}>
            <Navbar/>
           <div className={styles.content}>
                <h1>Tools    </h1>
           </div>
        </div>
    )
}
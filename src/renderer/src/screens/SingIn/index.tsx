import React from "react";



import styles from "./styles.module.css";

import Image from "../../assets/images/welcome-message.webp"
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Envelope, FireExtinguisher, SignIn as SignInIcon, Password } from "@phosphor-icons/react";
import { Toast } from "../../components/Toast";
import { Button } from "../../components/Button";
import { useToastStore } from "../../stores/useToastStore";


export function SignIn(){
    const navigate = useNavigate();
    const { addToast } = useToastStore();


    const handleNavigateForSignUpScreen = () => {
        addToast({
            id:"asdfakjhsdfasdf",
            title: "Cliente não encontrado",
            type: "error",
        })
    }

    return(
        <div className={styles.container}>
            {/* <Toast title="Cliente não econtrado"/> */}
            <div className={styles.poster}>
                <img className={styles.thumbnail} src={Image} alt="preview"/>
                <p className={styles.heading}>Você sabia que em media processesamos mais de 1TB de imagens todos os dias?</p>
            </div>
            <div className={styles.content}>
                <div className={styles.header}></div>
                <div className={styles.section}>
                    <div className={styles.info}>
                        <h1>Entre na sua conta</h1>
                        <p className={styles.text}>Bem vindo de volta, escolha seu metodo de entrada</p>
                    </div>
                    <Input label="Digite seu email" icon={Envelope}/>
                    <Input type="password" label="Digite sua senha" icon={Password} />
                    <div className={styles.row}>
                        <input className={styles.checkbox} type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
                        <p className={styles.text}>Lembrar sessão de login?</p>
                    </div>
                    {/* <button onClick={handleNavigateForSignUpScreen} className={styles.button}>Entrar na conta</button> */}
                    <Button onClick={handleNavigateForSignUpScreen} label="Entrar na conta" icon={SignInIcon}/>
                    <p className={styles.text}>Ainda não tem uma conta? <a href="/signup" className={styles.link}>clique aqui</a></p>
                </div>
                <div className={styles.footer}>
                    <p className={styles.text}>Electron version <span id="electron-version">30.0.1</span>.</p>
                </div>    
            </div>
        </div>
    )
}
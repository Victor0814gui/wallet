import React from "react";



import styles from "./styles.module.css";

import Image from "../../assets/images/welcome-message.webp"
import { Input } from "../../components/Input";
import { Envelope, Password, SignIn as SignInIcon, PersonSimple, User } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../stores/useModalStore";


export function SignUp(){

    const { addModal } = useModalStore();


    const handleAddModal = () => {
        addModal({
            id:"asdfakjhsdfasdf",
            title: "Cliente não encontrado",
            description: "Para criar uma conta você deve aceitar os termos de uso e politicas de privacidade com o intuito para a proteção dos seus dados",
            action: () => {},
        })
    }

    return(
        <div className={styles.container}>
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
                    <Input label="Digite seu nome" icon={User}/>
                    <Input label="Digite seu email" icon={Envelope}/>
                    <Input type="password" label="Digite sua senha" icon={Password} />
                    <Button onClick={handleAddModal} label="Criar sua conta" icon={SignInIcon}/>
                    <p className={styles.text}>Já tem uma conta? <a href="/signin" className={styles.link}>clique aqui</a></p>
                </div>
                <div className={styles.footer}>
                    <p className={styles.text}>Electron version <span id="electron-version">30.0.1</span>.</p>
                </div>    
            </div>
        </div>
    )
}
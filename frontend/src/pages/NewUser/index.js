import React, { useState } from "react";
import styles from "./NewUser.module.scss";
import { api } from "../services/api";
import { useNavigate } from 'react-router-dom';


export default function NewUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submit", { name, email, password, confirmPassword });
        //integração com meu contexto e com minha API

        await api.post("/usuario/novo", {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then(response => {
            console.log(response);
            navigate('/login');
        })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <input
                        id="input_name"
                        type="name"
                        value={name}
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div >
                <div className={styles.input}>
                    <input
                        id="input_email"
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        id="input_password"
                        type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        id="input_ConfirmPassword"
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirmar Senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className={styles.button} type="submit" onClick={(e) => { handleSubmit(e) }}>
                    Cadastrar
                </button>
                <span className={styles.span} onClick={() => { navigate('/login') }}>
                    Já sou cadastrado.
                </span>
            </form>
        </div >
    )
}

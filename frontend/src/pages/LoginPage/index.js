import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { api } from "../services/api";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //para fechar o navegador e retornar na home
    useEffect(() => {
        if (localStorage.getItem('id')) {
            navigate('/home', { replace: true })
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        //integração com meu contexto e com minha API
        await api.post("/login", {
            email: email,
            password: password,
            //resposta do server
        }).then(response => {
            console.log(response);
            localStorage.setItem('id', response.data.id);
            navigate('/home')
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
                <button className={styles.button} type="submit" onClick={(e) => handleSubmit(e)}>
                    Entrar
                </button>
                <span className={styles.span} onClick={() => { navigate('/usuario/novo') }}>
                    Cadastrar
                </span>
            </form>
        </div>
    );
}

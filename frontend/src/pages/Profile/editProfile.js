import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { api } from "../services/api";
import { useNavigate } from 'react-router-dom';
import NewForm from "../../components/newForm/index";

export default function Profile() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [cities, setCities] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [newFormLevel, setNewFormLevel] = useState(false);
    const [newFormChurch, setNewFormChurch] = useState(false);
    const [listLevels, setListLevels] = useState([]);
    const [churchList, setListCrunch] = useState([]);
    const [level, setLevel] = useState("");
    const [church, setChurch] = useState("");
    const [description, setDescription] = useState("");
    const [selectState, setSelectState] = useState(1);
    const [listState, setListState] = useState([]);
    const [listCities, setListCities] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

    }, [newFormLevel, newFormChurch]);

    useEffect(() => {
        //puxar os dados dos niveis
        api.get(`/nivel`).then(response => {
            setListLevels(response.data)
        }).catch(err => {
            console.log(err);
        })
        //puxar os dados das igrejas
        api.get(`/igrejas`).then(response => {
            setListCrunch(response.data)
        }).catch(err => {
            console.log(err);
        })
        //puxar os estados
        api.get(`/estados`).then(response => {
            setListState(response.data)
        }).catch(err => {
            console.log(err);
        })
        //puxar as cidades
        api.get(`/estados/${selectState}/cidades`).then(response => {
            setListCities(response.data)
        }).catch(err => {
            console.log(err);
        })
        const id = localStorage.getItem('id');
        api.get(`/usuario/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const newFormLevels = () => {
        if (newFormLevel == true) {

            return (<NewForm />)
        }
    }

     const newLevel = async (e) => {
        e.preventDefault();
        await api.post("/nivel", {
            level: level,
            description: description,
            //resposta do server
        }).then(response => {
            console.log(response);
        })
            .catch(err => {
                console.log(err);
            })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <input
                        className={styles.input}
                        type="name"
                        value={name}
                        placeholder={user.name ? user.name : "Insira seu nome"}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div >
                <div className={styles.input}>
                    <input
                        className={styles.input}
                        type="phone"
                        value={phone}
                        placeholder={user.phone ? user.phone : "Insira seu telefone"}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        className={styles.input}
                        type="address"
                        value={address}
                        placeholder={user.address ? user.address : "Insira seu endereço"}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        className={styles.input}
                        type="password"
                        value={cities}
                        placeholder="Cidade"
                        onChange={(e) => setCities(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <input
                        className={styles.input}
                        type="email"
                        value={email}
                        placeholder={user.email ? user.email : "Insira seu email"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <select className={styles.inputBtn} >
                        {
                            listLevels.map(item => (
                                <option key={"row" + item.id}>
                                    <option key={"column level" + item.id}>
                                        {item.level}
                                    </option>
                                </option>
                            ))
                        }
                    </select>
                    <button
                        className={styles.btnMore}
                        type="button"
                        onClick={() => setNewFormChurch(true)}>
                        +
                    </button>
                </div>

                <div className={styles.input}>
                    <select className={styles.inputBtn}>
                        {
                            churchList.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                    <button
                        className={styles.btnMore}
                        type="button"
                        onClick={() => setNewFormLevel(true)}
                    >
                        +
                    </button>
                </div>
                <button className={styles.btn} type="submit" onClick={(e) => { handleSubmit(e) }}>
                    Atualizar
                </button>
            </form>
            <div>
                <form className={styles.form}>
                    <div>
                        <input
                            type="string"
                            value={level}
                            placeholder="Insira um Nível"
                            onChange={(e) => setLevel(e.target.value)}>
                        </input>
                        <input
                            type="string"
                            value={description}
                            placeholder="Insira uma Descrição"
                            onChange={(e) => setDescription(e.target.value)}>
                        </input>
                        <button type="submit" onClick={(e) => {
                            newLevel(e)
                        }}>
                            Inserir
                        </button>
                        <span >
                            x
                        </span>
                    </div>
                </form>
                <form className={styles.form}>
                    <div>
                        <input
                            type="string"
                            value={name}
                            placeholder="Insira uma Igreja"
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                        <input
                            type="string"
                            value={address}
                            placeholder="Insira o Endereço"
                            onChange={(e) => setAddress(e.target.value)}>
                        </input>
                        <select className={styles.inputBtn} onChange={(e) => { setSelectState(e.target.value) }}>
                            {
                                listState.map(item => (
                                    <option key={item.id} value={item.id} >
                                        {item.state}
                                    </option>
                                ))
                            }
                        </select>
                        <button type="submit" onClick={(e) => { handleSubmit(e) }}>
                            Inserir
                        </button>
                        <span>
                            x
                        </span>
                    </div>
                </form>
            </div>
        </div >
    )
}
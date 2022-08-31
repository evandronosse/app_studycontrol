import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from "../../pages/services/api";

export default function NewFormLevels() {
    const [level, setLevel] = useState("");
    const [description, setDescription] = useState("");
    const [listLevels, setListLevels] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setNewState(true);
        // await api.post("/nivel", {
        //     level: level,
        //     description: description,
        //     //resposta do server
        // }).then(response => {
        //     console.log(response);
        //     localStorage.setItem('id', response.data.id);
        // })
        //     .catch(err => {
        //         console.log(err);
        // })
    }

    return (
        <form>
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
                <button type="submit" onClick={(e) => { handleSubmit(e) }}>
                    Inserir
                </button>
                <span>
                    x
                </span>
            </div>
        </form>
    )
}
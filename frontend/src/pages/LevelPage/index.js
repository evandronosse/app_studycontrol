import React, { useState, useEffect } from "react";
import { api } from "../../pages/services/api";
import { Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Level.module.scss';


export default function NewFormLevels() {
    const [level, setLevel] = useState("");
    const [description, setDescription] = useState("");
    const [listLevels, setListLevels] = useState([]);
    const [seqList, setSeqList] = useState("");

    useEffect(() => {
        api.get(`/nivel`).then(response => {
            setListLevels(response.data)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className={styles.general}>
            <table className={styles.table}>
                <thead className={styles.th}>
                    <tr>
                        <th>
                            Nível:
                        </th>
                        <th>
                            Descrição:
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.th}>
                    {
                        listLevels.map(item => (
                            <tr key={"row" + item.id}>
                                <td key={"column level" + item.id}>
                                    {item.level}
                                </td>
                                <td key={"column description" + item.id}>
                                    {item.description}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
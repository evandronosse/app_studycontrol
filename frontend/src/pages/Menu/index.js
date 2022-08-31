import { Link, Outlet } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Menu from '../../data/menu.json';
import { api } from "../services/api";
import { useNavigate } from 'react-router-dom';


//interface para identificar o que vai receber

export default function BarraDeTarefa() {
    const [esconder, setEsconder] = useState(false);
    function esconderF() {
        setEsconder(!esconder)
    }
    const navigate = useNavigate();
    const handleLogout = async () => {
        const userId = localStorage.getItem('id');
        await api.post(`/logout/${userId}`).then(response => {
            console.log(response);
            localStorage.clear();
            navigate('/login')
        })
            .catch(err => {
                console.log(err);
            })
    }
    const [botao, setBotao] = useState(Menu);
    return (
        <>
            <div>
                <div onClick={esconderF} className={classNames({
                    [styles['btn-show']]: true,
                    [styles.btn]: true,
                    [styles['btn-one']]: true,
                    [styles['btn--esconder']]: esconder === true
                })}>
                    <FaBars />
                </div>
                <div className={classNames({
                    [styles['box-1']]: true,
                })}>
                    {Menu.map(item => (
                        <Link key={item.id} to={item.to}
                            onClick={() => {
                                if (item.label === 'LOGOUT') {
                                    handleLogout();
                                }
                            }}
                            className={classNames({
                                [styles.link]: true
                            })}>
                            <div className={classNames({
                                [styles.btn]: true,
                                [styles['btn-one']]: true,
                                [styles['btn--ativo']]: esconder === true,
                                [styles['btn--logout']]: item.label === 'LOGOUT'
                            })}>
                                <span>
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            <Outlet />
        </>
    );

}
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Validation() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('id')) {
            navigate('/login', { replace: true })
        }
    }, []);
    //outlet é para colocar outras paginas dentro do componente
    return (<Outlet />);
}
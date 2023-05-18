import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import './Cabecera.css';

const Cabecera = () => {

    const location = useLocation();

    return <header className="header">
        <img src="/img/header/logo2.png" alt="logo-alura" />
        {
            (location.pathname === "/") && < Link to={"formNuevoVideo"}>
                <Button color="#000000">
                    Nuevo Video
                </Button>
            </Link>
        }

    </header >
}

export default Cabecera;
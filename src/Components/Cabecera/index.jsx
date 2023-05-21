import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button, ContenedorButton } from '../UI'
import './Cabecera.css';

const ButtonCabecera = styled(Button)`
        background-color: #000000;
        width: 130px;
        height: 46px;         
    `

const Cabecera = () => {

    const location = useLocation();

    return <header className="header">
        <img src="/img/header/logo2.png" alt="logo-alura" />
        {
            (location.pathname === "/") && < Link to={"formNuevoVideo"}>
                <ButtonCabecera>
                    Nuevo Video
                </ButtonCabecera>
            </Link>
        }

    </header >
}

export default Cabecera;
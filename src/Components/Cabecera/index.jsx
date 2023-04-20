import Button from '../Button';
import './Cabecera.css';

const Cabecera = () => { 
    return <header className="header">
        <img src="/img/header/logo2.png" alt="logo-alura" />
        <Button color="#000000">
            Nuevo Video
        </Button>

    </header>
}

export default Cabecera;
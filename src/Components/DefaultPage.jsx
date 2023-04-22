import { Fragment } from 'react';
import Cabecera from './Cabecera';
import Footer from './Footer/Footer';


const DefaultPage = (props) => {
    return <>
        <Cabecera />
        {props.children}
        <Footer />
    </>
}

export default DefaultPage;
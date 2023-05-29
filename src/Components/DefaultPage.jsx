import { Fragment } from 'react';
import Cabecera from './Cabecera';
import Footer from './Footer/Footer';


const DefaultPage = ({ children }) => {
    return <>
        <Cabecera />
        {children}
        <Footer />
    </>
}

export default DefaultPage;
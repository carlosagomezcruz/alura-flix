import { Fragment } from 'react';
import Cabecera from './Cabecera';
import Footer from './Footer/Footer';
import Banner from './Banner';
import Main from './Main';


const DefaultPage = ({ children }) => {
    return <>
        <Cabecera />
        {children}
        <Footer />
    </>
}

export default DefaultPage;
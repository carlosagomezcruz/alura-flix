import SliderComponent from '../Slider';
import './slider.css';

const Carrusel = (props) => {

    const { datosIniciales } = props;

    return <SliderComponent datosIniciales={datosIniciales} />
}

export default Carrusel;
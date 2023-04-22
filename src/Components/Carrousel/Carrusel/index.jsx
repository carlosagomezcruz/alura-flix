import SliderComponent from '../Slider';


const Carrusel = (props) => {

    const { datosIniciales } = props;

    return <SliderComponent datosIniciales={datosIniciales} />
}

export default Carrusel;
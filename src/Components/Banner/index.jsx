import './Banner.css';

const Banner = () => {
    return <section className="banner">
        <img src="/img/banner/imagen-fondo.png" alt="Imagen-fondo" className='imagen-fondo'/>
        <div className="contenedor-elementos">
            <div className="contenedor-parrafos">
                <h1 className="titulo-banner">Front End</h1>
                <h2 className="subtitulo-banner">Challenge React</h2>
                <p className="parrafo-banner">
                    Este challenge es una forma de aprendizaje. Es un
                    mecanismo donde podrás comprometerte en la resolución de
                    un problema para poder aplicar todos los conocimientos
                    adquiridos en la formación React.
                </p>
            </div>
            <div className='contenedor-curso'>
                <img src="/img/banner/player.png" alt="Imagen de banner" />
            </div>
        </div>

    </section>
}

export default Banner;
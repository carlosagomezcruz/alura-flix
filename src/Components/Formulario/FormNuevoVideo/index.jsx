import InputDate from "../Inputs"
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";
import './FormNuevoVideo.css'

const FormNuevoVideo = () => {
    return <section className="contenedor-formulario">
        <h1 className="formulario-titulo">Nuevo Video</h1>
        <form className="form">
            <InputDate label="Titulo" />
            <InputDate label="Link del video" />
            <InputDate label="Link imagen del video" />
            <ListaCategorias />
            <TextArea />
            <InputDate label="Codigo de seguridad" />
        </form>
    </section>
}

export default FormNuevoVideo;
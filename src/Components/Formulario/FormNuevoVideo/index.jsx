import { useContext } from "react";
import { dataContext } from "../../../hooks/Context";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { v4 as uuid } from 'uuid';
import Button from "../../Button";
import InputDate from "../Inputs"
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";
import './FormNuevoVideo.css'

const FormNuevoVideo = () => {

    const { updateVideos } = useContext(dataContext);

    const { inputs, handleInput } = useForm({
        titulo: "",
        linkImgVideo: '',
        videoUrl: '',
        categoria: "",
        descripcion: "",
        codigoSeguridad: ""
    })
    const { titulo, linkImgVideo, videoUrl, descripcion, codigoSeguridad, categoria } = inputs;

    return <section className="contenedor-formulario">
        <h1 className="formulario-titulo">Nuevo Video</h1>
        <form className="form"
            onSubmit={(e) => {
                e.preventDefault();
                const lastVideo = { ...inputs, id: uuid() }
                updateVideos(lastVideo);
            }}
        >
            <InputDate label="Titulo" name="titulo" value={titulo} handleInput={handleInput} />
            <InputDate label="Link del video" name="videoUrl" value={videoUrl} handleInput={handleInput} />
            <InputDate label="Link imagen del video" name="linkImgVideo" value={linkImgVideo} handleInput={handleInput} />
            <ListaCategorias name="categoria" value={categoria} handleInput={handleInput} />
            <TextArea placeholder="Descripcion" name="descripcion" value={descripcion} handleInput={handleInput} />
            <InputDate label="Codigo de seguridad" name="codigoSeguridad" value={codigoSeguridad} handleInput={handleInput} />
            <div>
                <Button type='submit' noBorder>Guardar</Button>
                <Button color='#9E9E9E' noBorder>Limpiar</Button>
                <Link to="/../formNuevaCategoria">
                    <Button noBorder>Nueva categoria</Button>
                </Link>
            </div>
        </form>
    </section>
}

export default FormNuevoVideo;
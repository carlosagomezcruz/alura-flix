import { useContext } from "react";
import { dataContext } from "../../../hooks/Context";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { v4 as uuid } from 'uuid';
import InputDate from "../Inputs"
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";
import './FormNuevoVideo.css'
import { useValidations } from "../../../hooks/useValidations";
import { Button, ContenedorButton } from '../../UI';

const FormNuevoVideo = () => {

    const { createVideos } = useContext(dataContext);

    const { inputs, handleInput } = useForm({
        titulo: "",
        linkImgVideo: '',
        videoUrl: '',
        categoria: "",
        descripcion: "",
        codigoSeguridad: ""
    })

    const { validation, handleValidation } = useValidations({
        titulo: null,
        videoUrl: null,
        linkImgVideo: null,
        categoria: null,
        descripcion: null,
        codigoSeguridad: null,
    })

    const { titulo, linkImgVideo, videoUrl, descripcion, codigoSeguridad, categoria } = inputs;

    return <section className="contenedor-formulario">
        <h1 className="formulario-titulo">Nuevo Video</h1>
        <form className="form"
            onSubmit={(e) => {
                e.preventDefault();
                const lastVideo = { ...inputs, id: uuid() }
                createVideos(lastVideo);
            }}
        >
            <InputDate
                label="Titulo"
                name="titulo"
                value={titulo}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.titulo}
            />
            <InputDate
                label="Link del video"
                name="videoUrl"
                value={videoUrl}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.videoUrl}
            />
            <InputDate
                label="Link imagen del video"
                name="linkImgVideo"
                value={linkImgVideo}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.linkImgVideo}
            />
            <ListaCategorias
                name="categoria"
                value={categoria}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.categoria}
            />
            <TextArea
                placeholder="Descripcion"
                name="descripcion"
                value={descripcion}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.descripcion}
            />
            <InputDate
                label="Codigo de seguridad"
                name="codigoSeguridad"
                value={codigoSeguridad}
                handleInput={handleInput}
                handleValidation={handleValidation}
                valid={validation.codigoSeguridad}
            />
            <ContenedorButton>
                <Button
                    type='submit'
                    noBorder>
                    Guardar
                </Button>
                <Button
                    color='#9E9E9E'
                    noBorder>
                    Limpiar
                </Button>
                <Link to="/../formNuevaCategoria">
                    <Button noBorder>Nueva categoria</Button>
                </Link>
            </ContenedorButton>
        </form>
    </section>
}

export default FormNuevoVideo;
import { useContext } from "react";
import { dataContext } from "../../../hooks/Context";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { v4 as uuid } from 'uuid';
import InputDate from "../Inputs"
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";
import './FormNuevoVideo.css'
import { useValidations } from "../../../hooks/useValidations";
import { Button, ContenedorButton } from '../../UI';

const FormNuevoVideo = () => {

    const navigate = useNavigate();

    const { createVideos } = useContext(dataContext);

    const { inputs, handleInput } = useForm({
        titulo: "",
        linkImgVideo: '',
        videoUrl: '',
        categoria: "",
        descripcion: "",
        codigoSeguridad: ""
    })

    const { validation, handleValidation, allValid } = useValidations({
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
                if (allValid()) {
                    const lastVideo = { ...inputs, id: uuid() }
                    createVideos(lastVideo);
                } else { 
                    console.log("No se envió")
                }
                
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
                    style={{ opacity: `${allValid() ? "1" : "0.5"}` }}
                >
                    Guardar
                </Button>
                <Button>
                    Limpiar
                </Button>
                <Button
                    onClick={() => { navigate("/../") }}
                >
                    Cancelar
                </Button>
                <Link to="/../formNuevaCategoria">
                    <Button noBorder>Nueva categoria</Button>
                </Link>
            </ContenedorButton>
        </form>
    </section>
}

export default FormNuevoVideo;
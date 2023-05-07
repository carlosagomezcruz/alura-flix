import { useForm } from '../../../hooks/useForm';
import InputDate from '../Inputs';
import TablaCategorias from '../TablaCategorias';
import TextArea from '../TextArea';
import './FormNuevaCategoria.css'


const FormNuevaCategoria = () => {

    const { inputs, handleInput } = useForm({
        nombreCategoria: "",
        descripcion: "",
        color: "",
        codigoSeguridad: ""
    })

    const { nombreCategoria, descripcion, color, codigoSeguridad } = inputs;
    
    console.log(inputs)

    return <section className="contenedor-formulario">
        <div>
            <h1 className="formulario-titulo">Nueva Categoria</h1>
            <form className="form">
                <InputDate label="Nombre categoría" name="nombreCategoria" value={nombreCategoria} handleInput={handleInput} />
                <TextArea placeholder="Descripcion" name="descripcion" value={descripcion} handleInput={handleInput} />
                <InputDate label="Color" type='color' name="color" value={color} handleInput={handleInput} />
                <InputDate label="Codigo de seguridad" name="codigoSeguridad" value={codigoSeguridad} handleInput={handleInput} />
            </form>
        </div>
        <TablaCategorias />
    </section>
}

export default FormNuevaCategoria;
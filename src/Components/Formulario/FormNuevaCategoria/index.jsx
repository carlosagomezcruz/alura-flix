import { useContext } from 'react';
import { dataContext } from '../../../hooks/Context';
import { v4 as uuid } from 'uuid';
import { useForm } from '../../../hooks/useForm';
import InputDate from '../Inputs';
import TablaCategorias from '../TablaCategorias';
import TextArea from '../TextArea';
import './FormNuevaCategoria.css'
import Button from '../../Button';



const FormNuevaCategoria = () => {

    const { categorias, updateCategorias } = useContext(dataContext);

    const { inputs, handleInput } = useForm({
        nombreCategoria: "",
        descripcion: "",
        color: "",
        codigoSeguridad: ""
    })

    const { nombreCategoria, descripcion, color, codigoSeguridad } = inputs;


    return <section className="categoria__contenedor-formulario">
        <div>
            <h1 className="categoria__formulario-titulo">Nueva Categoria</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const lastCategoria = { ...inputs, id: uuid() }
                    updateCategorias(lastCategoria);
                }}
                className="categoria__form">

                <InputDate label="Nombre categoría" name="nombreCategoria" value={nombreCategoria} handleInput={handleInput} />
                <TextArea placeholder="Descripcion" name="descripcion" value={descripcion} handleInput={handleInput} />
                <InputDate label="Color" type='color' name="color" value={color} handleInput={handleInput} />
                <InputDate label="Codigo de seguridad" name="codigoSeguridad" value={codigoSeguridad} handleInput={handleInput} />
                <div>
                    <Button type='submit' noBorder>Guardar</Button>
                    <Button color='#9E9E9E' noBorder>Limpiar</Button>
                </div>
            </form>
        </div>
        <TablaCategorias data={categorias} />
    </section>
}

export default FormNuevaCategoria;
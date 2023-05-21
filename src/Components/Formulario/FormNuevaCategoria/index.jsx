import { useContext } from 'react';
import { dataContext } from '../../../hooks/Context';
import { useValidations } from '../../../hooks/useValidations';
import { useForm } from '../../../hooks/useForm';
import { v4 as uuid } from 'uuid';
import InputDate from '../Inputs';
import TablaCategorias from '../TablaCategorias';
import TextArea from '../TextArea';
import './FormNuevaCategoria.css'
import { Button } from '../../UI';



const FormNuevaCategoria = () => {

    const { categorias, updateCategorias } = useContext(dataContext);

    const { inputs, handleInput } = useForm({
        nombreCategoria: "",
        descripcion: "",
        color: "",
        codigoSeguridad: ""
    })

    const { validation, handleValidation } = useValidations({
        nombreCategoria: null,
        descripcion: null,
        color: null,
        codigoSeguridad: null
    })


    const { nombreCategoria, descripcion, color, codigoSeguridad } = inputs;


    return <section className="categoria__contenedor-formulario">
        <h1 className="categoria__formulario-titulo">Nueva Categoria</h1>
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const lastCategoria = { ...inputs, id: uuid() }
                    updateCategorias(lastCategoria);
                }}
                className="categoria__form">

                <InputDate
                    label="Nombre categoría"
                    name="nombreCategoria"
                    value={nombreCategoria}
                    handleInput={handleInput}
                    handleValidation={handleValidation}
                    valid={validation.nombreCategoria}
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
                    label="Color"
                    type='color'
                    name="color"
                    value={color}
                    handleInput={handleInput}
                    handleValidation={handleValidation}
                    valid={validation.color}
                />
                <InputDate
                    label="Codigo de seguridad"
                    name="codigoSeguridad"
                    value={codigoSeguridad}
                    handleInput={handleInput}
                    handleValidation={handleValidation}
                    valid={validation.codigoSeguridad}
                />
                <div>
                    <Button type='submit'>Guardar</Button>
                    <Button>Limpiar</Button>
                    <Button>Cancelar</Button>
                </div>
            </form>
            
        </div>
        <TablaCategorias data={categorias}/>


    </section>
}

export default FormNuevaCategoria;
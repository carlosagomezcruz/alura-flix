import { useContext, useState } from 'react';

import { Button } from '../../UI';
import InputDate from '../Inputs';
import TextArea from '../TextArea';

import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../../../hooks/Context';
import { useValidations } from '../../../hooks/useValidations';
import { useForm } from '../../../hooks/useForm';
import './FormEditarCategoria.css'


const ModalEditarCategoria = () => {

    const navigate = useNavigate()
    const param = useParams()

    const { categorias, updateCategorias } = useContext(dataContext);

    const categoria = categorias.find((categoria => categoria.id === param.id))

    const { inputs, handleInput } = useForm({
        nombreCategoria: categoria.nombreCategoria,
        descripcion: categoria.descripcion,
        color: categoria.color,
        codigoSeguridad: categoria.codigoSeguridad
    });

    const { validation, handleValidation, allValid } = useValidations({
        nombreCategoria: null,
        descripcion: null,
        color: null,
        codigoSeguridad: null
    })

    const { nombreCategoria, descripcion, color, codigoSeguridad } = inputs;
    return (
        <section className="categoria__contenedor-formulario">
            <h1 className="categoria__formulario-titulo">Editar Categoria</h1>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (allValid()) {
                            const lastCategoria = { ...inputs, id: categoria.id }
                            updateCategorias(lastCategoria);
                        } else { 
                            console.log("No se envió")
                        }
                        
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
                        <Button
                            type='submit'
                            style={{ opacity: `${allValid() ? "1" : "0.5"}` }}
                        >Guardar</Button>
                        <Button>Limpiar</Button>
                        <Button
                            onClick={() => { navigate("/../formNuevaCategoria") }}
                        >
                            Cancelar</Button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default ModalEditarCategoria;

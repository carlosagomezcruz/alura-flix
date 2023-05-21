import { useContext } from 'react';
import './lista-categorias.css';
import { dataContext } from '../../../hooks/Context';
import { InputContainer } from '../../UI';

const ListaCategorias = ({ value, name, handleInput, handleValidation, valid }) => {

    const { categorias } = useContext(dataContext)

    return <InputContainer valid={valid} >
        <select
            name={name}
            value={value}
            onChange={(e) => handleInput(e.target)}
            onBlur={(e) => { handleValidation(e.target) }}
            className="lista-categoria">
            <option value="" disabled defaultValue="" hidden>Escoja una categoria</option>
            {
                categorias.map((categoria, i) => {
                    return <option key={i} value={categoria.nombreCategoria} >{categoria.nombreCategoria}</option>
                })
            }
        </select>
    </InputContainer>
}

export default ListaCategorias;
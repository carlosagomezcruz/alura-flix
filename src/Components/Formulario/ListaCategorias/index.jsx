import { useContext } from 'react';
import './lista-categorias.css';
import { dataContext } from '../../../hooks/Context';

const ListaCategorias = ({ value, name, handleInput }) => {

    const { categorias } = useContext(dataContext)

    return <select name={name} value={value} onChange={(e) => handleInput(e.target)} className="lista-categoria">
        <option value="" disabled defaultValue="" hidden>Escoja una categoria</option>
        {
            categorias.map((categoria, i) => {
                return <option key={i} value={categoria.nombreCategoria} >{categoria.nombreCategoria}</option>
            })
        }
    </select>
}

export default ListaCategorias;
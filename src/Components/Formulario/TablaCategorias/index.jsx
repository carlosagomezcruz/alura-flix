import React, { useContext } from 'react';
import { dataContext } from '../../../hooks/Context';
import './tabla-categorias.css';
import { useNavigate } from 'react-router-dom';


const TablaCategorias = ({ data }) => {
    const navigate = useNavigate();

    const { deleteCategorias } = useContext(dataContext);

    return (
        // <div className="tablaCategorias__contenedor">
        <table className='table'>
            <thead className='thead'>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>

            </thead>
            <tbody>
                {data.map((categoria, i) => {
                    const { nombreCategoria, descripcion, id, remover } = categoria;

                    return <tr key={i}>
                        <td className='td'>{nombreCategoria}</td>
                        <td className='td'>{descripcion}</td>
                        <td className='td'><button id={id} onClick={(e) => { navigate(`/../editarCategoria/${e.target.id}`) }} >Editar</button></td>
                        <td className='td'><button id={id} onClick={(e) => { deleteCategorias(e.target.id) }}>Eliminar</button></td>
                    </tr>
                }
                )}
            </tbody>

        </table>
        // </div>
    )
}

export default TablaCategorias;

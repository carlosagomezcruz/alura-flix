import React from 'react';
import './tabla-categorias.css';
import { useCrud } from '../../../hooks/useCrud';


const TablaCategorias = ({ data }) => {

    useCrud(data)

    
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
                        <td className='td'><button >Editar</button></td>
                        <td className='td'><button >Eliminar</button></td>
                    </tr>
                }
                )}
            </tbody>

        </table>
        // </div>
    )
    }

    export default TablaCategorias;

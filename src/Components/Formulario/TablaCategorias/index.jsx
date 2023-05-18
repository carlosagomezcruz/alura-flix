import React from 'react';
import './tabla-categorias.css';


const TablaCategorias = ({data}) => {
    
    return (
        <div className="tablaCategorias__contenedor">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((categoria, i) => {
                        const { nombreCategoria, descripcion, editar, remover } = categoria;

                        return <tr key={i}>
                            <td>{nombreCategoria}</td>
                            <td>{descripcion}</td>
                            <td>Editar</td>
                            <td>Remover</td>
                        </tr>
                    }
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default TablaCategorias;

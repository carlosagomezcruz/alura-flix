import React from 'react';
import './Categorias.css';

const ContenedorCategoria = ({ nombreCategoria, descripcion, color, children }) => {
    const style = {backgroundColor: `${color}`}
    return (
        <div>
            <div className="categorias__contenedor-descripcion">
                <h2 className="categorias__descripcion-h2" style={style} >{nombreCategoria}</h2>
                <span className="categorias__descripcion-span" >{descripcion}</span>
            </div>
            {children}
        </div>
    )
}

export default ContenedorCategoria;

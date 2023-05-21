import React, { useContext } from 'react'
import { dataContext } from '../../hooks/Context';
import ContenedorCategoria from './ContenedorCategoria';
import SliderComponent from '../Carrousel/Slider';



const Categorias = () => {

    const { videos, categorias } = useContext(dataContext);

    return (
        <>

            {

                categorias.map((categoria) => {
                    const { nombreCategoria, descripcion, color, id } = categoria;
                    const video = videos.filter(v => v.categoria === nombreCategoria);

                    return <ContenedorCategoria key={id} nombreCategoria={nombreCategoria} descripcion={descripcion} color={color}>
                        <SliderComponent videos={video} />
                    </ContenedorCategoria>

                })

            }
        </>
    )
}

export default Categorias;

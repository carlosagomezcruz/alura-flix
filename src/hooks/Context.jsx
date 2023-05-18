import React, { createContext, useEffect, useState } from "react";
import { allVideos, categories } from "../datos/datos-iniciales";

export const dataContext = createContext();

export const HandleData = ({ children }) => {

    const v = localStorage.getItem("allVideos")
    const c = localStorage.getItem("categorias")

    if (v === null || c === null) {
        localStorage.setItem("allVideos", JSON.stringify(allVideos));
        localStorage.setItem("categorias", JSON.stringify(categories));
    }

    const [videos, setVideos] = useState(JSON.parse(localStorage.getItem("allVideos")));
    const [categorias, setCategorias] = useState(JSON.parse(localStorage.getItem("categorias")));

    useEffect(() => {

        localStorage.setItem("allVideos", JSON.stringify(videos));
        localStorage.setItem("categorias", JSON.stringify(categorias));


    }, [videos, categorias]);


    const value = {
        videos,
        categorias,
        updateVideos: (newVideo) => {
            setVideos([...videos, newVideo])

        },
        updateCategorias: (newCategoria) => {
            setCategorias([...categorias, newCategoria])

        }

    }

    return <dataContext.Provider value={value}>
        {children}
    </dataContext.Provider>

}
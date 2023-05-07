import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Banner from "./Components/Banner";
import Carrusel from "./Components/Carrousel/Carrusel";
import { allVideos } from './datos/datos-iniciales.js';
import FormNuevoVideo from "./Components/Formulario/FormNuevoVideo";
import FormNuevaCategoria from "./Components/Formulario/FormNuevaCategoria";



function App() {

  const [videos, actualizarVideos] = useState(allVideos);

  return (
    <DefaultPage>
      {/* <Banner />
      <Carrusel datosIniciales={videos} /> */}
      {/* <FormNuevoVideo /> */}
      <FormNuevaCategoria />
    </DefaultPage>
  );
}

export default App;

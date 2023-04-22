import { useState } from "react";
import DefaultPage from "./Components/DefaultPage";
import Banner from "./Components/Banner";
import Carrusel from "./Components/Carrousel/Carrusel";
import { datosIniciales } from './datos/datos-iniciales.js';
import FormNuevoVideo from "./Components/Formulario/FormNuevoVideo";



function App() {

  const [videos, actualizarVideos] = useState(datosIniciales);

  return (
    <DefaultPage>
      <Banner />
      <Carrusel datosIniciales={videos} />
      {/* <FormNuevoVideo /> */}
    </DefaultPage>
  );
}

export default App;

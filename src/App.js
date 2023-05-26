import DefaultPage from "./Components/DefaultPage";
import FormNuevoVideo from "./Components/Formulario/FormNuevoVideo";
import FormNuevaCategoria from "./Components/Formulario/FormNuevaCategoria";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Inicio/Home";
import ModalEditarCategoria from "./Components/Formulario/FormEditarCategoria";


function App() {


  return (
    <DefaultPage>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="formNuevoVideo" element={<FormNuevoVideo />} />

        <Route path="formNuevaCategoria" element={<FormNuevaCategoria />} />

        <Route path="editarCategoria/:id" element={<ModalEditarCategoria />} />

      </Routes>
    </DefaultPage >

  );
}

export default App;

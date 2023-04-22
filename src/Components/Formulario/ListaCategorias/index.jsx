import './lista-categorias.css';

const ListaCategorias = (props) => { 
    return <select className="lista-categoria">
        <option>Escoja una categoria</option>  
        <option>BackEnd</option>
        <option>Innovacion y Gestion</option>
    </select>
}

export default ListaCategorias;
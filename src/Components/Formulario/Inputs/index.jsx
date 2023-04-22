import './inputs.css';

const InputDate = ({ label }) => {

    return <div className='input-contenedor'>
        <label className='label'>{label}</label>
        <input className='input' type="text" />
    </div>
}

export default InputDate;
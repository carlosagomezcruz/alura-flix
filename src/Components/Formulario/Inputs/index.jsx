import './inputs.css';

const InputDate = ({ label, type = "text", value, name, handleInput }) => {

    return <div className='input-contenedor'>
        <label className='label'>{label}</label>
        <input className='input' type={type} name={name} value={value} onChange={(e)=> handleInput(e.target)}/>
    </div>
}

export default InputDate;
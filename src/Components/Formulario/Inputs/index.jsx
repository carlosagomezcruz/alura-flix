import './inputs.css';
import { InputContainer } from '../../UI';

const InputDate = ({ label, type = "text", value, name, handleInput, handleValidation, valid }) => {
    return <InputContainer valid={valid} >
        <label className='label'>{label}</label>
        <input
            className='input'
            type={type}
            name={name}
            value={value}
            onBlur={(e) => { handleValidation(e.target) }}
            onChange={(e) => handleInput(e.target)}
            data-type="input"
        />
        {valid !== null && <span>{valid.message}</span>}
    </InputContainer>
}

export default InputDate;
import { InputContainer } from '../../UI';
import './textarea.css';

const TextArea = ({ placeholder, value, name, handleInput, handleValidation, valid }) => {
    return <InputContainer valid={valid} ><textarea
        className='textarea'
        placeholder={placeholder}
        rows={6}
        name={name}
        value={value}
        onBlur={(e) => { handleValidation(e.target) }}
        onChange={(e) => handleInput(e.target)}
    ></textarea>
        {valid !== null && <span>{valid.message}</span>}
    </InputContainer>
}

export default TextArea;
import './textarea.css';

const TextArea = ({ placeholder, value, name, handleInput }) => {
    return <textarea className='textarea' placeholder={placeholder} rows={6} name={name} value={value} onChange={(e) => handleInput(e.target)} ></textarea>
}

export default TextArea;
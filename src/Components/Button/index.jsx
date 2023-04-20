import './Button.css';

const Button = (props) => {
    const {color} = props

    return <button className="button" style={{backgroundColor: color}}>
        {props.children}
    </button>
}

export default Button;
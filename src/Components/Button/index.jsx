
const Button = ({ color = null, noBorder = null, children, type = null}) => {

    let style = { backgroundColor: color }
    
    if (noBorder) {
        style = {...style, border: 'none'} 
    }

    return <button type={type} className="button" style={style}>
        {children}
    </button>
}

export default Button;
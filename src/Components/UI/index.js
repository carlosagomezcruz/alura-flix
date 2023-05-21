import styled from "styled-components";

export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #53585D;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 1% 2%;
    border-radius: 5px;
    font-family: 'Roboto';
    border-bottom: 3px solid;
    border-color: ${(props) => props.valid !== null ? (props.valid.valid === true ? "blue" : "red") : "#53585D"} ;
    

`

export const ContenedorButton = styled.div`
    padding: 2%;

`

export const Button = styled.button`

    font-family: 'Roboto';
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #2A7AE4;
    border-radius: 4px;
    padding: 2% 5%;
    border-color: #FFFFFF;
    margin: 0.5%;

    :hover {
        background-color: #2A7AE480;
    }
 

`
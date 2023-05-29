import { useState } from "react";

export const useValidations = (inputs) => {

    const [validation, setValidation] = useState(inputs);


    const handleValidation = (target) => {
        const { name, value } = target;
        (value.length > 3) ? setValidation({ ...validation, [name]: { valid: true, message: "" } }) : setValidation({ ...validation, [name]: { valid: false, message: "Escriba mas de 3 caracteres" } });

    }

    const allValid = () => {
        let txt = [];
        for (let x in validation) {
            txt.push(validation[x]?.valid);
        }
        const res = txt.every(value => value !== false && value !== undefined)
        return res
    }
    return {
        validation,
        handleValidation,
        allValid
    }
}



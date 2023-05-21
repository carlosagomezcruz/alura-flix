import { useState } from "react";

export const useValidations = (inputs) => {

    const [validation, setValidation] = useState(inputs);


    const handleValidation = (target) => {
        const { name, value } = target;
        (value.length > 3) ? setValidation({ ...validation, [name]: { valid: true, message: "" } }) : setValidation({ ...validation, [name]: { valid: false, message: "Escriba mas de 3 caracteres" } });

    }

    return {
        validation,
        handleValidation
    }
}



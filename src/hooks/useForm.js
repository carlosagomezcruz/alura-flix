import { useState } from "react"


export const useForm = (data) => {

    const [inputs, setInputs] = useState(data);


    const handleInput = (target) => {
        const { name, value } = target;

        setInputs({ ...inputs, [name]: value })

    }

    return {
        inputs,
        handleInput
    }
}

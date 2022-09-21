import { useState } from "react";

export function ReserveFormState() {
    const [disabled,setDisabled] = useState(true);
    const [nameInput,setNameInput] = useState('');
    const [phoneInput,setPhoneInput] = useState('+7 ');
    const [carInput,setCarInput] = useState('');

    return { disabled,setDisabled,nameInput,setNameInput,phoneInput,setPhoneInput,carInput,setCarInput };
}
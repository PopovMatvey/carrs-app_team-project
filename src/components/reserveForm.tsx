import React,{ useEffect,useState } from 'react';
import '../assets/css/reserveForm.css';
import rollsImg from '../assets/images/rolls.png';
import { useMailReserveForm } from '../hook/mailReserveForm';
import { ReserveFormState } from '../hook/reserveFormStates';


export function ReserveForm() {
    const lengthPhoneNumber = 11;
    const minLengthPhoneNumber = 2;
    const defaultDisableSubmitButton = false;
    const defaultNameInputValue = '';
    const defaulPhoneInputValue = '+7';
    const defaultCarInputValue = '';
    const clearString = '';
    const sucsessMailMessage = 'Всё отправлено успешно';
    const grayBorderStyle = '1px solid #f00';
    const redBorderStyle = '1px solid #999';

    const [imgRolls] = useState(<img src={rollsImg} alt="" />);
    const { featchMailreserveForm } = useMailReserveForm();

    const {
        disabled,setDisabled,
        nameInput,setNameInput,
        phoneInput,setPhoneInput,
        carInput,setCarInput,
    } = ReserveFormState();

    const resetFields = () => {
        setDisabled(defaultDisableSubmitButton);
        setNameInput(defaultNameInputValue);
        setPhoneInput(defaulPhoneInputValue);
        setCarInput(defaultCarInputValue);
    }

    const checkDisableSubmit = (element: HTMLInputElement) => {
        if ((nameInput !== clearString)
            && (phoneInput.length >= lengthPhoneNumber)
            && (carInput !== clearString)
        ) {
            setDisabled(defaultDisableSubmitButton);
            eraseInputField(element);
        }
    }

    const getLastInputChart = (string: string) => {
        return string.split(clearString)[string.length - 1]
    }

    const disableSubmit = (string: string,element: HTMLInputElement) => {
        if (string === clearString) {
            setDisabled(true);
            markInputField(element);
        }
    }

    const disablePhoneInput = (string: string) => {
        if (string.length - 1 < lengthPhoneNumber) {
            setDisabled(true);
        }
    }

    const markInputField = (element: HTMLInputElement) => {
        element.style.border = grayBorderStyle;
    }

    const eraseInputField = (element: HTMLInputElement) => {
        element.style.border = redBorderStyle;
    }

    const checkOnVoid = (element: HTMLInputElement) => {
        if (element.value !== clearString) {
            eraseInputField(element);
        }
    }

    const hendlerNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
        checkOnVoid(event.target);
    }

    const checkOnNumber = (string: string) => {
        const arrayNumbers: Array<string> = ["0","1","2",
            "3","4","5","6","7","8","9"];

        for (let i = 0; i < arrayNumbers.length; i++) {
            if (arrayNumbers[i] === string) {
                return true;
            }
        }

        return false;
    }

    const hendlerPhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
        disablePhoneInput(event.target.value);
        checkOnVoid(event.target);

        if (!checkOnNumber(getLastInputChart(event.target.value)) ||
            event.target.value.length - 1 > lengthPhoneNumber ||
            event.target.value.length < minLengthPhoneNumber) {

            return;
        }

        if (checkOnNumber(getLastInputChart(event.target.value))) {
            setPhoneInput(event.target.value);
            eraseInputField(event.target);
        }
    }

    const hendlerCarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarInput(event.target.value);
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
        checkOnVoid(event.target);
    }

    const getPostdObject = () => {
        return {
            'client': nameInput,
            'phone_number': phoneInput,
            'car': carInput,
        }
    }

    const heandlerSubmitReserveForm = () => {
        alert(sucsessMailMessage);
        resetFields();
        featchMailreserveForm(
            getPostdObject()
        );
    }

    useEffect(() => {
        setCarInput(carInput);
    },[carInput])

    return (
        <div className='reserve-form' id='ReserveForm'>
            <div className="reserve-form_text">
                <h2>Узнать цену и забронировать</h2>
                <span>
                    Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования
                </span>
            </div>
            <div className="reserve-form_container">
                <form action="" id='reserveForm' method='post' onSubmit={event => {
                    event.preventDefault();
                    heandlerSubmitReserveForm();
                }}>
                    <input type="text" required placeholder='Ваше имя' id='nameInput' value={nameInput} onChange={hendlerNameInput} />
                    <input type='phone' required placeholder='Ваш телефон' id='phoneInput' value={phoneInput} onChange={hendlerPhoneInput} />
                    <input type="text" required placeholder='Автомобиль, который Вас интересует' id='carInput' value={carInput} onChange={hendlerCarInput} />
                    <input type='submit' id='submitButton' value='Узнать цену' disabled={disabled} />
                </form>
            </div>
            <div className="reserve-form_img">
                {imgRolls}
            </div>
        </div>
    );
}

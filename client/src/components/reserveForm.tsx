import React,{ FormEvent,useContext,useEffect,useState } from 'react';
import rollsImg from '../assets/images/rolls.png';
import '../assets/css/reserveForm.css';
import { ReserveFormState } from '../hook/reserveFormStates';
import { useMailReserveForm } from '../hook/mailReserveForm';
import { objectPost } from '../data/objectPost';
import { IReserveFormProps } from '../types/IReserveFormProps';


export function ReserveForm({ arrayCars }: IReserveFormProps) {
    const lengthPhoneNumber = 11;
    const [postObject,setPostObject] = useState(objectPost);
    const [imgRolls,setimgRolls] = useState(<img src={rollsImg} alt="" />);
    const [notification,setNotification] = useState(<span className='notification'></span>);
    const { featchMailreserveForm } = useMailReserveForm();

    const {
        disabled,setDisabled,
        nameInput,setNameInput,
        phoneInput,setPhoneInput,
        carInput,setCarInput,
    } = ReserveFormState();

    const resetFields = () => {
        setDisabled(false);
        setNameInput('');
        setPhoneInput('+7');
        setCarInput('');
    }

    const checkDisableSubmit = (element: HTMLInputElement) => {
        if ((nameInput !== '')
            && (phoneInput.length >= lengthPhoneNumber)
            && (carInput !== '')
        ) {
            setDisabled(false);
            eraseInputField(element);
        }
    }

    const getLastInputChart = (string: string) => {
        return string.split('')[string.length - 1]
    }
    const disableSubmit = (string: string,element: HTMLInputElement) => {
        if (string === '') {
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
        element.style.border = '1px solid #f00'
    }

    const eraseInputField = (element: HTMLInputElement) => {
        element.style.border = '1px solid #999'
    }

    const checkOnVoid = (element: HTMLInputElement) => {
        if (element.value !== '') {
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
            event.target.value.length < 2) {

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

    useEffect(() => {
        setCarInput(carInput);
    },[carInput])

    const getPostdObject = () => {
        return {
            'client': nameInput,
            'phone_number': phoneInput,
            'car': carInput,
        }
    }

    const heandlerSubmitReserveForm = (event: FormEvent<HTMLFormElement>) => {
        alert('Всё отправлено успешно');
        resetFields();
        featchMailreserveForm(
            getPostdObject()
        );
    }


    return (
        <div className='reserve-form' id='ReserveForm'>
            <div className="reserve-form_text">
                <h2>Узнать цену и забронировать</h2>
                <span>Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования</span>
            </div>
            <div className="reserve-form_container">
                <form action="" id='reserveForm' method='post' onSubmit={event => {
                    event.preventDefault();
                    heandlerSubmitReserveForm(event);
                }}>
                    <input type="text" required placeholder='Ваше имя' id='nameInput' value={nameInput} onChange={hendlerNameInput} />
                    <input type='phone' required placeholder='Ваш телефон' id='phoneInput' value={phoneInput} onChange={hendlerPhoneInput} />
                    {notification}
                    <input type="text" required placeholder='Автомобиль, который Вас интересует' id='carInput' value={carInput} onChange={hendlerCarInput} />
                    {/* <select onChange={hendlerCarInput}>
                        {arrayCars.map(carItem => <option key={carItem.car_name} value={carItem.car_name}>{carItem.car_name}</option>)}
                    </select> */}
                    <input type='submit' id='submitButton' value='Узнать цену' disabled={disabled} />
                </form>
            </div>
            <div className="reserve-form_img">
                {imgRolls}
            </div>
        </div>
    );
}

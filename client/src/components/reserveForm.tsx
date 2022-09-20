import React,{ useState } from 'react';
import rollsImg from '../assets/images/rolls.png';
import '../assets/css/reserveForm.css';

export function ReserveForm() {
    const [disabled,setDisabled] = useState(true);
    const [nameInput,setNameInput] = useState('');
    const [phoneInput,setPhoneInput] = useState('');
    const [carInput,setCarInput] = useState('');

    const checkDisableSubmit = (element: HTMLInputElement) => {
        if ((nameInput !== '') && (phoneInput !== '') && (carInput !== '')) {
            setDisabled(false);
            eraseInputField(element);
        }
    }

    const disableSubmit = (string: string,element: HTMLInputElement) => {
        if (string === '') {
            setDisabled(true);
            markInputField(element);
        }
    }

    const markInputField = (element: HTMLInputElement) => {
        element.style.border = '1px solid #f00'
    }

    const eraseInputField = (element: HTMLInputElement) => {
        element.style.border = '1px solid #999'
    }

    const hendlerNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
    }

    const hendlerPhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneInput(event.target.value);
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
    }

    const hendlerCarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarInput(event.target.value);
        checkDisableSubmit(event.target);
        disableSubmit(event.target.value,event.target);
    }

    return (
        <div className='reserve-form' id='ReserveForm'>
            <div className="reserve-form_text">
                <h2>Узнать цену и забронировать</h2>
                <span>Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования</span>
            </div>
            <div className="reserve-form_container">
                <form action="" id='reserveForm' method='post' onSubmit={e => { e.preventDefault(); }}>
                    <input type="text" placeholder='Ваше имя' id='nameInput' value={nameInput} onChange={hendlerNameInput} />
                    <input type="text" placeholder='Ваш телефон' id='phoneInput' value={phoneInput} onChange={hendlerPhoneInput} />
                    <input type="text" placeholder='Автомобиль, который Вас интересует' id='carInput' value={carInput} onChange={hendlerCarInput} />
                    <input type='submit' id='submitButton' value='Узнать цену' disabled={disabled} />
                </form>
            </div>
            <div className="reserve-form_img">
                <img src={rollsImg} alt="Изображение Роллса" />
            </div>
        </div>
    );
}

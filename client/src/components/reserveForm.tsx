import React,{ useEffect } from 'react';
import rollsImg from '../assets/images/rolls.png';
import '../assets/css/reserveForm.css';
import { ReserveFormState } from '../hook/reserveFormStates';
import axios from 'axios'

export function ReserveForm() {
    const {
        disabled,setDisabled,
        nameInput,setNameInput,
        phoneInput,setPhoneInput,
        carInput,setCarInput,
    } = ReserveFormState();

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

    useEffect(() => {
        // $('#phoneInput').mask("+7(999) 999-9999");
        // console.log($('#carInput').mask("+7(999) 999-9999"));
        // $('#carInput').mask("0000 0000 0000 0000");
    })

async function FeatchCarData(object:Object){
    const request = await axios.post('http://localhost:8000/mailing/', object);
}

const submitFormReserve = () => {
    FeatchCarData({
     'client' : nameInput,
     'phone_number' : phoneInput,
     'car' : carInput
     })
    console.log(nameInput)
    alert('Hi!')
    setDisabled(false)
    setNameInput('')
    setPhoneInput('+7')
    setCarInput('')
//     action="localhost:8000/mailing/"
}

    return (
        <div className='reserve-form' id='ReserveForm'>
            <div className="reserve-form_text">
                <h2>Узнать цену и забронировать</h2>
                <span>Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования</span>
            </div>
            <div className="reserve-form_container">
                <form id='reserveForm' method='post' onSubmit={e => { e.preventDefault(); submitFormReserve()}}>
                    <input type="text" required placeholder='Ваше имя' id='nameInput' value={nameInput} onChange={hendlerNameInput} />
                    <input type='phone'required placeholder='Ваш телефон' id='phoneInput' value={phoneInput} onChange={hendlerPhoneInput} />
                    <input type="text" required placeholder='Автомобиль, который Вас интересует' id='carInput' value={carInput} onChange={hendlerCarInput} />
                    <input type='submit' id='submitButton' value='Узнать цену' disabled={disabled} />
                </form>
            </div>
            <div className="reserve-form_img">
                <img src={rollsImg} alt="Изображение Роллса" />
            </div>
        </div>
    );
}

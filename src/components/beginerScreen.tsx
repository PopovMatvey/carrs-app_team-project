import React from 'react';
import '../assets/css/beginnerScreen.css';

export function BeginnerScreen() {
    return (
        <div className="beginner-screen" id='mainScreen'>
            <div className="beginner-screen_information">
                <h1>Аренда премиальных автомобилей</h1>
                <div className="beginner-screen_information-text">
                    <span>
                        В нашем клубе имеется солидная коллекция спортивных автомобилей — от достаточно распространенных серийных машин до настоящего гоночного эксклюзива. Воспользуйтесь уникальной возможностью побывать за рулем настоящей легенды и узнать, на что она способна за пределами гоночной трассы!
                    </span>
                </div>
                <div className="beginner-screen_information_button-container">
                    <a href="#CarsList">Просмотреть автомобили</a>
                </div>
            </div>
        </div>
    );
}
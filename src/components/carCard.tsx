import React from 'react';
import '../assets/css/carCard.css';
import { ICarCardProps } from '../types/ICarCardProps';
import groupImg from '../assets/images/group.png';
import transmissionImg from '../assets/images/transmission.png';
import placesImg from '../assets/images/places.png';
import { hostUrl } from '../data/urlsData';

export function CarCard({ carItem }: ICarCardProps) {
    const preUrlImageCar = "";//hostUrl;

    return (
        <div className="car-card-item">
            <img src={preUrlImageCar + carItem.image} alt="Изображение автомобиля" />
            <h3>{carItem.car_name}</h3>
            <div className="car-card-item_stats">
                <div>
                    <img src={groupImg} alt="Иконка коробка автомобиля" />
                    <h6>Коробка</h6>
                    <span>{carItem.gear}</span>
                </div>
                <div>
                    <img src={transmissionImg} alt="Иконка двигатель автомобиля" />
                    <h6>Двигатель</h6>
                    <span>{carItem.engine} л.с.</span>
                </div>
                <div>
                    <img src={placesImg} alt="Иконка места автомобиля" />
                    <h6>Места</h6>
                    <span>{carItem.places}</span>
                </div>
            </div>
            <a href="#ReserveForm">
                Забронировать
            </a>
        </div>
    );
}



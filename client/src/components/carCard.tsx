import groupImg from '../assets/images/group.png';
import transmissionImg from '../assets/images/transmission.png';
import placesImg from '../assets/images/places.png';
import '../assets/css/carCard.css';
import { ICarCardProps } from '../types/ICarCardProps';
import React from 'react';

export function CarCard({ carItem }: ICarCardProps) {
    return (
        <div className="car-card-item">
            <img src={'http://localhost:8000'+carItem.image} alt="" />
            <h3>{carItem.car_name}</h3>
            <div className="car-card-item_stats">
                <div>
                    <img src={groupImg} alt="" />
                    <h6>Коробка</h6>
                    <span>{carItem.gear}</span>
                </div>
                <div className="">
                    <img src={transmissionImg} alt="" />
                    <h6>Двигатель</h6>
                    <span>{carItem.engine} л.с.</span>
                </div>
                <div className="">
                    <img src={placesImg} alt="" />
                    <h6>Места</h6>
                    <span>{carItem.places}</span>
                </div>
            </div>
            <a href="#ReserveForm"
                // onClick={hendlerReserveButton}
            >
                Забронировать
            </a>
        </div>
    );
}



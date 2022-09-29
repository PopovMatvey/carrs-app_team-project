import React from 'react';
import '../assets/css/header.css';
import { ILogoProps } from '../types/ILogoProps';

export function Header({ logo }: ILogoProps) {
    return (
        <header>
            <div className="header-img">
                <img src={logo} alt="Лого станицы" className='logo'/>
            </div>
            <div className="header-menu">
                <ul>
                    <li><a className='header-menu_item' href="#mainScreen">Главная</a></li>
                    <li><a className='header-menu_item' href="#CarsList">Автомобили</a></li>
                    <li><a className='header-menu_item' href="#ReserveForm">Бронирование авто</a></li>
                </ul>
            </div>
        </header>
    );
}
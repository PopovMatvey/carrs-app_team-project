import React from 'react';
import '../assets/css/footer.css'
import { ILogoProps } from "../types/ILogoProps";

export function Footer({ logo }: ILogoProps) {
    return (
        <footer>
            <div>
                <img src={logo} alt="Лого станицы" className='logo'/>
            </div>
            <div>
                <span>Все права защищены</span>
            </div>
        </footer>
    );
}
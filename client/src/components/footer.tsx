import { ILogoProps } from "../types/ILogoProps";
import '../assets/css/footer.css'
import React from 'react';

export function Footer({ logo }: ILogoProps) {
    return (
        <footer>
            <div className="div">
                <img src={logo} alt="" />
            </div>
            <div className="div">
                <span>Все права защищены</span>
            </div>
        </footer>
    );
}
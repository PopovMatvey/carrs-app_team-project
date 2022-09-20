import { ICarsAssortimentProps } from "../types/ICarsAssortimentProps";
import '../assets/css/carsAssirtiment.css'

export function CarsAssirtiment({ children }: ICarsAssortimentProps) {
    return (
        <div className="cars-assortiment" id="CarsList">
            <h2>Наш автопарк</h2>
            <div className="cars-assortiment-container">
                {children}
            </div>
        </div>
    );
}
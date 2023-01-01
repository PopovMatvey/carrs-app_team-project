import React from 'react';
import { BeginnerScreen } from './beginerScreen';
import { CarCard } from './carCard';
import { CarsAssirtiment } from './carsAssortiment';
import { ReserveForm } from './reserveForm';
import { useCarCard } from '../hook/carCards';

function App() {   
  let indexCardCar = 0;
  // const { arrayCarCards } = useCarCard(); 
  const  arrayCarCards   = [
    {
        id: 1,
        image: "/images/1.png",
        car_name: "Lamborghini Huracan Spyde",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
    {
        id: 2,
        image: "/images/2.png",
        car_name: "Shevrolet Corvette",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
    {
        id: 3,
        image: "/images/3.png",
        car_name: "Ferrari California",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
    {
        id: 4,
        image: "/images/4.png",
        car_name: "Lamborghini Urus",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
    {
        id: 5,
        image: "/images/5.png",
        car_name: "Audi R8",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
    {
        id: 6,
        image: "/images/6.png",
        car_name: "Lamborghini Huracan Spyde",
        gear: "Полный",
        engine: 5.2,
        places: 2,
    },
];

  return (
    <div className='app-content'>
      <BeginnerScreen />
      <CarsAssirtiment>
        {arrayCarCards.map(carItem => <CarCard key={indexCardCar++} carItem={carItem}/>)}
      </CarsAssirtiment>
      <ReserveForm/>
    </div>
  );
}

export default App;

import React from 'react';
import { BeginnerScreen } from './beginerScreen';
import { CarCard } from './carCard';
import { CarsAssirtiment } from './carsAssortiment';
import { ReserveForm } from './reserveForm';
import { useCarCard } from '../hook/carCards';

function App() {   
  let indexCardCar = 0;
  const { arrayCarCards } = useCarCard(); 

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

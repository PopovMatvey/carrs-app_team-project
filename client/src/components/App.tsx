import { BeginnerScreen } from './beginerScreen';
import { CarCard } from './carCard';
import { CarsAssirtiment } from './carsAssortiment';
import { ReserveForm } from './reserveForm';
import { arrayCars } from '../data/arrayCars'
import { useCarCard } from '../hook/carCards';
import React from 'react';

function App() {   
  const { arrayCarCards } = useCarCard(); 
  console.log(arrayCarCards);
  arrayCarCards.map(carItem=>{console.log(carItem)})
  return (

    <div className='app-content'>
      <BeginnerScreen />
       <CarsAssirtiment>
        {arrayCarCards.map(carItem => <CarCard carItem={carItem}/>)}
      </CarsAssirtiment>

      <ReserveForm />
    </div>
  );
}

export default App;

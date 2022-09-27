import { BeginnerScreen } from './beginerScreen';
import { CarCard } from './carCard';
import { CarsAssirtiment } from './carsAssortiment';
import { ReserveForm } from './reserveForm';
import { useCarCard } from '../hook/carCards';
import React from 'react';

function App() {   
  let i = 0;
  const { arrayCarCards } = useCarCard(); 
  return (
    <div className='app-content'>
      <BeginnerScreen />
      <CarsAssirtiment>
        {arrayCarCards.map(carItem => <CarCard key={i++} carItem={carItem}/>)}
      </CarsAssirtiment>
      <ReserveForm arrayCars={arrayCarCards}/>
    </div>
  );
}

export default App;

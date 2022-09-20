import { BeginnerScreen } from './beginerScreen';
import { CarCard } from './carCard';
import { CarsAssirtiment } from './carsAssortiment';
import { ReserveForm } from './reserveForm';
import { arrayCars } from '../data/arrayCars'
import { useCarCard } from '../hook/carCards';

function App() {   
  const { arrayCarCards } = useCarCard(); 
  console.log(arrayCarCards);
  return (

    <div className='app-content'>
      <BeginnerScreen />
      <CarsAssirtiment>
        {arrayCars.map(carItem => <CarCard key={carItem.id} carItem={carItem}/>)}
      </CarsAssirtiment>
      <ReserveForm />
    </div>
  );
}

export default App;

import Usercard from './Components/Usercard'
import bird from './assets/bird.png'
import effiel from './assets/eiffel_tower.png'
import garden from './assets/garden.png'
function App() {

  return (
   <>
   
  <Usercard name="Bird" image={bird}/>
  <Usercard name="Effil tower" image={effiel} />
  <Usercard name="Garden" image={garden} />
 
   </>
  )
}

export default App

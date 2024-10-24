

import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('Watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])


 

  return (
    <>
      
      <h1>Vite + React</h1>
     {
      watches.map(watch => <Watch watch={watch}></Watch>)
     }
 
    </>
  )
}

export default App

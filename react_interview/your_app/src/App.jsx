import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(null);
 
  useEffect(()=>{
    setName("isim degisti")
  },[])

  return (
    <>
      Lorem ipsum dolor sit amet.
      <br />
      name: {name}

    </>
  )
}

export default App

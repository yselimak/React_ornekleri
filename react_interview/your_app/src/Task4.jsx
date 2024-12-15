import { useEffect, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ChildComponent2 from './components/ChildComponent2';

function Task4() {
 

  return (
    <>
    {/* propsları alt componentlere yolluyoruz */}
     <ChildComponent number={45}/>
     <ChildComponent2 number={50}/>
    </>
  )
}

export default Task4

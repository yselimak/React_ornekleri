import { useState } from 'react'
import './App.css'

function Task5() {
  //verileri kaydedelim
  const [value, setValue] = useState(0);
  const [data, setData] = useState(0);

  const artir = () =>{
    if(data){
      setValue((prev)=> prev + Number(data));
    }else{
      setValue((prev)=> prev + 1);
    };
  }
  
  const azalt = ()=>{
    if(data){
      setValue((prev) => prev - Number(data));
    }else{
      setValue((prev) => prev - 1);
    }
}

//texte sayı alalım
const inputCahnge = (e) =>{
  setData(e.target.value);
}


  return (
    <>
      sayi : {value} <br />
      <input type="text" onChange={inputCahnge} placeholder='enter a number please'/> <br />
      <button onClick={artir} className='task5_buttons'>artir</button>
      <button onClick={azalt} className='task5_buttons'>azalt</button>

    </>
  )
}

export default Task5

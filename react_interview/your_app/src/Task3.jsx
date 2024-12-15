import { useState } from 'react'

function Task3() {

  const [deger,setDeger] = useState(null);
  const [arr,setArr] = useState([]);

  const changeFunc = (e)=>{
    setDeger(e.target.value);
  }

  const clicFunc = () =>{
    setArr(prev => ([...prev, deger]))
  }

  //click olayı ile beraber 'enter' tuşuna basılınca da olayı tetikleyelim
  const enterFunc = (e) =>{
    if(e.key == "Enter"){
      clicFunc()
    }
  }

  return (
    <>
      
      <input type="text" onChange={changeFunc} onKeyDown={enterFunc} /><br />
      <button onClick={clicFunc} className='task3_button'>Add</button>
      <ul>
        {
          arr.map((arr, value) => (
            <li key={value}>{arr}</li>
          ))
        }
      </ul>

    </>
  )
}

export default Task3

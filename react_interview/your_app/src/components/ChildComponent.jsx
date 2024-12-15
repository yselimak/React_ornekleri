import { useState } from "react"

const ChildComponent = ({ number }) => {
    const [sayi, setSayi] = useState(0);

    const addNumber = () => {
        setSayi(prev => (prev + number))
    }



    return <>

        sayi: {sayi} <br />
        <button onClick={addNumber} className="task4_buttons">Parent'dan gelen sayıyı ekle</button>
    </>
}

export default ChildComponent
import { useState } from "react"

const ChildComponent2 = ({ number }) => {
    const [sayi, setSayi] = useState(0);

    const removeNumber = () => {
        setSayi(prev => (prev - number))
    }



    return <>
        <button onClick={removeNumber} className="task4_buttons">Parent'dan gelen sayıyı cikar</button>
    </>
}

export default ChildComponent2
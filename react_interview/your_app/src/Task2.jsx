import { useEffect, useState } from 'react'
import './Task1.css'

function Task2() {
    //info isminde bir obje oluşturalım
    const [info, setInfo] = useState({
        ad: '',
        soyad: '',
        email: '',
        sifre: ''
    });

    //infoArr dizisi bize daha sonra bilgileri döndereceği için tanımlıyoruz burada
    const [infoArr,setInfoArr] = useState([])

    const changeFunc = (e) => {
        const { name, value } = e.target;
        setInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const clickFunc = (e) =>{
        e.preventDefault();
        setInfoArr(prev => ([...prev,info]));
    }

    useEffect(()=>{
        console.log(infoArr)
    },[infoArr])//infoArr dizisi her güncelliğinde çalış


    return (
        <>
            <form action="">
                
                    <p>Ad:</p>
                    <input type="text" name='ad' onChange={changeFunc}/><br />
                
                    <p>Soyad:</p>
                    <input type="text" name='soyad' onChange={changeFunc}/><br />
                
                    <p>E-mail</p>
                    <input type="text" name='email' onChange={changeFunc}/><br />
                
                    <p>Şifre:</p>
                    <input type="password" name='sifre' onChange={changeFunc}/><br />
                
                <button onClick={clickFunc}>Kaydet</button>
                
            </form>
        </>
    )
}

export default Task2

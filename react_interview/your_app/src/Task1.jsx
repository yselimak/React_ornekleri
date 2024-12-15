import { useEffect, useState } from 'react'
import './App.css'

function Task1() {
    const [isChange, setIsChange] = useState(false);
    const renkDegistir = () => {
        setIsChange(!isChange)
    }
    
    //data -> sayfada gösterilecek veri, loadin -> sayfa yükleme anında gösterilir, error -> hata oluştuğunda
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isChange) {
            document.body.classList.add('change_thems');  // Tema değiştiğinde class ekle
        } else {
            document.body.classList.remove('change-thems');  // Tema eski hale dönerse class'ı kaldır
        }

        // Temayı sayfa yüklendiğinde güncelle
        return () => {
            document.body.classList.remove('change_thems');
        };
    }, [isChange]);  // isChange değiştikçe useEffect tetiklenir.


    //useEffect ile veriyi çekiyoruz
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const result = await response.json(); //dönen cevabı json formata çevirdik

                setData(result); //json veriyi kaydettik
                setLoading(false); // Veri başarıyla çekildiyse yüklenme durumunu false yap
            } catch (error) {
                setError(error);
                setLoading(false); // Veri çekerken hata oluştuysa yüklenme durumunu false yap
            }
        };

        // fetchData fonksiyonunu çağır
        fetchData();
    }, []);


    //render alıyoruz
    return (
        <>
            <button onClick={renkDegistir} className={isChange ? 'change_thems': ''}>Tema degistir</button>

            <div>
                {loading && <p>Veri yükleniyor...</p>}
                {error && <p>Hata oluştu: {error.message}</p>}
                {data && (
                    <div>
                        <h1>{data.title}</h1>
                    </div>
                )}
            </div>
        </>
    )
}

export default Task1

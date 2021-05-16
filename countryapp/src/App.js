import React, {useState, useEffect, version} from "react";
import {button} from "./components/button/button.jsx";
import axios from "axios";
import Card from "./components/Card/Card.jsx";

const App = ()=>{

    const [sayac, setSayac] = useState(0);
    const [data, setData]=  useState([]);
    const arttirmaFonksiyonu=()=>{
        setSayac(sayac+1);
    };

    const sifirla= () =>{
        setSayac(0)
    }

    const bosDeger=()=>{
        setSayac("değer boş")
    }
    console.log ("useEffectin üstü")
    useEffect(
        ()=>{
           // console.log("useEffectin için çalıştı ")
            axios.get("https://restcountries.eu/rest/v2/all")
            .then((cevap)=>
            {
            setData(cevap.data)}).catch((hata)=>{console.log(hata)})
        },[]
    );
    console.log("useEffectin altı")
    

    return(
        <div className="container">
        {console.log("return'in için çalıştı")}
        <div>{sayac}</div>
        <button handClick={arttirmaFonksiyonu} isim="Arttırma Butonu"/>
        <button isim="Bu buton sıfırlar" handClick={sifirla}/>
        <button isim="Boş" handClick={bosDeger}/>
        <div className="bayrak-wrapper">
        {veri.map((item)=>{
     
    return<Card kaynak={item.flag} 
        bayrak={item.name}/>;
        
        })
        }
        </div>
        </div>
        
    );
};

export default App;
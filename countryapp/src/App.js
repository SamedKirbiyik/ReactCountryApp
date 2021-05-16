import React, {useState} from "react";
import {button} from "./components/button/button.jsx";


const App = ()=>{

    const [sayac, setSayac] = useState(0);

    const arttirmaFonksiyonu=()=>{
        setSayac(sayac+1);
    };

    const sifirla= () =>{
        setSayac(0)
    }

    const bosDeger=()=>{
        setSayac("değer boş")
    }

    return(
        <>
        <div>{sayac}</div>
        <button handClick={arttirmaFonksiyonu} isim="Arttırma Butonu"/>
        <button isim="Boş" handClick={bosDeger}/>
        </>
        
    );
};

export default App;
import React, {useState} from "react";
import {button} from "./components/button/button.jsx";


const App = ()=>{

    const [sayac, setSayac] = useState(0)

    return(
        <>
        <div>{sayac}</div>
        <button onClick=>{(setSayac(sayac+1))}/>
        </>
        
    );
};

export default App;
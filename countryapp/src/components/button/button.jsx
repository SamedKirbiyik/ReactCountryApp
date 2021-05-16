import react from "react";
 

export const button = (props)=>{
  // console.log("parenttan gelen budur", props)
    return(
       <button onClick={props.handleClick}>{props.isim} </button>
        
    )
}


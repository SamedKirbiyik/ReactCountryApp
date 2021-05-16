import react from "react";
import "./card.css";
const Card ={props.kaynak}=>{
    <div className= "card-box">
        <img className = "image" src={props.kaynak} />
        <div>{props.bayrak}</div>
    </div>
}
export default Card;
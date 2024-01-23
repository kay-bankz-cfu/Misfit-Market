import React from "react";
import "../Component/Card3.css"



function Card3(props) {
    return (
        <>
            <div className="card3">
                <img src={props.image} alt="" height={"340px"} width={"100%"} />
                <h2>{props.text}</h2>
            </div>
        </>
    )
    
}
export default Card3
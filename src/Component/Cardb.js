import React from "react";
import "../Component/Cardb.css"


function Cardb(props) {
    return (
      <>
        <div className="cardb">
          <img src={props.image} alt="" height={"170px"} width={"100%"} />
          <p className="text">{props.text}</p>
          <p className="big">{props.big}</p>
        </div>

        {/* <div>
                <img src={props.imagee} alt="" height={"170px"} width={"100%"} />
                <a href="">
                    {props.texr}
                </a>
        </div> */}
      </>
    );
    
}
export default Cardb
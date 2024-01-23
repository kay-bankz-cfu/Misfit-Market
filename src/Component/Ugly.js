import React from "react";
import "../Component/Ugly.css"


function Ugly (props) {
    return (
      <>
        <div className="ugly">
          <img src={props.images} alt="" height={"360px"} width={"80%"} />
          <div>
            <p className="title">{props.titlee}</p>
            <div className="text">{props.textt}</div>
          </div>
        </div>
      </>
    );
}
export default Ugly
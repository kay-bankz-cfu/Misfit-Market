import React from "react";
import "../Component/Check.css";

function Check(props) {
  return (
    <>
      <div className="check">
        <div>
          <p className="title">{props.title}</p>
          <div className="text">{props.text}</div>
        </div>

        <img src={props.image} alt="" height={"360px"} width={"80%"} />
      </div>
    </>
  );
}
export default Check;

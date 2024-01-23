import React from "react";
// import "../Component/Card1.css"
import "../Component/Card1.css";

function Card1(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.image} alt="" height={"60px"} width={"70px"} />

        <br />
        <br />

        <div className="items-container">
          <p className="percent">{props.percent}</p>
          <br />
          <div className="set">
            <div>{props.price}</div>
            <del className="trash">{props.trash}</del>
          </div>
          <br />

          <p className="product-name">{props.name}</p>
        </div>
      </div>
    </>
  );
}
export default Card1;

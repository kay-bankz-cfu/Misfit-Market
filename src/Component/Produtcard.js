import React from "react";
// import "../Component/Products.js"
import "../Component/Productcard.css"
import { Link } from "react-router-dom";


function Productcard({
    images,
    name,
    category,
    description,
    price,
    percent,
  // text,
    id
}) {
    return (
      //   <div className="pro-container">
      <Link to={`/products/${id}`} className="product-container">
        <img src={images} alt="" />
        <div>
          <p className="name">{name}</p>
          <p className="category">{category}</p>
          <p>{description}</p>
          {/* <br /> */}
          <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <div className="percent">{price}</div>
            <div>
              <del>{percent}</del>
            </div>
          </div>
        </div>
        <button>purchase Now</button>
      </Link>
      //   </div>
    );
}
export default Productcard
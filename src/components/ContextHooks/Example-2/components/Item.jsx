import React from "react";

const Item = (props) => {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <h6>${props.price}</h6>
      <button style={{ marginBottom: "35px" }}>Add To Cart</button>
    </div>
  );
};

export default Item;

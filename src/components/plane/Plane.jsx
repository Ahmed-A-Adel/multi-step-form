import React from "react";
import "./Plane.scss";
function Plane({ imgNumber, name, money, subs, handleClick }) {
  return (
    <div className="plane" onClick={(e) => handleClick(name)}>
      <div className={`plane_img img-${imgNumber}`}></div>
      <div className="plane_info">
        <h4>{name}</h4>
        <p>
          ${money}/{subs}
        </p>
        {subs === "yr" && <h5>2 mongths free</h5>}
      </div>
    </div>
  );
}

export default Plane;

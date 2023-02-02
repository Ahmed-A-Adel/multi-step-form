import React, { useState } from "react";
import "./Plane.scss";
function Plane({ imgNumber, name, money, subs, handleClick, plane }) {
  const active = plane.name === name ? true : false;
  return (
    <div
      className={`plane ${active && "plane-active"}`}
      onClick={(e) => {
        handleClick(name);
      }}
    >
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

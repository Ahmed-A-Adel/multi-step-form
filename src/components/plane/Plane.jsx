import React from "react";
import "./Plane.scss";
function Plane({ url }) {
  return (
    <div className="plane">
      <div
        className="plane_img"
        style={{
          background: url,
        }}
      ></div>
      <div className="plane_info">
        <h4>aracd</h4>
        <p>$150/yr</p>
        <h5>2 mongths free</h5>
      </div>
    </div>
  );
}

export default Plane;

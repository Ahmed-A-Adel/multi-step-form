import React from "react";
import { Link } from "react-router-dom";
import "./Summary.scss";
function Summary({ plane, addOnes, dispatch }) {
  // ___________________________________________________________________
  const total =
    plane.price + addOnes?.reduce((prev, cur) => prev + cur.priceValue, 0);
  // ----------------------------------------------------------------
  const summaryPlaneHead = ` ${plane.name} (${plane.time})`;
  // ----------------------------------------------------------------
  const summaryPlanePrice = `$${plane.price}/${plane.time.slice(0, 2)}`;
  // ----------------------------------------------------------------
  const addOnesElements = addOnes?.map((add, i) => (
    <div className="summary_add-ones" key={add.title + i}>
      <p>{add.title}</p>
      <span>{`+$${add.priceValue}/${plane.time.slice(0, 2)}`}</span>
    </div>
  ));
  // ----------------------------------------------------------------
  const summaryTotalPrice = `+$${total}/${plane.time.slice(0, 2)}`;
  // ----------------------------------------------------------------
  const summaryTotalHead = `Total (per ${plane.time.slice(0, -2)})`;
  // ___________________________________________________________________

  return (
    <div className="summary">
      <div className="summary_container">
        <div className="summary_plane">
          <h5> {summaryPlaneHead}</h5>
          <span className="summary_plane_price">{summaryPlanePrice}</span>
        </div>
        <Link onClick={(event) => dispatch({ type: "TO-PLANE", event })}>
          change
        </Link>
        <div className="summary_line"></div>
        {addOnesElements}
      </div>
      <div className="summary_total">
        <p>{summaryTotalHead}</p>
        <span>{summaryTotalPrice}</span>
      </div>
    </div>
  );
}

export default Summary;

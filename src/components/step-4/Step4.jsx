import React, { useContext } from "react";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import { stepsContext } from "../StepsProvider";
import Summary from "../summary/Summary";
import "./Step4.scss";
function Step4() {
  const { state, dispatch } = useContext(stepsContext);
  const { plane, addOnes } = state;
  const planePrice = plane.plane.money[plane.subs];

  return (
    <div className="step step-4">
      <Heading
        heading={"Finishing up"}
        subHeading={" Double-check everything looks OK before confirming."}
      />
      <Summary
        send={dispatch}
        plane={{
          name: plane.plane.name,
          price: planePrice,
          time: plane.subs === "mo" ? "monthly" : "yearly",
        }}
        addOnes={addOnes}
        dispatch={dispatch}
      />
      <div className="btn_container">
        <Button
          handleClick={(event) => dispatch({ type: "BACK", event })}
          className="btn-back btn"
          type="submit"
        >
          go back
        </Button>
        <Button
          handleClick={(event) => dispatch({ type: "NEXT", event, state })}
          className="btn-next btn"
          type="submit"
        >
          next step
        </Button>
      </div>
    </div>
  );
}

export default Step4;

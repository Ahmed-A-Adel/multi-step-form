import React, { useContext } from "react";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import { stepsContext } from "../StepsProvider";
import Summary from "../summary/Summary";
import "./Step4.scss";
function Step4() {
  const { state, dispatch } = useContext(stepsContext);

  return (
    <div className="step step-4">
      <Heading
        heading={"Finishing up"}
        subHeading={" Double-check everything looks OK before confirming."}
      />
      <Summary
        plane={{ name: "arcade", price: 9, time: "monthly" }}
        addOnes={[
          { name: "online service", price: 1 },
          { name: "larger storage", price: 2 },
        ]}
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
          handleClick={(event) => dispatch({ type: "NEXT", event })}
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

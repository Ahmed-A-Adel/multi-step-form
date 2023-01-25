import React, { useContext } from "react";
import { stepsContext } from "../StepsProvider";
import Plane from "../plane/Plane";
import Heading from "../heading/Heading";
import Switcher from "../switcher/Switcher";
import Button from "../button/Button";
import "./Step2.scss";
function Step2() {
  const { state, dispatch } = useContext(stepsContext);
  const info = {
    heading: "  Select your plan",
    paragraph: " You have the option of monthly or yearly billing. ",
  };
  return (
    <div className="step step-2">
      <Heading heading={info.heading} subHeading={info.paragraph} />
      <div className="step-2_planes">
        <Plane imgNumber={1} key={1} />
        <Plane imgNumber={2} key={2} />
        <Plane imgNumber={3} key={3} />
      </div>
      <Switcher />
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

export default Step2;

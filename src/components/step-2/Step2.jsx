import React from "react";
import Plane from "../plane/Plane";
import Heading from "../heading/Heading";
import Switcher from "../switcher/Switcher";
import "./Step2.scss";
function Step2() {
  const info = {
    heading: "  Select your plan",
    paragraph: " You have the option of monthly or yearly billing. ",
  };
  return (
    <div className="step step-2">
      <Heading heading={info.heading} subHeading={info.paragraph} />
      <div className="step-2_planes">
        <Plane imgNumber={1} />
        <Plane imgNumber={2} />
        <Plane imgNumber={3} />
      </div>
      <Switcher />
    </div>
  );
}

export default Step2;

import React from "react";
import Heading from "../heading/Heading";
import "./LastStep.scss";
function LastStep() {
  return (
    <div className="step last-step">
      <div className="last-step_img"></div>
      <Heading
        heading={"Thank you!"}
        subHeading={
          " Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
        }
      />
    </div>
  );
}

export default LastStep;

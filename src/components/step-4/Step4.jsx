import React from "react";
import Heading from "../heading/Heading";
import Summary from "../summary/Summary";
import "./Step4.scss";
function Step4() {
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
    </div>
  );
}

export default Step4;

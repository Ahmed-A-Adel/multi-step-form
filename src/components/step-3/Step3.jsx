import React from "react";
import "./Step3.scss";
import Heading from "../heading/Heading";
import Checker from "../checker/Checker";

function Step3() {
  const info = [
    {
      title: " Online service",
      info: "Access to multiplayer games ",
      price: "+$1/mo",
    },
    {
      title: "Larger storage",
      info: " Extra 1TB of cloud save ",
      price: "+$2/mo",
    },
    {
      title: "Customizable Profile",
      info: " Custom theme on your profile ",
      price: "+$2/mo",
    },
  ];
  return (
    <div className="step step-3">
      <Heading
        heading="Pick add-ons"
        subHeading="Add-ons help enhance your gaming experience."
      />
      {info.map((info) => (
        <Checker title={info.title} info={info.info} price={info.price} />
      ))}
    </div>
  );
}

export default Step3;

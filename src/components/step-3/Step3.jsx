import React, { useContext } from "react";
import "./Step3.scss";
import Heading from "../heading/Heading";
import Checker from "../checker/Checker";
import { stepsContext } from "../StepsProvider";
import Button from "../button/Button";

function Step3() {
  const { state, dispatch } = useContext(stepsContext);

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
        <Checker
          key={info.title}
          title={info.title}
          info={info.info}
          price={info.price}
        />
      ))}
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

export default Step3;

import React, { useContext, useState } from "react";
import Heading from "../heading/Heading";
import Checker from "../checker/Checker";
import { stepsContext } from "../StepsProvider";
import Button from "../button/Button";
import "./Step3.scss";

function Step3() {
  const { state, dispatch } = useContext(stepsContext);
  const [addOnes, setAddOnes] = useState([]);
  const info = [
    {
      title: " Online service",
      info: "Access to multiplayer games ",
      price: { mo: 1, yr: 10 },
    },
    {
      title: "Larger storage",
      info: " Extra 1TB of cloud save ",
      price: { mo: 2, yr: 20 },
    },
    {
      title: "Customizable Profile",
      info: " Custom theme on your profile ",
      price: { mo: 2, yr: 20 },
    },
  ];
  // ___________ Function ___________________________
  const handleChecker = (data) => {
    // 1- already exsisted data is coming checked === False ? Remove it.
    if (!data.checked)
      return setAddOnes([...addOnes.filter((add) => add.title !== data.title)]);
    // 2- new data is coming checked === True : Add it.
    else return setAddOnes([...addOnes, data]);
  };
  // ___________ Function ___________________________

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
          handleClick={handleChecker}
          subs={state.plane.subs}
        />
      ))}
      <div className="btn_container">
        <Button
          handleClick={(event) => dispatch({ type: "BACK", event })}
          className="btn-back btn"
          type="button"
        >
          go back
        </Button>
        <Button
          handleClick={(event) =>
            dispatch({
              type: "NEXT",
              event,
              state: { addOnes },
              for: "addOnes",
            })
          }
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

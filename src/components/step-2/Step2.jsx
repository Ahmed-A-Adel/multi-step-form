import React, { useContext, useState } from "react";
import { stepsContext } from "../StepsProvider";
import Plane from "../plane/Plane";
import Heading from "../heading/Heading";
import Switcher from "../switcher/Switcher";
import Button from "../button/Button";
import "./Step2.scss";
function Step2() {
  const { state, dispatch } = useContext(stepsContext);
  const [toggle, setToggle] = useState(false);

  const [planeInfo, setplaneInfo] = useState({
    plane: "",
    subs: "mo",
    planes: [
      { name: "arcade", money: { mo: 9, yr: 90 } },
      { name: "advance", money: { mo: 12, yr: 120 } },
      { name: "pro", money: { mo: 15, yr: 150 } },
    ],
  });
  // __________________ Function _______________________
  function selectPlane(planeName) {
    const currentPlane = planeInfo.planes.filter(
      (plane) => plane.name === planeName
    );
    setplaneInfo({ ...planeInfo, plane: currentPlane[0] });
  }
  function toggleSwitch() {
    setToggle(!toggle);
    setplaneInfo({ ...planeInfo, subs: planeInfo.subs === "mo" ? "yr" : "mo" });
  }
  // __________________ Function _______________________

  return (
    <div className="step step-2">
      <Heading
        heading="  Select your plan"
        subHeading=" You have the option of monthly or yearly billing. "
      />
      <div className="step-2_planes">
        {planeInfo.planes.map((plane, i) => (
          <Plane
            name={plane.name}
            money={plane.money[planeInfo.subs]}
            subs={planeInfo.subs}
            imgNumber={i + 1}
            key={i + 1}
            handleClick={selectPlane}
            plane={planeInfo.plane}
          />
        ))}
      </div>
      <Switcher handleClick={toggleSwitch} toggleValue={toggle} />
      <div className="btn_container">
        <Button
          handleClick={(event) => dispatch({ type: "BACK", event })}
          className="btn-back btn"
          type="submit"
        >
          go back
        </Button>
        <Button
          handleClick={(event) =>
            dispatch({
              type: "NEXT",
              event,
              for: "plane",
              state: { plane: planeInfo },
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

export default Step2;

import React from "react";
import Plane from "../plane/Plane";
import Heading from "../heading/Heading";
import "./Step2.scss";
function Step2() {
  const imges = [
    "url(http://localhost:3000/static/media/icon-arcade.a08c098289a31bb2f66d.svg) center/cover no-repeat ",

    "url(http://localhost:3000/static/media/icon-advanced.705bd10c4c1f688871d7.svg) center/cover no-repeat",

    "url(http://localhost:3000/static/media/icon-pro.2e7e377da9c658d60862.svg) center/cover no-repeat",
  ];
  const info = {
    heading: "  Select your plan",
    paragraph: " You have the option of monthly or yearly billing. ",
  };
  return (
    <div className="step step-2">
      <Heading heading={info.heading} subHeading={info.paragraph} />
      <div className="step-2_planes">
        {imges.map((img) => (
          <Plane url={img} />
        ))}
      </div>
    </div>
  );
}

export default Step2;

import React from "react";
import "./Step1.scss";
function Step1() {
  const stepInfo = {
    1: {
      heading: " Personal info",
      paragraph: " Please provide your name, email address, and phone number.",
    },
    2: {
      heading: "  Select your plan",
      paragraph: " You have the option of monthly or yearly billing. ",
    },
    3: {
      heading: "Pick add-ons",
      paragraph: "Add-ons help enhance your gaming experience.",
    },
    4: {
      heading: "Finishing up",
      paragraph: " Double-check everything looks OK before confirming.",
    },
    5: {
      heading: "Thank you!",
      paragraph:
        " Thanks for confirming your subscription! We hope you have funusing our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
    },
  };

  return (
    <div className="step">
      <h2 className="step_heading">{stepInfo[1].heading}</h2>
      <p className="step_text">{stepInfo[1].paragraph}</p>
    </div>
  );
}

export default Step1;

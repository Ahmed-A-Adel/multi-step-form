import React from "react";
import { useState } from "react";
import Heading from "../heading/Heading";
import useInput from "../../hooks/useInput";
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
  const [inputValue, handleInput] = useInput("");
  const [emailValue, handleEmail] = useInput("");
  const [phoneValue, handlePhone] = useInput("");

  return (
    <div className="step">
      <Heading
        heading={stepInfo[1].heading}
        subHeading={stepInfo[1].paragraph}
      />
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type={"text"}
          value={inputValue}
          onChange={handleInput}
          placeholder="e.g. Ahmed A Adel"
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type={"email"}
          value={emailValue}
          onChange={handleEmail}
          placeholder="e.g. ahmedadel.personalemail@gmail.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type={"text"}
          value={phoneValue}
          onChange={handlePhone}
          placeholder="e.g. +20-1 234 567 89"
        />
      </form>
    </div>
  );
}

export default Step1;

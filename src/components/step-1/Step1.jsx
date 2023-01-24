import React from "react";
import { useState, useContext } from "react";
import Heading from "../heading/Heading";
import useInput from "../../hooks/useInput";
import { stepsContext } from "../StepsProvider";
import "./Step1.scss";
function Step1() {
  const [inputValue, handleInput] = useInput("");
  const [emailValue, handleEmail] = useInput("");
  const [phoneValue, handlePhone] = useInput("");
  const contextValue = useContext(stepsContext);
  return (
    <div className="step step-1">
      <Heading
        heading={" Personal info"}
        subHeading={
          " Please provide your name, email address, and phone number."
        }
      />
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type={"text"}
          value={inputValue}
          onChange={handleInput}
          placeholder="e.g. Ahmed A Adel"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type={"email"}
          value={emailValue}
          onChange={handleEmail}
          placeholder="e.g. ahmedadel.personalemail@gmail.com"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type={"text"}
          value={phoneValue}
          onChange={handlePhone}
          placeholder="e.g. +20-1 234 567 89"
          required
        />
      </form>
      {/* <Footer /> */}
    </div>
  );
}

export default Step1;

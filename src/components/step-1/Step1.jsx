import React from "react";
import { useState, useContext } from "react";
import Heading from "../heading/Heading";
import useInput from "../../hooks/useInput";
import { stepsContext } from "../StepsProvider";
import "./Step1.scss";
import Button from "../button/Button";
function Step1() {
  const [inputValue, handleInput] = useInput("");
  const [emailValue, handleEmail] = useInput("");
  const [phoneValue, handlePhone] = useInput("");
  const { dispatch, state } = useContext(stepsContext);
  return (
    <div className="step step-1">
      <Heading
        heading={" Personal info"}
        subHeading={
          " Please provide your name, email address, and phone number."
        }
      />
      <form
        className="form"
        onSubmit={(event) => dispatch({ type: "NEXT", event })}
      >
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
      <div className="btn_container">
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

export default Step1;

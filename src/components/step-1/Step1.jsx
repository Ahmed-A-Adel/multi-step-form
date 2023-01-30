import React from "react";
import { useState, useContext } from "react";
import Heading from "../heading/Heading";
import useInput from "../../hooks/useInput";
import { stepsContext } from "../StepsProvider";
import "./Step1.scss";
import Button from "../button/Button";
function Step1() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const formElementsData = [{ name: "user name" }];
  const { dispatch, state } = useContext(stepsContext);
  // __________ Functions ________________________________
  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  // __________ Functions ________________________________
  return (
    <div className="step step-1">
      <Heading
        heading={" Personal info"}
        subHeading={
          " Please provide your name, email address, and phone number."
        }
      />
      <form className="form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type={"text"}
          value={formValues.name}
          onChange={handleChange}
          placeholder="e.g. Ahmed A Adel"
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type={"email"}
          value={formValues.email}
          onChange={handleChange}
          placeholder="e.g. ahmedadel.personalemail@gmail.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type={"text"}
          value={formValues.phone}
          onChange={handleChange}
          placeholder="e.g. +20-1 234 567 89"
        />
      </form>
      <div className="btn_container">
        <Button
          handleClick={(event) =>
            dispatch({
              type: "NEXT",
              event,
              state: {
                ...state,
                userInfo: {
                  name: inputValue,
                  email: emailValue,
                  phone: phoneValue,
                },
              },
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

export default Step1;

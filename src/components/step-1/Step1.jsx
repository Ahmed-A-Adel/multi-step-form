import React from "react";
import { useState, useContext } from "react";
import Heading from "../heading/Heading";
import FormInput from "../formInput/FormInput";
import { stepsContext } from "../StepsProvider";
import "./Step1.scss";
import Button from "../button/Button";
function Step1() {
  const { dispatch, state } = useContext(stepsContext);
  const formElements = state.userInfo.name
    ? state.userInfo
    : {
        name: "",
        email: "",
        phone: "",
      };
  const [formValues, setFormValues] = useState(formElements);
  const formElementsData = [
    {
      name: "name",
      label: "Name",
      required: true,
      pattern: "^[A-Za-z0-9]{5,15}$",
      placeholder: "e.g. AhmedAAdel",
      type: "text",
      error:
        "user name should be 5-15 and should'nt include any special charachters",
    },
    {
      name: "email",
      label: "Email Address",
      required: true,
      placeholder: "e.g. ahmedadel.personalemail@gmail.com",
      type: "email",
      error: "use vaild email",
    },
    {
      name: "phone",
      label: "Phone Number",
      required: true,
      placeholder: "e.g. +20-11 234 567 89",
      type: "tel",
      pattern: "[0-9]{2} [0-9]{10}",
      error: "Format: 20 12345678910",
    },
  ];
  // __________ Functions ________________________________
  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // -----------------------------------------------------

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
        {formElementsData.map((input) => (
          <FormInput
            input={input}
            handleChange={handleChange}
            formValues={formValues}
            key={input.name}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </form>
      <div className="btn_container">
        <Button
          handleClick={(event) =>
            dispatch({
              type: "NEXT",
              event,
              for: "userInfo",
              state: {
                userInfo: formValues,
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

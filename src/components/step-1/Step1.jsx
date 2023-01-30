import React from "react";
import { useState, useContext } from "react";
import Heading from "../heading/Heading";
import FormInput from "../formInput/FormInput";
import { stepsContext } from "../StepsProvider";
import "./Step1.scss";
import Button from "../button/Button";
function Step1() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const formElementsData = [
    {
      name: "name",
      label: "Name",
      placeholder: "e.g. Ahmed A Adel",
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "e.g. ahmedadel.personalemail@gmail.com",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g. +20-1 234 567 89",
      type: "text",
    },
  ];
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
        {formElementsData.map((input) => (
          <FormInput
            input={input}
            handleChange={handleChange}
            formValues={formValues}
            key={input.name}
          />
        ))}
      </form>
      <div className="btn_container">
        <Button
          handleClick={(event) =>
            dispatch({
              type: "NEXT",
              event,
              state: {
                ...state,
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

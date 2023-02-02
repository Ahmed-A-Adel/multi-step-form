import React, { useEffect, useState } from "react";
import "./FormInput.scss";
function FormInput({ input, formValues, handleChange, dispatch, state }) {
  const { errorMessage } = state;
  const [foucsed, setFoucsed] = useState(false);

  //   _____________________________________________________
  useEffect(() => {
    const isFoucsed =
      errorMessage.length > 0
        ? errorMessage.some((err) => err === input.name)
        : false;
    setFoucsed(isFoucsed);
  }, [errorMessage]);
  function handleFoucsed() {
    dispatch({
      type: "SET-NEXT-STEP",
      state: { ...state },
    });
    setFoucsed(true);
  }
  return (
    <div>
      <label htmlFor={input.name}>{input.label}</label>
      <input
        className="form-input_input"
        id={input.name}
        name={input.name}
        type={input.type}
        value={formValues[input.name]}
        onChange={handleChange}
        placeholder={input.placeholder}
        required={input.required}
        pattern={input.pattern}
        foucsed={foucsed.toString()}
        onBlur={handleFoucsed}
      />
      <span className="form-input_error">{foucsed && input.error} !</span>
    </div>
  );
}

export default FormInput;

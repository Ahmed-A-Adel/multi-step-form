import React from "react";

function FormInput({ input, formValues, handleChange }) {
  return (
    <div>
      <label htmlFor={input.name}>{input.label}</label>
      <input
        id={input.name}
        name={input.name}
        type={input.type}
        value={formValues[input.name]}
        onChange={handleChange}
        placeholder={input.placeholder}
      />
    </div>
  );
}

export default FormInput;

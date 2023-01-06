import React from "react";
import { useState } from "react";

function useInput(initialValue = "") {
  const [state, setState] = useState(initialValue);
  const handleChange = (e) => setState(e.target.value);

  return [state, handleChange];
}

export default useInput;

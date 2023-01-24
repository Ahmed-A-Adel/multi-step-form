import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
export const stepsContext = createContext();

export default function StepsProvider({ children }) {
  const initialValue = {
    step: "/",
    userInfo: {
      name: "Ahmed",
      email: "ahmedAdel.email@gmail.com",
      phone: "0124556789",
    },
    plane: {},
    addOnes: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialValue);
  const value = { state, dispatch };
  return (
    <stepsContext.Provider value={value}>{children}</stepsContext.Provider>
  );
}

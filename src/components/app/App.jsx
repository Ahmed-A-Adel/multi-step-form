import { useEffect, useReducer, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Reducer from "../Reducer";
import "./App.scss";
function App() {
  // __________ Varibels __________________________________

  const navigate = useNavigate();
  const initialValue = {
    step: "/",
    userInfo: {},
    plane: {},
    addOnes: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialValue);
  // __________ Varibels __________________________________

  useEffect(() => {
    navigate(state.step);
  }, [state.step]);

  // _____________________ Functions _______________________________
  return (
    <div className="app">
      <div className="app_container">
        <Sidebar state={state} />
        <Outlet />
        <Footer state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;

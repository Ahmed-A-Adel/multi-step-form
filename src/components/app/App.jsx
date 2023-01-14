import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./App.scss";
function App() {
  // __________ Varibels __________________________________
  const [state, setState] = useState({ step: "/" });
  const navigate = useNavigate();
  // __________ Varibels __________________________________
  // _____________________ Functions _______________________________
  const handleNextStep = (e) => {
    e.preventDefault();

    const currentStep =
      state.step === "/" ? "/step-2" : `/step-${+state.step.slice(-1) + 1}`;

    setState({ ...state, step: currentStep });

    navigate(currentStep);
  };
  // ________________________________________________________________
  const handleLastStep = (e) => {
    e.preventDefault();

    const currentStep =
      state.step === "/step-2" ? "/" : `/step-${+state.step.slice(-1) - 1}`;

    setState({ ...state, step: currentStep });

    navigate(currentStep);
  };
  // _____________________ Functions _______________________________

  return (
    <div className="app">
      <div className="app_container">
        <Sidebar step={state.step} />
        <Outlet />
        <Footer
          step={state.step}
          handleNextStep={handleNextStep}
          handleLastStep={handleLastStep}
        />
      </div>
    </div>
  );
}

export default App;

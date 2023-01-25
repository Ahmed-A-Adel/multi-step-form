import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { stepsContext } from "../StepsProvider";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./App.scss";
function App() {
  // _________________ Varibels __________________________________
  const { state, dispatch } = useContext(stepsContext);
  const navigate = useNavigate();
  // _________________ Varibels __________________________________

  // ___________________ Hooks ___________________________________
  useEffect(() => {
    navigate(state.step);
  }, [state.step]);
  // ___________________ Hooks ___________________________________

  return (
    <div className="app">
      <div className="app_container">
        <Sidebar state={state} />
        <Outlet />
        {/* <Footer state={state} dispatch={dispatch} /> */}
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { stepsContext } from "../StepsProvider";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const { state, dispatch } = useContext(stepsContext);

  return (
    <div className="footer">
      {state.step !== "/" && (
        <Link
          className="btn btn-back"
          onClick={(event) => dispatch({ type: "BACK", event })}
        >
          go back
        </Link>
      )}
      {state.step !== "/step-5" && (
        <Link
          className="btn btn-next"
          onClick={(event) => dispatch({ type: "NEXT", event })}
        >
          next step
        </Link>
      )}
    </div>
  );
}

export default Footer;

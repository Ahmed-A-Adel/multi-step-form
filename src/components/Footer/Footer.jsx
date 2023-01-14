import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer({ state, dispatch }) {
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

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer({ step, handleLastStep, handleNextStep }) {
  return (
    <div className="footer">
      {step !== "/" && (
        <Link className="btn btn-back" onClick={handleLastStep}>
          go back
        </Link>
      )}
      {step !== "/step-5" && (
        <Link className="btn btn-next" onClick={handleNextStep}>
          next step
        </Link>
      )}
    </div>
  );
}

export default Footer;

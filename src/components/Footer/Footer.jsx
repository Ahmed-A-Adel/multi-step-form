import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer({ step, handleLastStep, handleNextStep }) {
  const nexStep = step === "/" ? "/step-2" : `/step-${+step.slice(-1) + 1}`;
  const prevStep = step === "/step-2" ? "/" : `/step-${+step.slice(-1) - 1}`;

  return (
    <div className="footer">
      {step !== "/" && (
        <Link to={prevStep} className="btn btn-back" onClick={handleLastStep}>
          go back
        </Link>
      )}
      {step !== "/step-5" && (
        <Link to={nexStep} className="btn btn-next" onClick={handleNextStep}>
          next step
        </Link>
      )}
    </div>
  );
}

export default Footer;

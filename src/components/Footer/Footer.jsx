import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <Link className="btn btn-back"> go back</Link>
      <Link className="btn btn-next">next step</Link>
    </div>
  );
}

export default Footer;

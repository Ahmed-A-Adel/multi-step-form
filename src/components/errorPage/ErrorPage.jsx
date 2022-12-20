import React from "react";
import { useRouteError } from "react-router";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      {" "}
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div style={{ color: "red", margin: "2rem 0" }}>{error.data}</div>
      <p>
        {error.statusText} {error.status}
      </p>
    </div>
  );
}

export default ErrorPage;

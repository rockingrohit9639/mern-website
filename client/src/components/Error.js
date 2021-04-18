import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error d-flex justify-content-center align-items-center">
      <div className="page-404">
        <h1 className="text-muted"> 404 </h1>
          </div>
          
          <div className="error-content p-2 d-flex justify-content-center flex-column align-items-center">
              <p className="text-uppercase"> Sorry !! The page you are trying to visit does not exists. </p>

              <Link className="rounded shadow-sm" to="/"> Homepage </Link>
          </div>
    </div>
  );
}

export default Error;

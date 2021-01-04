import React from "react";
//import "./Css/Horizontal.css";

import { Link } from "react-router-dom";

function Horizontal() {
  return (
    <div className="indigo darken-3 wrapper section">
      <div className="container">
        <div className="row">
          <div className="col  s12 l6">
            <h4
              style={{ fontSize: 30, fontWeight: 600 }}
              className="white-text "
            >
              74.4% of children are uneducated
            </h4>
            <hr className="red" />
          </div>
          <div className="col s6 l4 offset-l2">
            <h4 className="white-text">
              <Link
                className="waves-effect waves-light btn-large  red darken-4 z-depth-4"
                to="/what-we-do-page"
              >
                what We Do
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;

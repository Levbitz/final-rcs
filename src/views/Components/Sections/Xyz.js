import React from "react";

function Xyz() {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <div className="container">
        <div className="row">
          <div className="col l7">
            <div>
              <img
                className="responsive-img "
                src={require("assets/Images/girl.JPG")}
                alt=""
              />
            </div>
          </div>
          <div className="col l5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus suscipit tempora vitae veniam non exercitationem porro
              tempore fugit possimus dolore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xyz;

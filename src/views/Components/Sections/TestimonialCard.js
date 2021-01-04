import React from "react";

function TestimonialCard({ img, title, body }) {
  return (
    <div className="card z-depth-0">
      <div className="card-image">
        <img src={img} alt="" />
      </div>

      <div className="card-content">
        <span className="card-title">Card Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
        <div className="lb_cardbtn_wrapper">
          <a
            href="/#"
            target="_blank"
            class="waves-effect waves-light btn indigo"
          >
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

import React from "react";
//import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

//css
//import "./Css/About.css";

function Testimonial() {
  return (
    <div className="lb_about_wrapper white">
      <h2 className="center">SpotLight</h2>
      <div className="container  ">
        <div className="row">
          <div className="col s12 l5">
            <TestimonialCard
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2020/10/Certificate-2020-504x288-c-default.jpg"
              }
            />
          </div>
          <div className="col s12 l3">
            <TestimonialCard
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2019/02/Muskan-cataract-surgery-india-504x288-c-default.jpg"
              }
            />
          </div>
          <div className="col s12 l3">
            <TestimonialCard
              img={
                "https://www.sightsaversindia.in/wp-content/uploads/2019/02/Sankarlal-holding-hands-india-504x288-c-default.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

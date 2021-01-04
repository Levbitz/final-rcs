import React from "react";

function Verticals() {
  return (
    <section>
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s3">
          <a href="#test-swipe-1">Test 1</a>
        </li>
        <li className="tab col s3">
          <a className="active" href="#test-swipe-2">
            Test 2
          </a>
        </li>
        <li className="tab col s3">
          <a href="#test-swipe-3">Test 3</a>
        </li>
      </ul>
      <div id="test-swipe-1" className="col s12 blue">
        Test 1
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          repellendus consequatur amet nobis est fuga quos? Molestias, ipsa.
          Consequuntur, at.
        </p>
      </div>
      <div id="test-swipe-2" className="col s12 red">
        Test 2
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          repellendus consequatur amet nobis est fuga quos? Molestias, ipsa.
          Consequuntur, at.
        </p>
      </div>
      <div id="test-swipe-3" className="col s12 green">
        Test 3
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          repellendus consequatur amet nobis est fuga quos? Molestias, ipsa.
          Consequuntur, at.
        </p>
      </div>
    </section>
  );
}

export default Verticals;

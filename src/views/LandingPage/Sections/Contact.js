import React from "react";

function Contact() {
  return (
    <div style={{ marginBottom: 30 }} className="Form-wrapper">
      <div className="z-depth-0">
        <div className="row">
          <div className="col s12 ">
            <h2 className="white-text darken-5">Contact us</h2>
          </div>
          <div className="col s12 l7 ">
            <div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address One</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>Lorem ipsum dolor sit amet.</span>
                </p>
                <p>
                  <span>Email:</span> <span>email@gmail.com</span>
                </p>
                <p>
                  <span>phone number:</span> <span>08000000000000</span>
                </p>
              </blockquote>
            </div>
            <div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address two</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>Lorem ipsum dolor sit amet.</span>
                </p>
                <p>
                  <span>Email</span> <span>email@gmail.com</span>
                </p>
                <p>
                  <span>phone number</span> <span>08000000000000</span>
                </p>
              </blockquote>
            </div>
            <div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address three</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>Lorem ipsum dolor sit amet.</span>
                </p>
                <p>
                  <span>Email</span> <span>email@gmail.com</span>
                </p>
                <p>
                  <span>phone number</span> <span>08000000000000</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div style={{ marginRight: -30 }} className="col l4 offset-l1   ">
            <form action="">
              <div className="row">
                <h3 className="indigo-text text-darken-4 center">
                  Send us Feedback
                </h3>

                <div className="input-field col l12   ">
                  <input
                    type="email"
                    className="Validate"
                    placeholder="xyz@gmail.com"
                  />
                  <label
                    className="indigo-text text-darken-4"
                    htmlFor="last-name "
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12  ">
                  <textarea
                    placeholder="write your message"
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label
                    className="indigo-text text-darken-4"
                    htmlFor="textarea1"
                  >
                    Message
                  </label>
                </div>
                <div className="input-field col s12">
                  <p className="center">
                    <button className=" center indigo darken-4  btn btn-large  waves-effect waves-light ">
                      {" "}
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

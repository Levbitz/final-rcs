import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SectionCarousel from "../Components/Sections/SectionCarousel";
//import TeamSection from "./Sections/TeamSection.js";

import Horizontal from "views/Components/Sections/Horizontal";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Jobs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Logo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/Images/about_banner.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Jobs</h1>
              <h4>
                An excellent opportunity for self-motivated and passionate
                fundraisers for LifeBegins!
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="container white">
          <h2 className="center">our Employment Opponunitis</h2>
          <div className="row">
            <div className="col l7">
              <div
                style={{
                  paddingTop: 30,
                  paddingBottom: 30,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    An excellent opportunity for self-motivated and passionate
                    fundraisers for Sightsavers!
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                    }}
                  >
                    Sightsavers is an equal opportunist organization. Currently,
                    we have vacancies at Sightsavers for both freshers and
                    experienced fundraising individuals for our Mumbai and
                    Bangalore operations.
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                    }}
                  >
                    We offer a unique chance to help shape up careers in the
                    field of fundraising. In addition to an attractive
                    compensation package, also benefit from both personal and
                    professional growth.
                  </p>
                </div>
                <div>
                  <ul
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                    }}
                  >
                    <li>Tele-callers (fresher)</li>
                    <li>Tele-caller (experienced)</li>
                    <li>Face 2 Face (fresher) </li>
                    <li>Face 2 Face (experienced)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col l5">
              <div>
                <div style={{ padding: 10 }} className="card indigo darken-4">
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                      color: "#fff",
                    }}
                  >
                    Apply now If you are ready to add wings to your career in
                    the domain of fundraising then send in your resumes to
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                      color: "#fff",
                    }}
                  >
                    email@gmail.com or call toll free at 1800 419 6250.
                  </p>
                </div>
                <div style={{ padding: 10 }} className="card  indigo darken-4">
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                      color: "#fff",
                    }}
                  >
                    Apply now If you are ready to add wings to your career in
                    the domain of fundraising then send in your resumes to
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      lineHeight: 1.5,
                      color: "#fff",
                    }}
                  >
                    email@gmail.com or call toll free at 1800 419 6250.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="white">
        <Horizontal />
        <SectionCarousel />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Footer />
      </div>
    </div>
  );
}

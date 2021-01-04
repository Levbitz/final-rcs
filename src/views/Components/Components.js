import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/components.js";

//sections
//import About from "./Sections/About";
import Cause from "./Sections/Cause";
import Horizontal from "./Sections/Horizontal.js";
//import TestimonialCard from "./Sections/TestimonialCard";
import Testimonial from "./Sections/Testimonial.js";
import Xyz from "./Sections/Xyz.js";
import Blogs from "./Sections/Blogs.js";

///import Logo from "../../assets/Images/logo.png";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/Images/home.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Lorem, ipsum dolor.</h1>
                <h3 className={classes.subtitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  aliquam veritatis ab? Quia, culpa dolores reiciendis odit
                  minus at repellendus repellat dolorem esse placeat. Suscipit
                  culpa doloribus sed quaerat id.
                </h3>
                <button className="btn btn-large red hide-on-large-only">
                  DONATE
                </button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Horizontal />
        <Xyz />
      </div>
      <Cause />
      <Horizontal />
      <Testimonial />
      <SectionCarousel />
      <Blogs />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Footer styles={{ marginTop: 30 }} />
      </div>
    </div>
  );
}

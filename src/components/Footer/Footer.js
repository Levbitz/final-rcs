/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

import { Credit } from "../InfoArea/Credit";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Horizontal from "views/Components/Sections/Horizontal";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <div styles={{ marginTop: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <img
              className="responsive-img"
              src={require("assets/Images/logo.png")}
              alt=""
            />
          </div>
          <div className="col l4  s12 offset-l2 ">
            <span>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block} target="_blank">
                    <i class="fab fa-3x fa-facebook blue-text"></i>
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block} target="_blank">
                    <i className="fab fa-3x fa-whatsapp green-text"></i>
                  </a>
                </ListItem>

                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block} target="_blank">
                    <i className="fab fa-3x fa-youtube red-text"></i>
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block} target="_blank">
                    <i className="fab fa-3x fa-linkedin-in blue-text"></i>
                  </a>
                </ListItem>
              </List>
            </span>
          </div>
        </div>
      </div>
      <hr />

      <div className="container"></div>
      <div>
        <footer className="page-footer  grey lighten-2">
          <div className="container ">
            <div className="row">
              <div className="col l4  s12">
                <h3 className="grey-text text-darken-4">
                  When we empower to succeed , we all win
                </h3>
              </div>
              <div className="col l3 offset-l1  s12">
                <ul>
                  <li>
                    <Link className="black-text text-lighten-3" to="/jobs">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <a className="black-text text-lighten-3" href="#!">
                      News and Blogs
                    </a>
                  </li>
                  <li>
                    <a className="black-text text-lighten-3" href="#!">
                      contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3  offset-l1 s12">
                <ul>
                  <li>
                    <a className="black-text text-lighten-3" href="#!">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="black-text text-lighten-3" href="#!">
                      Cause
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <p className="left"> Lorem ipsum dolor sit amet.</p>
              <p className="right black-text">
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://levbitz.com/"
                  className={aClasses}
                  target="_blank"
                >
                  levbitz
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

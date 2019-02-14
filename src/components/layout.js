import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./bootstrap.min.css";
import "./layout.css";
import Navbar from "./Global/navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}{" "}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

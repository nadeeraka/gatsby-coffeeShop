import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/about",
        text: "about"
      }
    ]
  };

  navbarHandler = () => {};
  render() {
    return (
      <div>
        <h1>Hello from nav</h1>
      </div>
    );
  }
}

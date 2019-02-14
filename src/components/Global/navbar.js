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

  navbarHandler = () => {
    console.log("hello");
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light
"
        >
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon" />>
          </button>
          <div className={this.state.css}>
            <ul class="navbar-nav mx-auto">
              {this.state.links.map(link => {
                return (
                  <li className="nav-item " key={link.id}>
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                );
              })}
              <li class="nav-item  ml-sm-5">
                <i class="fas fa-cart-arrow-down" />{" "}
              </li>
            </ul>{" "}
          </div>
        </nav>
      </div>
    );
  }
}

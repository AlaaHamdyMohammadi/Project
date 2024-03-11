/* eslint-disable no-unused-vars */
import React from "react";
import "./scrollup.css";
import { Link } from "react-router-dom";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    // when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scrollup class
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <Link to="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
};

export default ScrollUp;

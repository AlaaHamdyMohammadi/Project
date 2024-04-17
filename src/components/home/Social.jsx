/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="home__social">
      <Link
        to="https://www.linkedin.com/in/alaahamdy25/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </Link>
      <Link
        to="https://github.com/AlaaHamdyMohammadi"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </Link>
      {/*<Link
        to="https://www.facebook.com/alaa.hamdy.3597"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-facebook"></i>
      </Link>*/}
      {/*<a href="" className="home__social-icon" target="_blank"></a>*/}
    </div>
  );
};

export default Social;

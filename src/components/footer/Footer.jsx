/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alaa</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <Link
            to="https://www.linkedin.com/in/alaahamdy25/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </Link>
          <Link
            to="https://github.com/AlaaHamdyMohammadi"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </Link>
          <Link
            to="https://www.facebook.com/alaa.hamdy.3597"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </Link>
        </div>

        <span className="footer__copy">&#169; Alaa. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

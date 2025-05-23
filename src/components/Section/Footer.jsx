import React from "react";
import "../../styles/Footer.css";
import config from "../../config.json";

import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer_logo">
          Othman Saleh
        </a>

        <ul className="permalinks">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="social_media">
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
         
         
        
         
        </div>
        <div className="rocket_container">
          <a href={"/#"} className="rocket">
            <IoMdRocket className="rocket-img" />
          </a>
          <p className="rocket_p">Beam me up, Shawty!</p>
        </div>
        <div className="copyright">
          <small>&copy; Othman. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

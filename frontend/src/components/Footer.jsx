import React from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <img className="logo_img left" src="logo.png" alt="logo" />

          <div className="right">
            <p>
              <HiLocationMarker /> 115 B Mittal Court, Nariman Point, Mumbai –
              21{" "}
            </p>

            <p>
              <HiPhone /> +91 99200 33331 / 022 43154000
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="right">
            <p>All Rights Reserved By Skin&You.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

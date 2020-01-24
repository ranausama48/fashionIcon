import React, { Component } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          padding: "15px 0px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/usamaasif48/"
            className="a-social_icon"
          >
            <span className="footer_icons">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            target="_blank"
            href="https://github.com/ranausama48"
            className="a-social_icon"
          >
            <span className="footer_icons">
              <FaGithub />
            </span>
          </a>

          <a
            target="_blank"
            href="https://twitter.com/ranausamaasif"
            className="a-social_icon"
          >
            <span className="footer_icons">
              <FaTwitter />
            </span>
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/"
            className="a-social_icon"
          >
            <span className="footer_icons">
              <FaFacebookF />
            </span>
          </a>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "0px"
            }}
          >
            FashionIcon &copy; 2020
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

import React from "react";
import Logo from "../../Assets/images/LogoRe-work3.svg";
import Twitter from "../../Assets/images/Twitter.png";
import Insta from "../../Assets/images/Insta.png";
import Discord from "../../Assets/images/Discord.png";
import Etherscan from "../../Assets/images/etherscan.png";
import Send from "../../Assets/images/Send.png";

export default function Footer() {
  return (
    <footer>
      <svg
        className="footer_waves"
        xml="http://www.w3.org/2000/svg"
        link="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="#04befe30" />
          <use href="#gentle-wave" x="48" y="3" fill="#04befe50" />
          <use href="#gentle-wave" x="48" y="5" fill="#04befe93" />
          <use href="#gentle-wave" x="48" y="7" fill="#04befe" />
        </g>
      </svg>
      <div className="container">
        <div className="footer_main">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer_logo">
                    <img src={Logo} style={{ borderRadius: "50%" }} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="footer_social">
                    <a href="https://twitter.com/NarwhalNFTs">
                      <img
                        src={Twitter}
                        width="32px"
                        height="32px"
                        alt="twitter"
                      />
                    </a>
                    <a href="https://instagram.com/NarwhalNFTs">
                      <img src={Insta} width="32px" height="32px" alt="insta" />
                    </a>
                    <a href="https://discord.gg/WzdhJSfxDQ">
                      <img
                        src={Discord}
                        width="32px"
                        height="32px"
                        alt="discord"
                      />
                    </a>
                    <a href="https://etherscan.io/address/0xf3a67ABD81E985d8E1e20C0Ac290a251442fBC99#writeContract">
                      <img
                        src={Etherscan}
                        width="32px"
                        height="32px"
                        alt="Etherscan"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="get_update">
                <div className="get_update_header">
                  <span>Get the latest updates about nautical.</span>
                  <a href="">
                    <img src={Send} alt="" />
                  </a>
                </div>
                <input type="text" placeholder="Enter you email" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="copy_right">
          <span>
            Copyright ©2021 <a href="">Nautical Narwhals</a>. All rights
            reserved. Designed & Developed by Purple Brush Digital Solutions
          </span>
          {/* <div className="privacy">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

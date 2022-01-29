import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../Assets/MythicalNarwhal/HORNS.gif";
import image2 from "../../Assets/MythicalNarwhal/HYDRA.gif";
import image3 from "../../Assets/MythicalNarwhal/Knight.gif";
import image4 from "../../Assets/MythicalNarwhal/Narwhal Animated.gif";
import image5 from "../../Assets/MythicalNarwhal/POSEIDON.gif";
import image6 from "../../Assets/MythicalNarwhal/wizpixel.gif";
import image7 from "../../Assets/MythicalNarwhal/ZEUS.gif";
import image8 from "../../Assets/HADES.gif";
import image9 from "../../Assets/HORNS.gif";
import image10 from "../../Assets/HYDRA.gif";
import image11 from "../../Assets/Knight.gif";
import image12 from "../../Assets/NarwhalAnimated.gif";
import image13 from "../../Assets/NARWHALMUK.gif";
import image14 from "../../Assets/NARWHALROBOT.gif";
import image15 from "../../Assets/Narwhaltasty.gif";
import image16 from "../../Assets/POSEIDON.gif";
import image17 from "../../Assets/wizpixel.gif";
import image18 from "../../Assets/ZEUS.gif";
import Marquee from "react-fast-marquee";
import { Section } from "react-scroll-section";

export default function CommingSoon() {
  return (
    <Section className="comming_soon" id="commingsoon">
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <h1>Mythical Narwhals coming soon...</h1>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <h4>Only</h4>
            <h4> 300 will</h4>
            <h4> ever exist</h4>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "grid",
              marginTop: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="coming_soon_content">
              <ul className="comming_soon_points">
                <li>
                  <h4>Special utility includes</h4>
                </li>
                <li style={{ listStyleType: "initial" }}>
                  <span>5x the staking rewards</span>
                </li>
                <li style={{ listStyleType: "initial" }}>
                  <span>5 votes in the DAO</span>
                </li>
                <li style={{ listStyleType: "initial" }}>
                  <span>Priority WL with parnerships</span>
                </li>
                <li style={{ listStyleType: "initial" }}>
                  <span>And much more</span>
                </li>
                {/* <li>
                  <a href="">Join our discord to earn your free mint</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Marquee speed={40} direction="right" gradient={false}>
              <div className="imagefield">
                <img
                  src={image8}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image9}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image10}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image11}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image12}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image13}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image14}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image15}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image16}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image17}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
              <div className="imagefield">
                <img
                  src={image18}
                  width="200px"
                  style={{ borderRadius: "20px" }}
                  alt="image1"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </Section>
  );
}

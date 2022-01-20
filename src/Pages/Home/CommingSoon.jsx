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
export default function CommingSoon() {
  return (
    <section className="comming_soon">
      <svg
        className="comming_soon_waves_top"
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
          <use href="#gentle-wave" x="48" y="0" fill="#b3ebff30" />
          <use href="#gentle-wave" x="48" y="3" fill="#b3ebff50" />
          <use href="#gentle-wave" x="48" y="5" fill="#b3ebff90" />
          <use href="#gentle-wave" x="48" y="7" fill="#d4f4ff" />
        </g>
      </svg>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-2">
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              {/* <Carousel
                autoFocus={true}
                autoPlay={true}
                centerMode={true}
                infiniteLoop={true}
                transitionTime={600}
                showStatus={true}
                showIndicators={true}
                swipeable={true}
                interval={3000}
              > */}
              <img src={image1} width="200px" alt="image1" />
              {/* </Carousel> */}
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "5px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image2} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "5px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image3} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "5px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image4} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "5px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image5} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "5px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image7} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image3} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image1} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image4} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image3} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image1} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-2" style={{ marginTop: "15px" }}>
            <div className="comming_soon_box" style={{ borderRadius: "10px" }}>
              <img src={image6} width="200px" alt="image1" />
            </div>
          </div>
          <div className="col-md-12" style={{ marginTop: "40px" }}>
            <div className="coming_soon_content">
              <h2>Mythical Narwhals coming soon...</h2>
              <h2>Only 300 will ever exist.</h2>
              <h4>Special utility includes:</h4>
              <ul className="comming_soon_points">
                <li>5x the staking rewards</li>
                <li>5 votes in the DAO</li>
                <li>Priority WL with parnerships</li>
                <li>And much more</li>
                <li>
                  <a href="">Join our discord to earn your free mint</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="comming_soon_waves_bottom"
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
          <use href="#gentle-wave" x="48" y="0" fill="#b3ebff30" />
          <use href="#gentle-wave" x="48" y="3" fill="#b3ebff50" />
          <use href="#gentle-wave" x="48" y="5" fill="#b3ebff90" />
          <use href="#gentle-wave" x="48" y="7" fill="#d4f4ff" />
        </g>
      </svg>
    </section>
  );
}

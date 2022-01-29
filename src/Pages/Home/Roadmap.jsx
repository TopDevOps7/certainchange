import React from "react";
import { Section } from "react-scroll-section";
import RoadmapIcon1 from "../../Assets/images/roadmap1.png";
import RoadmapIcon2 from "../../Assets/images/roadmap2.png";
import RoadmapIcon3 from "../../Assets/images/roadmap3.png";
import RoadmapIcon4 from "../../Assets/images/roadmap4.png";
import RoadmapIcon5 from "../../Assets/images/roadmap5.png";
import RoadmapIcon6 from "../../Assets/images/roadmap6.png";

function Roadmapbox(props) {
  return (
    <div className={`roadmap_box mt-5 ${props.class}`}>
      <div className="roadmap_image">
        <img src={props.Icon} alt="" />
      </div>
      <div className="roadmap_contnet">
        <div className="roadmap_title">{props.Title}</div>
        <div className="roadmap_desc">{props.Desc}</div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <Section className="roadmap" id="roadmap">
      <div className="curved-div" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,149.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <h3 className="section_title">Roadmap</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="roadmap_box mt-5 left_box">
              <div className="roadmap_image">
                {/* <img src={RoadmapIcon1} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  2%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  20x 1hr sessions with Winkchronicity Technology Detox (our
                  first launchpad partner)
                </div>
                {/* <div className="roadmap_title">Merch portal opens</div>
                <div className="roadmap_desc">
                  <ul>
                    <li>Discount for Nautical Narwhal holders</li>
                    <li>
                      Free merch for Mythical Narwhals, and heavier discount
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="roadmap_box mt-5 left_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon2} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  10%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">2x Doge Pound NFT raffles.</div>
              </div>
            </div>
            <div className="roadmap_box mt-5 left_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon3} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  40%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  Give 50k to cleaning the world&#39;s oceans.
                </div>
              </div>
            </div>
            <div className="roadmap_box mt-5 left_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon5} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  80%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  Start development of our P2E game
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap_box mt-5 right_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon4} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  5%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  $10k to Prostate Cancer Research.
                </div>
              </div>
            </div>
            <div className="roadmap_box mt-5 right_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon5} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  20%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  10 Narwhal tattoos will be raffled off to minters.
                </div>
              </div>
            </div>
            <div className="roadmap_box mt-5 right_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon6} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  60%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  Launch $TUSK, with our liquidity pool and staking portal.
                </div>
              </div>
            </div>
            <div className="roadmap_box mt-5 right_box">
              <div className="roadmap_image" style={{ textAlign: "center" }}>
                {/* <img src={RoadmapIcon2} alt="" /> */}
                <span style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                  100%
                </span>
              </div>
              <div className="roadmap_contnet">
                <div className="roadmap_title">
                  Begin the formation of NN DAO. 80 ETH will be put into a
                  community treasury.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

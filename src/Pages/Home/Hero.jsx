import React from "react";
// import CountUp from 'react-countup';
import CountUp from "react-countup";
import Heroimg from "../../Assets/images/hero.jpg";
export default function Hero() {
  return (
    <section className="hero_section" id="hero_section">
      <div className="container" style={{ display: "flex" }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="hero_content">
              <div className="hero_title">
                5757 Nautical Narwhals surfacing on the Ethereum Blockchain
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="svgdive" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#47CFFE"
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

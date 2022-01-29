import React from "react";
import { Section } from "react-scroll-section";

export default function Ourvision() {
  return (
    <Section className="ourvision" id="ourvision">
      {/* <div className="curved-div" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6DC9F3"
            fill-opacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,149.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      <div className="container">
        <h3 className="section_title">Our vision</h3>
        <div className="ourvision_content">
          We strive to create an inclusive community who accepts others for who
          they are and encourages them to grow bigger than they imagine
          themselves to be. This happens through: engaging in meaningful
          dialogue both in and out of the NFT space, giving to those who are
          truly ready to receive and equipping others to become leaders
          themselves in the NFT space and outside of it.
        </div>
      </div>
    </Section>
  );
}

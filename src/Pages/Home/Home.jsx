import React from "react";
import Navigation from "../../Components/Navigation";
import Hero from "./Hero";
import "./Home.css";
import Mint from "./Mint";
import Ourvision from "./Ourvision";
import Roadmap from "./Roadmap";
import Ourteam from "./Ourteam";
import Joinus from "./Joinus";
import Footer from "./Footer";
import Gallery from "./Gallery";
import CommingSoon from "./CommingSoon";

import { ScrollingProvider } from "react-scroll-section";

export default function Home() {
  return (
    <React.Fragment>
      <ScrollingProvider>
        <Navigation />
        <Hero />
        <Mint />
        <Ourvision />
        <Roadmap />
        <Ourteam />
        <Gallery />
        <CommingSoon />
        {/* <Joinus /> */}
        <Footer />
      </ScrollingProvider>
    </React.Fragment>
  );
}

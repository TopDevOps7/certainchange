import { React, useState } from "react";
import { Section } from "react-scroll-section";
import Dots from "../../Assets/images/dots.png";
import Navigation from "../../Components/Navigation";
import Topcollection from "./Topcollection";
import Staking from "./Staking";
import { Link } from "react-router-dom";
import ArrowRight from "../../Assets/images/ArrowRight.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import image1 from "../../Assets/Gallery Images/1.jpeg";
import image2 from "../../Assets/Gallery Images/2.jpeg";
import image3 from "../../Assets/Gallery Images/3.jpeg";
import image4 from "../../Assets/Gallery Images/4.jpeg";
import image5 from "../../Assets/Gallery Images/5.jpeg";
import image6 from "../../Assets/Gallery Images/6.jpeg";
import image7 from "../../Assets/Gallery Images/7.jpeg";
import image8 from "../../Assets/Gallery Images/8.jpeg";
import image9 from "../../Assets/Gallery Images/9.jpeg";
import image10 from "../../Assets/Gallery Images/10.jpeg";
import image11 from "../../Assets/Gallery Images/11.jpeg";
import image12 from "../../Assets/Gallery Images/12.jpeg";
import image13 from "../../Assets/Gallery Images/13.jpeg";
import image14 from "../../Assets/Gallery Images/14.jpeg";
import image15 from "../../Assets/Gallery Images/15.jpeg";
import image16 from "../../Assets/Gallery Images/16.jpeg";
import image17 from "../../Assets/Gallery Images/17.jpeg";
import image18 from "../../Assets/Gallery Images/18.jpeg";
import image19 from "../../Assets/Gallery Images/19.jpeg";
import image20 from "../../Assets/Gallery Images/20.jpeg";
import image21 from "../../Assets/Gallery Images/21.jpeg";
import image22 from "../../Assets/Gallery Images/22.jpeg";
import image23 from "../../Assets/Gallery Images/23.jpeg";
import image24 from "../../Assets/Gallery Images/24.jpeg";
import image25 from "../../Assets/Gallery Images/25.jpeg";
import image26 from "../../Assets/Gallery Images/26.jpeg";
import image27 from "../../Assets/Gallery Images/27.jpeg";
import image28 from "../../Assets/Gallery Images/28.jpeg";
import image29 from "../../Assets/Gallery Images/29.jpeg";
import image30 from "../../Assets/Gallery Images/30.jpeg";

function Gallerybox(props) {
  return (
    <div className="gallery_box">
      <div className="gallery_box_header">
        <div className="header_color_dot">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="option_box">
          <img src={Dots} alt="" />
        </div>
      </div>
      <div className="gallery_bid">
        <div className="gallery_bid_heading">
          <h5>{props.title}</h5>
          <span>{props.tagline}</span>
        </div>
        <div className="gallery_bid_content">
          <span className="gallery_bid_content_number">
            {props.price}
            <span>{props.currencyname}</span>
          </span>
          {/* <button type="button">Place a Bid</button> */}
        </div>
      </div>
    </div>
  );
}
export default function Gallery() {
  const imagearray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
  ];

  const data = [
    {
      id: "1",
      category: "art",
      title: "Guiltless Riddle",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
    {
      id: "2",
      category: "game",
      title: "Fall of Surprise",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
    {
      id: "3",
      category: "video",
      title: "Leadership of Wonder",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
    {
      id: "4",
      category: "photography",
      title: "Onerous Voyage",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
    {
      id: "5",
      category: "art",
      title: "Honor of Amusement",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
    {
      id: "6",
      category: "music",
      title: "Battles of Romance",
      tagline: "Currents Bid",
      price: "1.11",
      currencyname: "ETH",
    },
  ];
  const [item, setItem] = useState(data);
  const [activButton, setActivButton] = useState("");

  const Filteritem = (filtItem) => {
    const filtereditem = data.filter((Curritem) => {
      return Curritem.category == filtItem;
    });
    setItem(filtereditem);
    setActivButton(filtItem);
  };
  const Filterall = () => {
    setItem(data);
    setActivButton("");
  };
  const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: "80px",
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <ArrowRightAltIcon style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <ArrowRightAltIcon style={{ fontSize: "50px" }} />
    </button>
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* <Navigation /> */}
      <Section className="gallery mt-5" id="gallery">
        <div className="container mt-4">
          <h2>Gallery</h2>
          <Carousel
            responsive={responsive}
            ssr={true}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            autoPlay={true}
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {imagearray.map((value, i) => (
              <img key={i} src={value} height="250px" alt="image" />
            ))}
          </Carousel>
        </div>
      </Section>
      {/* <Topcollection /> */}
      {/* <Staking /> */}
    </>
  );
}

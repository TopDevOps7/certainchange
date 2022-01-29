import React from "react";
import { Section } from "react-scroll-section";
import Teamimg from "../../Assets/images/ourteam.jpg";
import AdaptiveCode from "../../Assets/images/adaptive-code.jpg";
import Filip from "../../Assets/images/filip.png";
import Priya from "../../Assets/images/priya.jpg";
import Vongola from "../../Assets/images/vongola.png";
import Lang from "../../Assets/images/lang.png";
import Hanzblade from "../../Assets/images/hanzblade.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function Team(props) {
  return (
    <div className="col-md-12">
      <div className="ourteam_box">
        <div className={`ourteam_box_img ${props.class}`}>
          <img src={props.image} alt="" />
        </div>
        <div className="ourteam_box_content">
          <h3 className="ourteam_box_content_name">{props.name}</h3>
          <h5 className="ourteam_box_content_position">{props.position}</h5>
          <span className="ourteam_box_content_company">{props.company}</span>
          <a
            href={`https://twitter.com/${props.Twitter}`}
            target="_blank"
            className="ourteam_box_content_at"
          >
            {props.Twitter}
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Ourteam() {
  return (
    <Section className="ourteam" id="ourteam">
      <div className="curved-div" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04befe"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,149.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <h3 className="section_title">Our Team</h3>
      <div className="container mt-4">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Team
                image={Hanzblade}
                name="Hanz Blade"
                position="Project/Marketing Lead"
                Twitter="@HanzBlade"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={4}>
              <Team
                className="ourteam_box_img2"
                image={AdaptiveCode}
                name="Adaptive Code"
                style={{ width: "100%" }}
                position="Back end developers"
                company="Adaptive Code"
              />
            </Grid>
            <Grid item md={4}>
              <Team
                className="ourteam_box_img3"
                image={Priya}
                name="Priya Jayaprakash"
                style={{ width: "100%" }}
                position="Front end developer"
                company=""
              />
            </Grid>
            <Grid item md={4}>
              <Team
                className="ourteam_box_img4"
                image={Filip}
                name="Filip Cvijovic"
                position="Discord Manager"
                company="phill#6314 (Discord)"
              />
            </Grid>
            <Grid item md={4}>
              <Team
                className="ourteam_box_img4"
                image={Vongola}
                name="Vongola"
                Twitter="@ArtsyMan668"
                position="Advisor"
              />
            </Grid>
            <Grid item md={4}>
              <Team
                className="ourteam_box_img4"
                image={Lang}
                name="Lang Tambun"
                Twitter="@LangT_21"
                position="Artist"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="svgdive" style={{ width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04befe"
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Section>
  );
}

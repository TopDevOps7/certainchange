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
    </Section>
  );
}

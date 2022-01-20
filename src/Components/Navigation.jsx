import { React, useState } from "react";
import "./Navigation.css";
import Logo from "../Assets/images/LogoRe-work3.svg";
import "boxicons";
import {
  ScrollingProvider,
  Section,
  useScrollSection,
} from "react-scroll-section";
import { Router, Link, NavLink, useLocation } from "react-router-dom";
import useWeb3Integration from "../hooks/useWeb3Integration.js";
import { AppBar, Tooltip, Button } from "@mui/material";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  AccountBalanceWallet,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";

export default function Navigation(props) {
  const [mintAmount, setMintAmount] = useState(0);
  const [
    account,
    provider,
    isPaused,
    isPresale,
    web3provider,
    onConnect,
    resetApp,
    mintedAmount,
    mintPreSale,
    mintPublicSale,
  ] = useWeb3Integration(mintAmount);
  const mintSection = useScrollSection("mint");
  const ourvisionSection = useScrollSection("ourvision");
  const roadmapSection = useScrollSection("roadmap");
  const ourteamSection = useScrollSection("ourteam");
  const gallerySection = useScrollSection("gallery");
  const stackingSection = useScrollSection("staking");

  const location = useLocation();
  const { pathname } = location;
  const CurrentLocation = pathname.split("/");
  const [toggle, setToggle] = useState(false);
  const handleclick = () => {
    console.log("ok");
  };
  const OpenToggle = () => {
    setToggle(true);
  };
  const CloseToggle = () => {
    setToggle(false);
  };
  return (
    <section className="navigation" id="navigation">
      <div className="container">
        <div className="navigation_container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                md={9}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {CurrentLocation[1] === "home" || CurrentLocation[1] === "" ? (
                  <div className="logo">
                    <img
                      src={Logo}
                      alt=""
                      style={{ borderRadius: "50%", marginLeft: "10px" }}
                    />
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="links">
                  {CurrentLocation[1] === "home" ||
                  CurrentLocation[1] === "" ? (
                    <ul>
                      <li
                        onClick={mintSection.onClick}
                        selected={mintSection.selected}
                      >
                        Mint
                      </li>
                      <li
                        onClick={ourvisionSection.onClick}
                        selected={ourvisionSection.selected}
                      >
                        Our Vision
                      </li>
                      <li
                        onClick={roadmapSection.onClick}
                        selected={roadmapSection.selected}
                      >
                        Roadmap
                      </li>
                      <li
                        onClick={ourteamSection.onClick}
                        selected={ourteamSection.selected}
                      >
                        Our team
                      </li>
                      <li
                        onClick={gallerySection.onClick}
                        selected={gallerySection.selected}
                      >
                        {/* <NavLink exact to="/Gallery">Gallery</NavLink> */}
                        Gallery
                      </li>
                      <li
                        onClick={stackingSection.onClick}
                        selected={stackingSection.selected}
                      >
                        {/* <a href="/Gallery/#staking">Staking</a> */}
                        Staking
                      </li>
                      <li>
                        <NavLink key="nav" exact to="/whitepaper">
                          White Paper
                        </NavLink>
                      </li>
                      {/* <li onClick={stackingSection.onClick} selected={stackingSection.selected}>
                                    Staking
                                </li> */}
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <NavLink to="/home">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/whitepaper">White Paper</NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </Grid>
              <Grid
                item
                md={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px",
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ ml: 2 }}
                >
                  <div className="mobile_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </IconButton>
                {CurrentLocation[1] === "home" || CurrentLocation[1] === "" ? (
                  <div
                    className="social_links"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <box-icon
                        color="#fff"
                        type="logo"
                        name="twitter"
                      ></box-icon>
                    </a>
                    {web3provider ? (
                      <Tooltip title="Disconnect">
                        <Button color="warning" onClick={resetApp}>
                          <AccountBalanceWallet titleAccess="Wallet Address" />
                          <Typography variant="subtitle1">
                            {account.slice(0, 7)}...{account.slice(-4)}
                          </Typography>
                        </Button>
                      </Tooltip>
                    ) : (
                      <button className="connect_wallet" onClick={onConnect}>
                        Connect wallet
                      </button>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Grid>
          </Box>

          {/* <div className={`Mobile_Links ${toggle ? "active" : ""}`}>
            {CurrentLocation[1] === "home" || CurrentLocation[1] === "" ? (
              <ul>
                <li
                  onClick={mintSection.onClick}
                  selected={mintSection.selected}
                >
                  Mint
                </li>
                <li
                  onClick={ourvisionSection.onClick}
                  selected={ourvisionSection.selected}
                >
                  Our Vision
                </li>
                <li
                  onClick={roadmapSection.onClick}
                  selected={roadmapSection.selected}
                >
                  Roadmap
                </li>
                <li
                  onClick={ourteamSection.onClick}
                  selected={ourteamSection.selected}
                >
                  Our team
                </li>
                <li
                  onClick={gallerySection.onClick}
                  selected={gallerySection.selected}
                >
                  Gallery
                </li>
                <li
                  onClick={stackingSection.onClick}
                  selected={stackingSection.selected}
                >
                  Staking
                </li>
                <li>
                  <NavLink exact to="/whitepaper">
                    White Paper
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/whitepaper">White Paper</NavLink>
                </li>
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

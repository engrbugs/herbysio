/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback, useRef } from "react";
import profilePicture from "./assets/images/profile.jpg";
import ghLogo from "./assets/images/gh-logo.png";
import fccLogo from "./assets/images/fcc-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  Card,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import EmailMe from "./components/email-icon.js";
import FooterIcon from "./components/footer-icon";
import ScrollDownArrow from "./components/scroll-down-arrow.js";
import DiagonalSection from "./components/diagonal-section.js";
import "./components/tool-tip.css";

export const WEBSITE_EMAIL = "engrherbysio@gmail.com";

function App() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App grid">
      {/* <header className="container-fluid welcome-section p-0 m-0">
        <div className="mail">
          <p className="tooltip--left" data-tooltip="email me">
            <EmailMe />
          </p>
        </div>

        <DiagonalSection />
        <div className="row text-align-center justify-content-center m-0">
          <div className="image-cropper">
            <img className="profile-pic" src={profilePicture} alt="" />
          </div>
          <div className="container-fluid m-5">
            <div className="profile-name row text-align-center justify-content-center">
              <h5>
                <strong>Hello</strong>, my name is <strong>Herby Sio.</strong>
              </h5>
            </div>
            <div className="profile-engineer row text-align-center justify-content-center">
              <h5>
                an <strong>Engineer.</strong>
              </h5>
            </div>
            <div className="row float-right">
              <h5>Machine Learning, AI, and Mathematics enthusiast.</h5>
            </div>
            <div className="arrow">
              <ScrollDownArrow />
            </div>
          </div>
        </div>
      </header> */}
      <section id="coming-soon" className="coming-soon-section">
        <div className="container-fluid">
          <div className="row text-align-center justify-content-center">
            <p className="pt-5 my-0 pb-0 h-auto d-inline-block pound">#</p>
            <p className="pt-5 my-0 pb-0 h-auto d-inline-block underconstruction">
              underconstruction
            </p>
          </div>
          <div className="row text-align-center justify-content-center pt-0 mt-2">
            <h1>Coming Soon</h1>
          </div>
          <div className="row text-align-center justify-content-center mt-2 checkout">
            <p>Check out online portfolios:</p>
          </div>

        <div className="row text-align-center justify-content-center">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Card style={{ width: "24rem", height: "16rem" }}>
                <Card.Img variant="top" src={fccLogo} 
                alt="FCC logo"/>
                <Card.Body>
                  <Card.Title>freeCodeCamp</Card.Title>
                  <Card.Text>
                  Learn to code at home. Build projects. Earn certifications.
                  </Card.Text>
                  <Button variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
              
            </Carousel.Item>
            <Carousel.Item>
            <Card style={{ width: "24rem", height: "16rem" }}>
                <Card.Img variant="top" src={ghLogo} alt="GitHub logo"/>
                <Card.Body>
                  <Card.Title>GitHub</Card.Title>
                  <Card.Text>
                  Open source repositories
                  </Card.Text>
                  <Button variant="primary">Open GitHub</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
      </section>
      <footer className="container-fluid row m-0">
        <FooterIcon />
      </footer>
    </div>
  );
}

export default App;

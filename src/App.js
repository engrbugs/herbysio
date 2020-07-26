import React, { useState } from "react";
import profilePicture from "./assets/images/profile.jpg";
import ghLogo from "./assets/images/gh-logo.png";
import fccLogo from "./assets/images/fcc-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Button } from "react-bootstrap";
import EmailMe from "./components/email-icon.js";
import FooterIcon, { FooterIconMobile } from "./components/footer-icon";
import ScrollDownArrow from "./components/scroll-down-arrow.js";
import DiagonalSection from "./components/diagonal-section.js";
import "./components/tool-tip.css";

export const WEBSITE_EMAIL = "engrherbysio@gmail.com";

function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App grid">
      <header className="container-fluid welcome-section p-0 m-0">
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
      </header>
      <section id="coming-soon" className="coming-soon-section">
        <div className="container-fluid">
          <div className="row text-align-center justify-content-center">
            <p className="h-auto d-inline-block pound">#</p>
            <p className="h-auto d-inline-block underconstruction">
              underconstruction
            </p>
          </div>
          <div className="row text-align-center justify-content-center">
            <h1>Coming Soon</h1>
          </div>
          <div className="row text-align-center justify-content-center mt-2 checkout">
            <p>Check out online portfolios:</p>
          </div>

          <div className="row text-align-center justify-content-center">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Card style={{ width: "30vw", height: "42vh" }}>
                  <Card.Img variant="top" src={fccLogo} alt="FCC logo" />
                  <Card.Body>
                    <Card.Title>freeCodeCamp</Card.Title>
                    <Card.Text>
                      Learn to code at home. Build projects.
                      <br />
                      Earn certifications.
                    </Card.Text>
                    <Button
                      href="https://www.freecodecamp.org/engrbugs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      View Profile
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "30vw", height: "42vh" }}>
                  <Card.Img variant="top" src={ghLogo} alt="GitHub logo" />
                  <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    <Card.Text>Open source repositories.</Card.Text>
                    <Button
                      href="https://github.com/engrbugs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Open GitHub
                    </Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <footer className="container-fluid row m-0">
        <FooterIconMobile />
      </footer>
       */}
             <footer className="container-fluid row m-0">
        <FooterIcon />
      </footer>
    </div>
  );
}

export default App;

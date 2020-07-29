import React, { useState } from "react";
import profilePicture from "./assets/images/profile.jpg";
import ghLogo from "./assets/images/gh-logo.jpg";
import fccLogo from "./assets/images/fcc-logo.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Button } from "react-bootstrap";
import EmailMe, { EmailMeMobile } from "./components/email-icon.js";
import FooterIcon, { FooterIconMobile } from "./components/footer-icon";
import ScrollDownArrow from "./components/scroll-down-arrow.js";
import DiagonalSection from "./components/diagonal-section.js";
import "./components/tool-tip.css";
import robot from "./assets/images/machine-learning.svg";
import abacus from "./assets/images/abacus.svg";


export const WEBSITE_EMAIL = "engrherbysio@gmail.com";

function App() {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App grid p-0 m-0">
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
              <div className="pf-hello-only d-block">Hello,</div>
              <h5>
                <strong>Hello</strong>, my name is <strong>Herby Sio.</strong>
              </h5>
            </div>
            <div className="pf-wo-hello row text-align-center justify-content-center">
              <h5>
                my name is <strong>Herby Sio.</strong>
              </h5>
            </div>
            <div className="profile-engineer row text-align-center justify-content-center">
              <h5>
                an <strong>Engineer.</strong>
              </h5>
            </div>
            <div className="profile-ml row float-right">
              <h5>Machine Learning, AI, and Mathematics enthusiast.</h5>
            </div>
            <div className="arrow">
              <ScrollDownArrow />
            </div>
          </div>
        </div>
      </header>
      <header className="container-fluid welcome-section-mobile p-0 m-0">
        <div className="profile-name-mobile row text-align-left justify-content-left p-0 m-0 pl-1 ml-2 h-auto pt-1">
          <h2 className="p-0 m-0">HERBY SIO</h2>
        </div>
        <div className="profile-engineer-mobile row text-align-left justify-content-left p-0 m-0 pl-1 mt-0 ml-2">
          <div>{`{`}</div>
          <div className="this-blue-mobile">this</div>
          <div>.Engineer{`}`} ❤️ (</div>
          <div className="profile-engineer-mobile-img pl-2">
            <img src={robot} alt="ML" />
          </div>
          <div className="pl-2" style={{ color: "#fff" }}>
            +
          </div>
          <div className="profile-engineer-mobile-img pl-2">
            <img src={abacus} alt="Math" />
          </div>
          <div className="pl-2">)</div>
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
          <div className="row text-align-center justify-content-center checkout">
            <p>Check out online portfolios:</p>
          </div>
          <div className="row text-align-center justify-content-center">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Card>
                  <a
                    className="card-image-href"
                    href="https://www.freecodecamp.org/engrbugs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin"
                  >
                    <Card.Img variant="top" src={fccLogo} alt="FCC logo" />
                  </a>
                  <Card.Body>
                    <Card.Title>freeCodeCamp</Card.Title>
                    <Card.Text>
                      Learn to code at home. Build projects. Earn
                      certifications.
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
                <Card>
                  <a
                    className="card-image-href"
                    href="https://github.com/engrbugs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin"
                  >
                    <Card.Img variant="top" src={ghLogo} alt="GitHub logo" />
                  </a>
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
          <div className="mail-mobile row m-0">
            <EmailMeMobile />
          </div>
          <div className="footer-mobile row m-0">
            <FooterIconMobile />
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

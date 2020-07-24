import React, { useState, useEffect, useCallback } from "react";
import profilePicture from "./assets/images/profile.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailMe from "./components/email-icon.js";
import FooterIcon from "./components/footer-icon";
import ScrollDownArrow from "./components/scroll-down-arrow.js"
import DiagonalSection from "./components/diagonal-section.js"

export const WEBSITE_EMAIL = "engrherbysio@gmail.com";

function App() {
  return (
    <div className="App grid">
      <header className="container-fluid welcome-section p-0 m-0">
        <div className="mail" title="email me">
          <EmailMe />
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
          <div className="row text-align-center justify-content-center underconstruction">
            <p className="pt-5 my-0 pb-0 h-auto d-inline-block">#</p>
            <p className="pt-5 my-0 pb-0 h-auto d-inline-block">underconstruction</p>
          </div>
          <div className="row text-align-center justify-content-center pt-0 mt-0">
            <h1>Coming Soon</h1>
          </div>
          <div className="row text-align-center justify-content-center">
            <p>Check out online portfolios:</p>
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

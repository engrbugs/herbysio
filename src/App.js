/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect, useCallback } from "react";
import profilePicture from "./assets/images/profile.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailMe from "./components/email-icon.js";
import FooterIcon from "./components/footer-icon";

export const WEBSITE_EMAIL = "engrherbysio@gmail.com";

function App() {
  return (
    <div className="App grid">
      <header className="container-fluid welcome-section">
        <div className="mail" title="email me">
          <EmailMe />
        </div>
        {/* diagonal section  */}
        <div className="section row"></div>
        {/* diagonal section  */}
        <div className="row text-align-center justify-content-center">
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
              <a
                href="#coming-soon-section"
                className="scroll-down-link scroll-down-arrow"
                aria-label="scroll-down"
              ></a>
            </div>
          </div>
        </div>
      </header>
      <section id="coming-soon-section" className="coming-soon-section">
        <div>
          <h1>
            Edit <code>src/App.js</code> and sasddve to reload.
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </section>
      <footer className="container-fluid row m-0">
        <FooterIcon />
      </footer>
    </div>
  );
}

export default App;

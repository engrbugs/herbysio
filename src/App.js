import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import profilePicture from "./assets/images/profile.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function EmailMe() {
  return (
    <svg
      version="1.1"
      id="mail-icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      stroke-width="5%"
      x="0px"
      y="0px"
      width="50px"
      height="50px"
      viewBox="96.3 -4.7 45.1 52.2"
      style={{ accumulate: "new 96.3 -4.7 45.1 46.2;" }}
      xmlSpace="preserve"
    >
      <path
        class="st0"
        stroke="white"
        d="M138.2,10.5H99.5c-1.7,0-3.1,1.4-3.1,3.1v24.8c0,1.7,1.4,3.1,3.1,3.1h38.7c1.7,0,3.1-1.4,3.1-3.1V13.6
	C141.3,11.9,139.9,10.5,138.2,10.5z"
      />
      <path
        class="st0"
        d="M125.6,30.7c-3.7-2.6-6.6-4.6-6.8-4.7l0,0L125.6,30.7z"
      />
      <path
        id="env-lid"
        class="st0"
        d="M118.9,26L118.9,26c0,0,16-11.1,21.4-14.8c-0.5-0.5-1.2-0.8-2-0.8H99.5c-0.8,0-1.5,0.3-2,0.8
	L118.9,26L118.9,26z"
      />
      <path
        id="env-paper"
        class="st1"
        d="M135.8,34.2h-33.9c-1.3,0-2.4-1.1-2.4-2.4V0.7c0-1.3,1.1-2.4,2.4-2.4h33.9
	c1.3,0,2.4,1.1,2.4,2.4v31.1C138.1,33.1,137.1,34.2,135.8,34.2z"
      />
      <path
        id="env-line-3"
        class="st2"
        d="M131.2,6.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
	c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,5.7,132.1,6.5,131.2,6.5z"
      />
      <path
        id="env-line-2"
        class="st2"
        d="M131.2,14.1h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
	c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,13.4,132.1,14.1,131.2,14.1z"
      />
      <path
        id="env-line-1"
        class="st2"
        d="M131.2,21.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
	c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,20.8,132.1,21.5,131.2,21.5z"
      />
      <path
        class="st3"
        stroke="white"
        d="M 97.6 11.1 c -0.6 0.5 -1.3 1.5 -1.3 2.4 v 24.9 c 0 1.7 1.4 3.1 3.1 3.1 h 38.8 c 0.8 0 1.4 -0.3 2 -0.7 c 0.7 -0.6 1.2 -1.4 1.2 -2.3 v -25 c -0.1 -0.9 -0.5 -1.7 -1.1 -2.3 c -5.4 3.7 -21.4 14.8 -21.4 14.8z"
      />
              {/*  ORIGINAL
        <path class="st3" d="M97.6,11.1c-0.6,0.5-1.3,1.5-1.3,2.4v24.9c0,1.7,1.4,3.1,3.1,3.1h38.8c0.8,0,1.4-0.3,2-0.7
          C137.1,38.7,97.6,11.1,97.6,11.1z"/>
        <path class="st4" d="M140.3,11.2c-5.4,3.7-21.4,14.8-21.4,14.8l0,0c0.2,0.1,18.2,12.7,21.3,14.8c0.7-0.6,1.2-1.4,1.2-2.3v-25
          C141.3,12.6,140.9,11.8,140.3,11.2z"/> */}
    </svg>
  );
}

function App() {
  return (
    <div className="App grid">
      <header className="container-fluid welcome-section">
        <div className="mail">
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
                <bigger>Hello</bigger>, my name is <bigger>Herby Sio.</bigger>
              </h5>
            </div>
            <div className="profile-engineer row text-align-center justify-content-center">
              <h5>
                I am an <bigger>Engineer.</bigger>
              </h5>
            </div>
            <div className="row float-right">
              <h5>Machine Learning, AI, and Mathematics enthusiast.</h5>
            </div>
          </div>

          <div className=" float-left">
            <ul className="social list-inline">
              <li className="list-inline-item">
                <i className="fab fa-twitter"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-github-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-stack-overflow"></i>
              </li>
              <li className="list-inline-item last-item">
                <i className="fab fa-codepen"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;

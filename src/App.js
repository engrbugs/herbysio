import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import profilePicture from "./assets/images/profile.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App grid">
      <header className="container-fluid welcome-section">
        {/* diagonal section  */}
        <div className="section row"></div>
        {/* diagonal section  */}
        <div className="row text-align-center justify-content-center">
          <div className="image-cropper">
            <img className="profile-pic" src={profilePicture} alt="" />
          </div>

          <div className="container-fluid m-5">
            <div className="profile-name row text-align-center justify-content-center">
              <h5><bigger>Hello</bigger>, my name is <bigger>Herby Sio.</bigger></h5>
            </div>
            <div className="profile-engineer row text-align-center justify-content-center">
              <h5>I am an <bigger>Engineer.</bigger></h5>
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

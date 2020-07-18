import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import profilePicture from "./assets/images/profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header welcome-section">
        <div className="container clearfix">
          <div className="image-cropper">
            <img
              className="profile-pic"
              src={profilePicture}
              alt=""
            />
          </div>

          <div className="profile-content float-left">
            <h1 className="name">James Lee</h1>
            <h2 className="desc">Web App Developer</h2>
            <ul className="social list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-github-alt"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-stack-overflow"></i>
                </a>
              </li>
              <li className="list-inline-item last-item">
                <a href="#">
                  <i className="fab fa-codepen"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

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
      </header>
    </div>
  );
}

export default App;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faAws } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-c">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-default-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Mike Minkoff</span>
            </span>
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/michael-m-1a0131195/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.credly.com/users/michael-minkoff.21fd5056">
                  <FontAwesomeIcon icon={faCopyright} />
                </a>
                <a href="https://www.credly.com/badges/de4aa7eb-d56e-4101-a484-223eadb0969f/public_url">
                  <FontAwesomeIcon icon={faAws} />
                </a>
              </div>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Self-starter 👋",
                    1000,
                    "Cloud Certified 🌩️",
                    1000,
                    "MERN Dev 🧑‍🏫",
                    1000,
                    "Navy Veteran 🎖️",
                    1000,
                    "React Dev 🧑‍💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Experienced at front-end and back-end development.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="../../../public/resume/MikeMinkoff.docx"
              download="MikeMinkoff.docx"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

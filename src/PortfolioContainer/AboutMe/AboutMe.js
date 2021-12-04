import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a Navy Vetern aspiring to get into tech as a Frontend developer. I am passionate about writing code, solving problems and automating processes. I currently specialise in React and willing to learn more technologies. ",
    highlights: {
      bullets: [
        "Interactive Front End development and designs",
        "React and TypeScript",
        "Redux for State Management",
        "Bootstrap and SASS",
        "Git and Github",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight()}
          </div>
          <div className="about-me-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="../../../public/resume/MikeMinkoff.docx"
              download="MikeMinkoff.docx"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

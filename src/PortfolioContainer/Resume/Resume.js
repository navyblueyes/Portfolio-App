import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  // Utilities to fade in components
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  //Resume topics and paragraphs
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal websire for showcasing all my personal details and previous projects",
      subHeading: "Built on: React, Bootstrap",
    },
    {
      title: "Youtube Clone",
      duration: { fromDate: "July 2021", toDate: "August 2021" },
      description:
        "A file hosting demo; showcasing API Design, Database Design  and responsive client app",
      subHeading:
        "Built on: React, Redux, TailwindCSS, Express JS, Node JS, MongdoDB, AWS S3",
    },
    {
      title: "Discord Clone",
      duration: { fromDate: "October 2021", toDate: "November 2021" },
      description:
        "A React Native chatting app; showcasing WebSocket chat, Redis caching and NoSQL ",
      subHeading:
        "Built on: React Native, Redux, TailwindCSS, Express JS, Node JS, MongdoDB, AWS S3",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={
          "Bloc Full Stack Web Development [Javascript, React, Node, MongoDB]"
        }
        subHeading={"Online"}
        fromDate={"Jan 2019"}
        toDate={"July 2019"}
      />
      <ResumeHeading
        heading={"United States Naval Academy"}
        subHeading={"Bachelor's Of Science - Systems Engineering"}
        fromDate={"2005"}
        toDate={"2009"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Surface Development Squadron One, San Diego, CA"}
        subHeading={"N7 Department Head"}
        fromDate={"Jan 2018"}
        toDate={"March 2020"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Led 4 Sailors in the development and implementation of the
          Zumwalt-class pipeline training program, handling over 500 Sailors in
          transit.
        </span>
        <br />
        <span className="resume-description-text">
          - Proactively started a system of communication with three commands to
          ensure properly trained Sailors for the Zumwalt-class ships, changing
          over 30 jobs.
        </span>
        <br />
        <span className="resume-description-text">
          - Aggressively engaged third-party vendors to reduce pipeline training
          from an average of 95 days to 25 days.
        </span>
        <br />
        <span className="resume-description-text">
          - Prudently communicated to upper management of Zumwalt-class
          differences, leading to two successful Navy-level inspections.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => {
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-perscentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>;
      })}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="ooopps..no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

import "./Contact.css";
import Typical from "react-typical";
import React from "react";
import imgGb from "../../../src/assets/ContactMe/mailz.jpeg";
import loader1 from "../../../src/assets/ContactMe/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2>
            <Typical loop={Infinity} steps={["Get in Touch 📧", 1000]} />
          </h2>
          <a href="https://www.linkedin.com/in/michael-m-1a0131195/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

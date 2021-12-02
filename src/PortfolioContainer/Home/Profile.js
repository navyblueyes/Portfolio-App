import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div classname="profile">
      <div classname="profile-parent">
        <div classname="colz">
          <a href="https://www.linkedin.com/in/michael-m-1a0131195/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.credly.com/users/michael-minkoff.21fd5056">
            <FontAwesomeIcon icon={faCopyright} />
          </a>
        </div>
      </div>
    </div>
  );
}

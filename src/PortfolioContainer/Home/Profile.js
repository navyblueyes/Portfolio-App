import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <div classname="profile">
      <div classname="profile-parent">
        <div classname="colz">
          <a href="https://www.linkedin.com/in/michael-m-1a0131195/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.credly.com/users/michael-minkoff.21fd5056">
            <FontAwesomeIcon icon="fa-duotone fa-circle-c" />
          </a>
        </div>
      </div>
    </div>
  );
}

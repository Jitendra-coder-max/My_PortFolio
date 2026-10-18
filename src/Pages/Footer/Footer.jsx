import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Messenger from "@iconscout/react-unicons/icons/uil-facebook-messenger";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>©2026 Jitendra Nishad. All rights are reserved.</span>
        <div className="f-icons">
          <a
            href="https://api.whatsapp.com/send?phone=8770283437"
            target={"_blank"}
            rel="noreferrer"
          >
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <a
            href="https://m.me/jitendra.nishad.7"
            target={"_blank"}
            rel="noreferrer"
          >
            <Messenger color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/jitendra-nishad-24b479191/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Jitendra-coder-max"
            target={"_blank"}
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="mailto:jitendra.tech.eng@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <Mail color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

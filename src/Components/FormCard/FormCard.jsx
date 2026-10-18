import React from "react";
import "./FormCard.css";

const FormCard = ({ icon, title, subtitle, link }) => {
  return (
    <a className="fc-wraper" href={link} target="_blank" rel="noreferrer">
      <div>{icon}</div>
      <p>{title}</p>
      <p>{subtitle}</p>
      <span>Send a Message</span>
    </a>
  );
};

export default FormCard;

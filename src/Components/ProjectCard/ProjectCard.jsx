import React from "react";
import "./ProjectCard.css";
import { Link } from "react-scroll";
const ProjectCard = ({ img, onClickImg }) => {
  return (
    <>
      <div className="pc-wraper">
        {img.map((el, index) => {
          return (
            <div key={index}>
              <img src={el} alt="" />
              <Link to="Projects" spy={true} smooth={true}>
                <button
                  className="button pc-btn"
                  onClick={() => onClickImg(index)}
                >
                  Know More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCard;

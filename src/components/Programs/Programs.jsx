import React from "react";

import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";

import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join now</span>
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

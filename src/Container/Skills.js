import React from "react";
import "./Skills.css";
import { skills } from "../data";
import img from "../assets/images/back.png"

const Skills = () => {
  return (
    <>
      <div className="skills">
      <img className="photo" src={img} alt="" />
        <div class="custom-shape-divider-top-1696863927">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="skillsDiv">
          <div className="skilldBox">
            <h1>Trusted by these amazing peoples & companies</h1>
            <div className="container mx-auto">
             <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 md:grid-flow-row lg:gap-1">
              {skills.map((skill, index) => {
                return (
                 <div id="imgBox" className=" flex items-center justify-center" key={index}>
                   <img className="text-white" src={skill.image} alt="" />
                 </div>
               );
             })}
           </div>
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

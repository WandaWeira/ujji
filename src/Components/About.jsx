import React from "react";
import Profile from "../assets/ssaka.jpg";
import { Styles } from "../utils/Style";
import Resume from "../assets/cover.pdf";
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css'

const About = () => {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I'm<span className="text-orange-600"> Hamzah</span>
          <br />
          <span className={Styles.heroSubText}>
            I'm a Data Analyst.
            <br />I love to learn new things and solve problems.
          </span>
        </span>
        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="_blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500">
              <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500" />
              Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap mr-56">
        <img
          src={Profile}
          alt="Profile"
          className="element object-contain rounded-full p-4 h-96"
        />
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants/Constants";
// import { motion } from "framer-motion";
import "./styles.css";

const Overview = () => {
  return (
    <>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I'm a skilled Data Analyst with experience is Excel, Tablaeu, SQL,
          Python. I'm a quick learner and collaborate, scallable and user
          friendly solutions that solve real-world problems. Let's work togather
          to bring ideas to life.
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  className="h-[100px] w-[100px]"
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center justify-between m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 hover:shadow-orange-300"
          >
            <img src={technology.icon} alt={technology.name} className="mt-2" />
            <div className="text-violet-600 flex justify-center mb-2">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Overview;

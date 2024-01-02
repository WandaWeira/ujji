import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { projects } from "../Constants/Constants";
import { BiLogoNetlify, BiLogoGithub } from "react-icons/bi";
// import { motion } from "framer-motion";
import "./styles.css";

const Projects = () => {
  return (
    <>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly explained and
          can be accessed by clicking on the title.
        </div>
      </div>
      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map((project) => (
          <div>
            <Tilt
              key={project.name}
              className="w-[300px] h-[500px] flex flex-col justify-evenly items-center shadow-2xl m-10 hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 border-2 border-violet-900 rounded-xl"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="text-center">
                <div className="flex justify-center items-center mb-3">
                  <div className="h-[40px] w-[40px] rounded-full m-3 bg-slate-50 shadow-lg shadow-violet-500 flex justify-center items-center">
                    <a href={project.source_deploy_link} target="blank">
                      <BiLogoNetlify className="text-3xl font-bold text-violet-600" />
                    </a>
                  </div>
                  <div className="h-[40px] w-[40px] rounded-full m-3 bg-slate-50 shadow-lg shadow-violet-500 flex justify-center items-center">
                    <a href={project.source_code_link} target="blank">
                      <BiLogoGithub className="text-3xl font-bold text-violet-600" />
                    </a>
                  </div>
                </div>
                <img
                  className="h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl"
                  src={project.image}
                  alt={project.name}
                />
                <div className="my-5 text-2xl text-violet-600 font-extrabold">
                  {project.name}
                </div>
                <div className="text-center">
                  <span className="text-orange-500">{project.description}</span>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;

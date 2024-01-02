import React from "react";
import { GrLinkedinOption, GrGithub, GrMail, GrPhone } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="w-[screen] bg-black">
        <div className="flex p-2 flex-wrap justify-around">
          <a
            href="https://www.linkedin.com/in/wanda-weira-9929b1116/"
            target="blank"
            className="text-lg flex text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full bg-violet-400 flex justify-center items-center">
              <GrLinkedinOption className="text-white" />
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">Wanda Weira</span>
          </a>

          <a
            href="https://github.com/WandaWeira"
            target="blank"
            className="text-lg flex text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full bg-violet-400 flex justify-center items-center">
              <GrGithub className="text-white" />
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">WandaWeira</span>
          </a>

          <a
            // href="rashiidahweira@gmail.com"
            // target="blank"
            className="text-lg flex text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full bg-violet-400 flex justify-center items-center">
              <GrMail className="text-white" />
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">
              rashiidahweira@gmail.com
            </span>
          </a>

          <a
            // href="rashiidahweira@gmail.com"
            // target="blank"
            className="text-lg flex text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full bg-violet-400 flex justify-center items-center">
              <GrPhone className="text-white" />
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">
              +256 (0) 773599715
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

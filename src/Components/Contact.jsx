import React from "react";
import { Styles } from "../utils/Style";

const Contact = () => {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Contact</span>
        <hr className="w-[35%]"></hr>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around">
            <div className="lg:w-[40%]">
              <form className="m-5 flex flex-col gap-3">
                <label className="flex flex-col gap-3">
                  <span className="text-violet-700 font-medium mb-2">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="What is your name?"
                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col gap-3">
                  <span className="text-violet-700 font-medium mb-2">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="What is your email?"
                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-violet-700 font-medium mb-2">
                    Your Message
                  </span>
                  <textarea
                    rows={5}
                    name="text"
                    placeholder="What is your message?"
                    className="bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="lg:w-[50%]">
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/24/28/graphic-cartoon-character-online-education-vector-35482428.webp"
                alt="contact"
                className="lg:w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

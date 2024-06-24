import React from "react";
import { self } from "../utils";

const About = () => {
  return (
    <section className="screen-max-width">
      <div className="screen-max-width flex flex-col items-center mt-20 sm:mt-10">
        <h1 className="text-4xl font-bold sm:text-3xl mt-10 text underline">
          About
        </h1>
        <div className="w-[80%] flex items-start justify-between">
          <div className="flex flex-col justify-start sm:w-[100%] w-[60%] ml-15">
            <img src={self} className="sm:w-80"></img>
          </div>
          <div className="flex flex-col items-start ml-20">
            <h3 className="text-2xl font-semibold md:text-2xl sm:text-xl mt-2">
              I'm Fayaz
            </h3>
            <p className="text-2xl font-bold mt-5 sm:text-base sm:text-base md:text-base">
              "Develop a passion for learning. If you do, you will never cease
              to grow."
            </p>
            <p className="text-2xl font-medium sm:font-normal sm:text-base">
              A passionate front-end web developer, Figma designer, and an
              enthusiastic learner awaiting chances to explore, currently a CS
              undergrad at Model Engineering College Thrikkakkara and
              Initiatives head MACS MEC and former Outreach Lead of TLE MEC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

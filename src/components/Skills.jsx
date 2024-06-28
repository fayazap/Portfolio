import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skill } from "../utils";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faFigma,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useGSAP } from "@gsap/react";
import Leetcode from "./Leetcode";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5, level: 90 },
    { name: "CSS", icon: faCss3Alt, level: 85 },
    { name: "JavaScript", icon: faJs, level: 70 },
    { name: "React", icon: faReact, level: 85 },
    { name: "C", icon: faCode, level: 70 },
    { name: "C++", icon: faCode, level: 90 },
    { name: "C#", icon: faCode, level: 60 },
    { name: "Python", icon: faPython, level: 70 },
    { name: "GitHub", icon: faGithub, level: 90 },
    { name: "Figma", icon: faFigma, level: 95 },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    skills.forEach((skill, index) => {
      gsap.fromTo(
        `#skill-${index}`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `#skill-${index}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    gsap.to("#skill-image", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#skill-image",
        start: "top 80%",
        end: "bottom 60%", 
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="screen-max-width">
      <h1 className="text-3xl font-extrabold sm:text-3xl mt-20 max-sm:mt-10 mb-20 max-sm:mb-10 max-sm:mt-3 text-center underline">
        Skills
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-between max-sm:mt-1">
        <div
          id="skill-image"
          className="w-full lg:w-1/2 justify-center lg:py-20 items-center opacity-0 transform translate-y-20"
        >
          <p className="text-lg font-semibold max-sm:text-base px-4 lg:px-0">
            A skilled front-end developer with designing skills in figma and
            proficient enough in HTML, CSS3, UI/UX, competitive coding as well
            as JavaScript. Still working on my flaws and making myself better
            and proficient day by day with an optimistic mind.
          </p>
          <img src={skill} alt="Skills" className="max-w-full h-auto mt-10" />
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-0 max-sm:w-4/5 sm:ml-2 sm:mr-3 max-sm:ml-10">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              id={`skill-${index}`}
              className="opacity-0 transform translate-y-20 mb-7 h-13 mt-10 rounded-sm shadow-lg shadow-slate-300 border-black-800"
            >
              <div className="flex items-center p-2">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-blue-500 h-7 mr-5"
                  size="lg"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="bg-gray-200 h-2 rounded-md overflow-hidden">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="bg-blue-500 h-full transition-all duration-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <Leetcode/>
      </div>
    </section>
  );
};

export default Skills;

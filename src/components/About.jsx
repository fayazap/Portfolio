import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 

import { self } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      "#self",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#self",
          start: "top 80%", 
          end: "bottom 60%",
          scrub: true, 
        },
      }
    );

    gsap.fromTo(
      "#link",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#link",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true, 
        },
      }
    );
  }, []); 

  return (
    <section className="screen-max-width mt-10  mb-10">
      <div className="screen-max-width ">
        <div className="underline text-3xl font-extrabold flex flex-col items-center">
          <h1>About</h1>
        </div>
        <div className="mt-20 max-sm:mt-10">
          <div className="flex items-start justify-between">
            <div className="mx-auto bg-white overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    id="self"
                    className="h-48 w-full object-cover md:h-full md:w-48 max-sm:hidden opacity-0 transform translate-y-20"
                    src={self}
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-8 ml-20 max-sm:ml-0">
                  <div className="tracking-wide text-2xl text-indigo-500 font-bold">
                    <h3 id="link" className="opacity-0 transform translate-y-20">
                      I'm Fayaz
                    </h3>
                  </div>
                  <p
                    id="link"
                    className="opacity-0 transform translate-y-20 mt-1 text-lg italic font-medium text-black"
                  >
                    "Develop a passion for learning. If you do, you will never cease to grow."
                  </p>
                  <p
                    id="link"
                    className="opacity-0 transform translate-y-20 mt-2 text-lg font-semibold max-sm:text-base text-slate-500"
                  >
                    A passionate front-end web developer, Figma designer, and an enthusiastic learner awaiting
                    chances to explore, currently a CS undergrad at Model Engineering College Thrikkakkara and
                    Initiatives head MACS MEC and former Outreach Lead of TLE MEC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

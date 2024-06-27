import React, { useEffect, useRef, useState } from "react";
import { profile, profileBg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import RoleTextLoop from "./RoleTextLoop";

const Headers = () => {
  const roles = ["Web developer", "Designer", "Coder", "Photographer"];
  const [currentRole, setCurrentRole] = useState(0);
  const roleRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to(roleRef.current, { opacity: 1, duration: 1 })
      .to(roleRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: changeRole,
      });
  }, [currentRole]);

  const changeRole = () => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  };
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section className="screen-max-width">
      <div className="screen-max-width flex items-start justify-between p-8">
        <div className="flex flex-col justify-start">
          <h1
            id="title"
            className="text-black mt-10 lg:text-6xl md:text-5xl text-3xl font-bold opacity-0 transform translate-y-20"
            style={{ lineHeight: "1.5" }}
          >
            Hi, <br />
            I'm <span className="text-yellow-400">Fayaz</span>
          </h1>
          <h3 className="mt-4">
            <RoleTextLoop />
          </h3>
          <div id="contact-link" className="mt-12">
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-12 py-3 rounded-lg font-medium mt-4 hover:bg-yellow-500 transition-all"
            >
              Contact
            </a>
          </div>
          <div id="links-to-sites" className="mt-20 ">
            <a target="_blank" href="https://www.linkedin.com/feed/" className="text-black font-medium mt-4">
              <FontAwesomeIcon icon={faLinkedin} className="h-8" />
            </a>
            <a target="_blank" href="https://github.com/fayazap" className="text-black font-medium ml-10">
              <FontAwesomeIcon icon={faGithub} className="h-8" />
            </a>

            <a target="_blank" href="https://x.com/fayaz_a_p?t=Dp2kFSrwhuKD4Mn6zsmmMA&s=08" className="text-black font-medium ml-10">
              <FontAwesomeIcon icon={faXTwitter} className="h-8" />
            </a>
          </div>
        </div>
        <div className="">
          <div className="link">
            <img src={profileBg} alt="background" className="ml-auto mr-[-12%]" />
          </div>
          <div className="link absolute top-0 right-0 mt-2 z-10 max-w-[35%]">
            <img src={profile} alt="profile" className="ml-auto " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;

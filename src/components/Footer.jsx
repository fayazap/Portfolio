import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="w-full bg-yellow-400">
      <div className="w-full text-center">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-3xl mt-20 py-5">
            Fayaz A P
          </h1>
        </div>
        <div>
          <div
            id="links-to-sites"
            className="flex justify-center space-x-10 pb-10"
          >
            <a target="_blank"
              href="https://www.linkedin.com/feed/"
              className="text-black font-medium mt-4"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-8" />
            </a>
            <a target="_blank"
              href="https://github.com/fayazap"
              className="text-black font-medium mt-4"
            >
              <FontAwesomeIcon icon={faGithub} className="h-8" />
            </a>
            <a target="_blank"
              href="https://x.com/fayaz_a_p?t=Dp2kFSrwhuKD4Mn6zsmmMA&s=08"
              className="text-black font-medium mt-4"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-8" />
            </a>
            <a target="_blank"
              href="https://www.instagram.com/_fayazap?igsh=MWVjdHhqdmY2ODk5YQ=="
              className="text-black font-medium mt-4"
            >
              <FontAwesomeIcon icon={faSquareInstagram} className="h-8" />
            </a>
          </div>
          <div className="flex justify-center pb-10">
            <FontAwesomeIcon icon={faPhone} className="text-black h-6" />
            <p className="text-black font-medium ml-3">+91 8138031739</p>
            <FontAwesomeIcon icon={faEnvelope} className="text-black h-6 ml-12" />
            <p className="text-black font-medium ml-3">fayazap2@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

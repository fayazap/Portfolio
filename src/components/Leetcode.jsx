import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Leetcode = () => {
  useGSAP(() => {
    gsap.to("#skill-image", { opacity: 1, y: 0, duration: 1, delay: 1 });
  });
  return (
    <div
      className="flex justify-center items-center mt-8 opacity-0 transform translate-y-20"
      id="skill-image"
    >
      <a href="https://leetcode.com/u/FayazAP/" target="_blank">
        <img
          src="https://leetcard.jacoblin.cool/FayazAP?theme=unicorn"
          alt="LeetCode Stats"
          className="max-w-full max-sm:w-4/5 max-sm:ml-10 h-auto"
        />
      </a>
    </div>
  );
};

export default Leetcode;

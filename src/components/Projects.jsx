import React, { useEffect, useRef } from "react";
import { projects } from "../constants";
import gsap from "gsap";

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.utils.toArray(".project-container").forEach((container, index) => {
            gsap.fromTo(
              container,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.2,
              }
            );
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); 

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray(".project-container").forEach((container, index) => {
        gsap.fromTo(
          container,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray(".project-container").forEach((container, index) => {
        gsap.fromTo(
          container,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
          }
        );
      });
    });

    return () => mm.revert(); 
  }, []);

  return (
    <section className="screen-max-width" ref={projectsRef}>
      <div className="screen-max-width">
        <h1 className="text-3xl font-extrabold sm:text-3xl mt-20 max-sm:mt-10 mb-20 max-sm:mb-10 text-center underline">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-around mt-8">
  {projects.map((project) => (
    <div key={project.title} className="relative flex justify-center m-4 lg:w-1/4 md:w-1/3 sm:w-1/2 project-container opacity-0 transform translate-y-20">
      <a href={project.link} target="_blank" rel="noreferrer" className="group">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-30 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-yellow-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black text-xl font-semibold">{project.title}</span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
          <div className="text-white text-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            <p className="text-lg font-bold">{project.title}</p>
            <p className="text-sm mt-2">Click to learn more</p>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

    </section>
  );
};

export default Projects;

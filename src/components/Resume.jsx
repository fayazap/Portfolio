import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Resume = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#contact", { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true,
    }
    });
  });

  return (
    <section className='screen-max-width'>
        <div className='screen-max-width'>
        <h1 className="text-3xl font-extrabold sm:text-3xl mt-20 max-sm:mt-10 mb-20 max-sm:mb-10 text-center underline">Resume</h1>
        </div>
        <div id="contact" className="mt-16 text-center mb-16 opacity-0 transform translate-y-20">
            <a target="_blank"
              href="https://drive.google.com/file/d/1aFwQ_UEgKNwgx5TzztYjyCN3U9mqpq-N/view?usp=drive_link"
              className="bg-yellow-400 text-xl text-black px-12 py-3 rounded-lg font-medium mt-4 mb-8 hover:bg-yellow-500 transition-all"
            >
              Download Resume
            </a>
        </div>
    </section>
  )
}

export default Resume

import React from 'react'

const Resume = () => {
  return (
    <section className='screen-max-width'>
        <div className='screen-max-width'>
        <h1 className="text-3xl font-extrabold sm:text-3xl mt-10 text-center underline">Resume</h1>
        </div>
        <div id="contact" className="mt-16 text-center mb-16">
            <a target="_blank"
              href="https://drive.google.com/file/d/1Cqhu0IAP44W3tCOu-kNoNEOczdoY5-PK/view?usp=sharing"
              className="bg-yellow-400 text-xl text-black px-12 py-3 rounded-lg font-medium mt-4 mb-8 hover:bg-yellow-500 transition-all"
            >
              Download Resume
            </a>
        </div>
    </section>
  )
}

export default Resume

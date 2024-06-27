import React from 'react';
import Typewriter from 'typewriter-effect';

const Bio = {
  roles: ['Web Developer', 'Designer', 'Coder', 'Photographer'],
};

const RoleTextLoop = () => {
  return (
    <div className="font-semibold text-2xl max-sm:text-lg md:text-2xl flex md:flex-row flex-col md:gap-3 gap-1 text-primary leading-none md:leading-[68px] md:text-left mb-4 md:mb-0">
      <span>I am a</span>
      <span className="text-yellow-400 cursor-pointer">
        <Typewriter
          options={{
            strings: Bio.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};

export default RoleTextLoop;

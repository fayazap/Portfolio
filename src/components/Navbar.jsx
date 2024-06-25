// Navbar Component
import React from 'react';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between p-5 max-sm:p-3 max-sm:mr-2 sm:px-10'>
      <nav className='screen-max-width flex w-full'>
        <div className='flex flex-1 justify-center'>
          {navLists.map((list, index) => (
            <a key={index} href={`#${list.id}`} className='cursor-pointer px-5 text-lg max-sm:text-sm max-sm:px-3  text-black font-medium transition-all hover:text-yellow-400'>
              {list.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

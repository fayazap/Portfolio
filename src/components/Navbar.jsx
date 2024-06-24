import React from 'react'
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between p-5 sm:px-10'>
        <nav className='screen-max-width flex w-full'>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((list, index) => (
                    <a key={index} href={list} className='cursor-pointer px-5 text-lg text-black font-medium transition-all hover:text-yellow-400'>{list}</a>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar

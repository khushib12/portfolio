import React from 'react';

const Header = () => {
  return (
    <nav className='space-x-8'>
      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
      <li>
          <a href='#me' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            About Me
          </a>
        </li>
        <li>
          <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </a>
        </li>
        
        <li>
          <a href='#skills' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            My Skills
          </a>
        </li>
        <li>
          <a href='khushi_mait_resume.pdf' target='_blank' rel='noreferrer' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Resume
          </a>
        </li>
        <li>
          <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

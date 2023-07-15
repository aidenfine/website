import React from 'react';
import { NavLink } from 'react-router-dom';
import { UnderlineOnHover } from '../onHover/UnderlineOnHover';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 pt-4 text-black lg:pt-4 lg:px-0">
      <div className="text-xl font-bold cursor-pointer text-start">
        <NavLink to="/">Aiden Fine</NavLink>
      </div>
      <div className="space-x-4 md:space-x-2 lg:space-x-4 xl:space-x-4 md:px-4 sm:px-6 ">
        <UnderlineOnHover>
          <NavLink to="/profile">Profile</NavLink>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <NavLink to="/blog">Blog</NavLink>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <NavLink to="/contact">Contact</NavLink>
        </UnderlineOnHover>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { UnderlineOnHover } from '../onHover/UnderlineOnHover';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between text-black pt-4">
      <div className="text-start text-xl font-bold cursor-pointer">
        <NavLink to="/">Aiden Fine</NavLink>
      </div>
      <div className="space-x-4 md:space-x-2 lg:space-x-4 xl:space-x-4 ">
        <UnderlineOnHover>
          <NavLink to="/profile">Profile</NavLink>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <NavLink to="/contact">Contact</NavLink>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <NavLink to="/blog">Blog</NavLink>
        </UnderlineOnHover>
      </div>
    </nav>
  );
};

export default Navigation;

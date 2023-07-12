/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { UnderlineOnHover } from '../onHover/UnderlineOnHover';
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between text-black pt-4">
      <div className="text-start text-xl font-bold">Aiden Fine</div>
      <div className="space-x-4">
        <UnderlineOnHover>
          <a href="#">About</a>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <a href="#">Blog</a>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <a href="#">Projects</a>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <a href="#">Contact</a>
        </UnderlineOnHover>
      </div>
    </nav>
  );
};

export default Navigation;

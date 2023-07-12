/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { UnderlineOnHover } from '../onHover/UnderlineOnHover';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate();
  const nameClick = () => {
    navigate('/');
  };
  return (
    <nav className="flex items-center justify-between text-black pt-4">
      <div className="text-start text-xl font-bold cursor-pointer" onClick={nameClick}>
        {' '}
        Aiden Fine
      </div>
      <div className="space-x-4">
        <UnderlineOnHover>
          <a href="#">Profile</a>
        </UnderlineOnHover>
        <UnderlineOnHover>
          <a href="#">Contact</a>
        </UnderlineOnHover>
      </div>
    </nav>
  );
};

export default Navigation;

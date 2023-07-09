import React from 'react';
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between text-black pt-4">
      <div className="text-start text-xl font-bold">Aiden Fine</div>
      <div className="space-x-4">
        <a href="#" className="hover:font-bold">About</a>
        <a href="#" className="hover:font-bold">Blog</a>
        <a href="#" className="hover:font-bold">Projects</a>
        <a href="#" className="hover:font-bold">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;

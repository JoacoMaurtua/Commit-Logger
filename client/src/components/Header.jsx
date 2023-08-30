import React from 'react';
import { GitHub } from 'react-feather';

const Header = () => {
  return (
    <header className="p-4 bg-[#5a189a] text-white flex justify-between items-center">
      <div className="flex items-center">
        <GitHub className="mr-4 md:mr-0" />
        <h1 className="text-2xl font-bold hidden md:inline ml-2">Commit Logger</h1>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button className="px-4 py-2 bg-[#240046] hover:bg-[#9d4edd] rounded">Refresh commits</button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="px-2 py-1 bg-[#240046] hover:bg-[#9d4edd] rounded text-sm">
          Refresh
        </button>
      </div>
    </header>
  );
};

export default Header;
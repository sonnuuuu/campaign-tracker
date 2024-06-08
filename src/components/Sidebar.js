import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FiBarChart2, FiFileText, FiSearch } from 'react-icons/fi';
import { IoFlashOutline } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { PiUserCircleDashedFill } from 'react-icons/pi';
import { BsGrid } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center bg-black p-4">
        <HiMenu className="text-white text-3xl cursor-pointer" onClick={toggleSidebar} />
        <div className="text-2xl font-bold ml-4 flex items-center">
          <div className="bg-lime-400 h-10 w-10 px-1 mr-1 mx-4 rounded-md flex items-center justify-center">
            <span className="text-black font-bold">S</span>
          </div>
          <span className="text-white">Solo.</span>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-black text-gray-500 flex flex-col p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-50`}>
        <div className="text-2xl font-bold mb-6 flex items-center mt-2">
          <div className="bg-lime-400 h-10 w-10 px-1 mr-1 mx-4 rounded-md flex items-center justify-center">
            <span className="text-black font-bold">S</span>
          </div>
          <span className="text-white">Solo.</span>
        </div>
        <nav className="flex-1 mt-4">
          <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <BsGrid className="mr-3" /> Home
          </div>
          <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <FiBarChart2 className="mr-3" /> Campaign metrics
          </div>
          <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <FiFileText className="mr-3" /> Creator submissions
          </div>
          <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <FiSearch className="mr-3" /> Discover creators
          </div>
          <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <PiUserCircleDashedFill className="mr-3" /> Creator watchlists
          </div>
        </nav>
        <div className="flex flex-col">
          <div className="text-white flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2 cursor-pointer">
            <IoFlashOutline className="mr-3" /> Invite team
          </div>
          <div className="text-white flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-8 cursor-pointer">
            <IoIosSettings className="mr-3" /> Settings
          </div>
        </div>
        <button className="mt-auto bg-lime-400 h-11 px-4 mx-4 items-center rounded transition duration-200 hover:bg-lime-700 hover:text-white flex justify-center">
          <span className="text-black font-sm"><AddRoundedIcon className="mr-1" /> Create campaign</span>
        </button>
      </aside>

      {/* Content Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Content Area */}
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {  FiBarChart2, FiFileText, FiSearch } from 'react-icons/fi';
import { IoFlashOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { BsGrid } from "react-icons/bs";


const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-gray-500 flex flex-col p-4 h-90">
      <div className="text-2xl font-bold mb-6 flex items-center mt-2"> 
        <div className="bg-lime-400 h-8 w-6 px-1 mr-1 h-10  mx-4 rounded-md"> 
          <span className="text-black font-bold">S</span>
        </div>
        <span className="text-white ">Solo.</span> 
      </div>
      <nav className="flex-1 mt-4"> 
        <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <BsGrid className="mr-3" /> Home
        </div>
        <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <FiBarChart2 className="mr-3" /> Campaign metrics
        </div>
        <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <FiFileText className="mr-3" /> Creator submissions
        </div>
        <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <FiSearch className="mr-3" /> Discover creators
        </div>
        <div className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <PiUserCircleDashedFill className="mr-3" /> Creator watchlists
        </div>
      </nav>
      <div className="flex flex-col">
        <div className=" text-white flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-2">
          <IoFlashOutline className="mr-3" /> Invite team
        </div>
        <div className=" text-white flex items-center py-2.5 px-4 rounded transition duration-200 hover:text-white mb-8">
          <IoIosSettings className="mr-3" /> Settings
        </div>
      </div>
      <button className="mt-auto bg-lime-400 h-11 px-4  mx-4 items-center rounded transition duration-200 hover:bg-lime-700 hover:text-white flex  justify-center">
        <span className="text-black font-sm"><AddRoundedIcon className="mr-1" /> Create campaign</span>
      </button>
    </aside>
  );
}

export default Sidebar;

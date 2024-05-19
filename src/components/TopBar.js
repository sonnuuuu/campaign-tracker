import React from 'react';
import { FiSearch } from 'react-icons/fi';
import profileImage from '../assets/profile.jpeg'; 

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100"> 
      <div className="flex items-center bg-grey rounded-full px-3 py-1 w-1/3">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search a campaign or creator"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
      <div className="flex items-center">
        <img
          src={profileImage} 
          alt="User Profile"
          className="rounded-full w-10 h-10 mr-3 "
        />
        <div>
          <p className="text-black-800 font-bold mr-5">Ritvik Varghese </p>
          <p className="text-gray-500 text-xs mr-2">admin@patrum.io</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

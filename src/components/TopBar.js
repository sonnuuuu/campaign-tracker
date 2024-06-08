import React from 'react';
import { FiSearch } from 'react-icons/fi';
import profileImage from '../assets/profile.jpeg';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 w-full md:w-1/3">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search a campaign or creator"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
      <div className="flex items-center ml-4">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="text-black font-bold">Ritvik Varghese</p>
          <p className="text-gray-500 text-xs">admin@patrum.io</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

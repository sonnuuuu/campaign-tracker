import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { TbSparkles } from 'react-icons/tb';
import { LuFileVideo } from 'react-icons/lu';
import { PiSpinnerThin } from 'react-icons/pi';

const ActionCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around mt-4 items-center">
      <div className="flex flex-row items-center p-4 m-2 w-full md:w-1/4 justify-between bg-white shadow-md rounded-md">
        <div className="flex items-center">
          <TbSparkles className="text-black text-2xl mr-3" />
          <div>
            <h3 className="font-semibold text-base">Create a campaign</h3>
            <p className="text-gray-500 text-xs">on all major social platforms</p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-2">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="flex flex-row items-center p-4 m-2 w-full md:w-1/4 justify-between bg-white shadow-md rounded-md">
        <div className="flex items-center">
          <LuFileVideo className="text-black text-2xl mr-3" />
          <div>
            <h3 className="font-semibold text-base">Discover new creators</h3>
            <p className="text-gray-500 text-xs">Curation of the best creators</p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-2">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="flex flex-row items-center p-4 m-2 w-full md:w-1/4 justify-between bg-white shadow-md rounded-md">
        <div className="flex items-center">
          <PiSpinnerThin className="text-black text-2xl mr-3" />
          <div>
            <h3 className="font-semibold text-base">Creator submissions</h3>
            <p className="text-gray-500 text-xs">
              <span className="text-red-500 text-xl">•</span>
              <span className="text-gray-500 text-sm ml-1">27 new submissions</span>
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-2">
          <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default ActionCards;

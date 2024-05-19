import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { TbSparkles } from "react-icons/tb";
import { LuFileVideo } from "react-icons/lu";
import { PiSpinnerThin } from "react-icons/pi";


const ActionCards = () => {
  return (
    <div className="flex justify-around mt-4 items-center">
      <div className="flex flex-row items-center p-2 m-2 w-1/4 justify-between">
        <div className="flex items-center">
          <TbSparkles className="text-black text-xl mr-2" />
          <div>
            <h3 className="font-semibold text-base">Create a campaign</h3>
            <p className="text-gray-500 text-xs">on all major social platforms</p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-3 mr-3">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="flex flex-row items-center p-2 m-2 w-1/4 justify-between">
        <div className="flex items-center">
          <LuFileVideo className="text-black text-xl mr-2" />
          <div>
            <h3 className="font-semibold text-base">Discover new creators</h3>
            <p className="text-gray-500 text-xs">Curation of the best creators</p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-3 mr-3">
          <FiArrowUpRight />
        </button>
      </div>
      <div className="flex flex-row items-center p-2 m-2 w-1/4 justify-between">
        <div className="flex items-center">
          <PiSpinnerThin className="text-black text-xl mr-2" />
          <div>
            <h3 className="font-semibold text-base">Creator submissions</h3>
            <p className="text-gray-500 text-xs">
              <span className="text-red-500 text-xl"> • </span>
              <span className="text-grey-500 font-sm mr-2"> 27 new submissions</span>
              
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center bg-black text-white rounded-md p-3 mr-3">
          <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default ActionCards;

import React, { useState, useRef, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaRegImage, FaRegSmileBeam } from 'react-icons/fa';
import { MdVideoLibrary, MdOutlinePhotoLibrary, MdArrowDropDown } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import CampaignIcon from '@mui/icons-material/Campaign';

const CampaignsSection = () => {
  const [platform, setPlatform] = useState('Instagram');
  const [setFilter] = useState('Reels');
  const [activeTab, setActiveTab] = useState('All');
  const [underlinePosition, setUnderlinePosition] = useState({ width: 0, left: 0 });

  const tabsRef = useRef({});

  const platforms = [
    { name: 'Instagram', icon: <FaInstagram className="mr-2" /> },
    { name: 'Facebook', icon: <FaFacebook className="mr-2" /> },
    { name: 'Twitter', icon: <FaTwitter className="mr-2" /> },
    { name: 'Youtube', icon: <FaYoutube className="mr-2" /> },
  ];

  const filters = [
    { name: 'Reels', icon: <MdVideoLibrary className="mr-2" /> },
    { name: 'Story', icon: <MdOutlinePhotoLibrary className="mr-2" /> },
    { name: 'Static post', icon: <FaRegImage className="mr-2" /> },
    { name: 'Memes', icon: <FaRegSmileBeam className="mr-2" /> },
  ];

  const campaigns = [
    {
      id: 1,
      title: 'Showtime - Release',
      creators: 135,
      reach: '1.6m',
      views: '345k',
      status: 'Live',
      image: '/images/showtime.jpg',
      statusColor: 'text-green-600',
      buttonColor: 'bg-green-100 text-green-600',
      buttonText: 'View metrics',
      buttonStyle: 'bg-black text-white',
    },
    {
      id: 2,
      title: 'Arya S3 - Part 2',
      creators: 0,
      reach: '----',
      views: '----',
      status: 'Pending',
      image: '/images/arya.jpg',
      statusColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-100 text-yellow-600',
      buttonText: 'Open',
      buttonStyle: 'bg-black text-white',
    },
    {
      id: 3,
      title: 'Shaitaan',
      creators: 48,
      reach: '650k',
      views: '120k',
      status: 'Live',
      image: '/images/shaitaan.jpg',
      statusColor: 'text-green-600',
      buttonColor: 'bg-green-100 text-green-600',
      buttonText: 'View metrics',
      buttonStyle: 'bg-black text-white',
    },
    {
      id: 4,
      title: 'The Freelancer - Part 2',
      creators: 237,
      reach: '3.7m',
      views: '990k',
      status: 'Ended',
      image: '/images/freelancer.jpg',
      statusColor: 'text-red-600',
      buttonColor: 'bg-red-100 text-red-600',
      buttonText: 'View metrics',
      buttonStyle: 'bg-black text-white',
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (activeTab === 'All') return true;
    return campaign.status === activeTab;
  });

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setUnderlinePosition({ width: currentTab.offsetWidth, left: currentTab.offsetLeft });
    }
  }, [activeTab]);

  return (
    <div className="px-8">
      <div className="flex justify-between items-center mb-7">
        <div className="flex">
          <CampaignIcon className="text-3xl mr-2" />
          <div>
            <h2 className="text-base font-semibold">Campaigns</h2>
            <p className="text-gray-500 text-sm">A list of all your brand campaigns.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <button className="flex items-center px-2 py-2 border rounded-md shadow-sm focus:outline-none">
              {platforms.find((p) => p.name === platform).icon}
              {platform}
              <MdArrowDropDown className="ml-2" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              {platforms.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setPlatform(p.name)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  {p.icon}
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <button className="flex items-center px-2 py-2 border rounded-md shadow-sm focus:outline-none">
              Filter by type
              <MdArrowDropDown className="ml-2" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              {filters.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setFilter(f.name)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  {f.icon}
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="flex items-center space-x-8">
          {['All', 'Live', 'Pending', 'Ended'].map((tab) => (
            <div
              key={tab}
              ref={(el) => (tabsRef.current[tab] = el)}
              className={`cursor-pointer flex items-center ${activeTab === tab ? 'text-black font-semibold' : 'text-gray-600'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              <span
                className={`ml-2 w-6 h-6 flex items-center justify-center rounded-full ${
                  tab === 'All' ? 'bg-gray-200 text-gray-600' : 
                  tab === 'Live' ? 'bg-green-100 text-green-600' :
                  tab === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-red-100 text-red-600'
                }`}
              >
                {tab === 'All' ? '13' : tab === 'Live' ? '10' : tab === 'Pending' ? '02' : '01'}
              </span>
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-0 h-1 bg-black transition-all duration-300"
          style={{ width: underlinePosition.width, left: underlinePosition.left }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className="border p-4 rounded-md shadow-sm">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="mb-4 rounded-md"
              style={{ width: '80%', height: '160px', objectFit: 'cover' }}
            />
            <div className="text-lg font-semibold">{campaign.title}</div>
            <div className="text-gray-500 flex items-center mt-2">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={process.env.PUBLIC_URL + '/creators/cr1.jpg'}
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={process.env.PUBLIC_URL + '/creators/cr2.jpg'}
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={process.env.PUBLIC_URL + '/creators/cr3.jpg'}
                  alt=""
                />
              </div>
              <span className="ml-2">{campaign.creators} creators</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-gray-500">
                <div>Reach</div>
                <div className="font-semibold text-black">{campaign.reach}</div>
              </div>
              <div className="text-gray-500">
                <div>Views</div>
                <div className="font-semibold text-black">{campaign.views}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className={`px-2 py-1 rounded-md ${campaign.buttonColor}`}>{campaign.status}</div>
              <button className={`flex items-center px-4 py-2 border rounded-md shadow-sm ${campaign.buttonStyle}`}>
                {campaign.buttonText} <FiArrowUpRight className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5"></div>
    </div>
  );
};

export default CampaignsSection;

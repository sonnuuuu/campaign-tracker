import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ActionCards from './components/ActionCards';
import CampaignsSection from './components/CampaignsSection';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <TopBar />
        <ActionCards />
        <CampaignsSection />
        
      </div>
    </div>
  );
}

export default App;

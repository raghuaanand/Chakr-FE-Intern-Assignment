import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TabContent from './TabContent';
import Tabs from './Tabs';

const PersonDetail: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Timeline');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Tabs selectedTab={selectedTab} onTabChange={handleTabChange} />
        <TabContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default PersonDetail;

import React from 'react';

interface TabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, onTabChange }) => {
  const tabs = ['Timeline', 'Tasks', 'Notes', 'Files', 'Emails', 'Calendar'];

  return (
    <div className="border-b mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`p-2 ${selectedTab === tab ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

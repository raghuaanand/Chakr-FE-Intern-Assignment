import React from 'react';

interface TabContentProps {
  selectedTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case 'Timeline':
        return <div>Timeline content</div>;
      case 'Tasks':
        return <div>Tasks content</div>;
      case 'Notes':
        return <div>Notes content</div>;
      case 'Files':
        return <div>Files content</div>;
      case 'Emails':
        return <div>Emails content</div>;
      case 'Calendar':
        return <div>Calendar content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default TabContent;

import { useTheme } from '@/context/ThemeProvider';
import React from 'react';

const AppearanceForm: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };

  return (
    <div className="w-screen border-[1px] m-6 pt-10 bg-white rounded-lg pl-16">
      <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Theme</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="system"
              name="theme"
              value="system"
              checked={theme === 'system'}
              onChange={handleThemeChange}
              className="mr-2"
            />
            <label htmlFor="system" className="text-gray-700">System</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
              className="mr-2"
            />
            <label htmlFor="light" className="text-gray-700">Light</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              className="mr-2"
            />
            <label htmlFor="dark" className="text-gray-700">Dark</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppearanceForm;

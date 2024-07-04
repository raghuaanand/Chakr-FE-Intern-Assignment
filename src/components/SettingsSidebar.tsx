import Link from 'next/link';
import { IoPersonOutline, IoBrushOutline, IoMailOutline, IoCalendarOutline, IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

const SettingsSidebar = () => {
  return (
    <div className="mt-10 bg-[#f5f3f3d5] h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/settings/profile">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <IoPersonOutline className="mr-2" /> Profile
            </div>
          </Link>
        </li>
        <li>
          <Link href="/settings/appearance">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <IoBrushOutline className="mr-2" /> Appearance
            </div>
          </Link>
        </li>
        <li>
          <Link href="/settings/accounts">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Accounts</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/emails">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <IoMailOutline className="mr-2" /> Emails
            </div>
          </Link>
        </li>
        <li>
          <Link href="/settings/calendars">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <IoCalendarOutline className="mr-2" /> Calendars
            </div>
          </Link>
        </li>
        <li>
          <Link href="/settings/general">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">General</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/members">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Members</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/data-model">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Data Model</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/developers">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Developers</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/integrations">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Integrations</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/releases">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">Releases</div>
          </Link>
        </li>
        <li>
          <Link href="/settings/logout">
            <div className="flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-200">
              <IoLogOutOutline className="mr-2" /> Logout
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;

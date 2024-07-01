"use client"
import { useState } from 'react';
import Link from 'next/link';
import { SidebarClose, SidebarOpen } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex items-start bg-[#f5f3f3d5] ${isOpen? 'w-[10%]' : ""}`}>
      
      <div className={`h-screen ${isOpen ? 'block' : 'hidden'}  text-black transition-all duration-300 ease-in-out`}>
        <nav className="mt-5">
          <ul>
            <li>
              <Link href="/">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">search</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">settings</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/tasks">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">check_box</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/people">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">people</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/opportunities">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">bolt</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/listings">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">list</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/cars">
                <div className="flex items-center p-4 hover:bg-gray-700">
                  <span className="material-icons">directions_car</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 p-4">
          <a href="#" className="flex items-center hover:bg-gray-700 p-4">
            <span className="material-icons">support</span>
          </a>
        </div>
      </div>

      <button
        className={`p-4 focus:outline-none  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">{isOpen ? <SidebarOpen /> : <SidebarClose />}</span>
      </button>
    </div>
  );
};

export default Sidebar;

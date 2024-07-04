"use client"
import { useState } from 'react';
import Link from 'next/link';
import { SidebarClose, SidebarOpen } from 'lucide-react';
import { IoSearchSharp } from "react-icons/io5";
import { CiSettings } from 'react-icons/ci';
import {  MdOutlineTaskAlt } from 'react-icons/md';
import { IoPersonOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { FaListOl } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";






const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex items-start bg-[#f5f3f3d5] ${isOpen ? 'w-[13%]' : ""}`}>

      <div className={`h-screen ${isOpen ? 'block' : 'hidden'}  text-black transition-all duration-300 ease-in-out`}>
        <nav className="mt-16">
          <ul>
            <li>
              <Link href="/">
                <div className="flex items-center pl-4 py-2 hover:bg-gray-200 w-full">
                  <span className="flex items-center gap-3 text-sm"><IoSearchSharp /> Search</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                  <span className="flex items-center gap-3 text-sm"><CiSettings /> Settings</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/tasks">
                <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                  <span className="flex items-center gap-3 text-sm"><MdOutlineTaskAlt /> Tasks</span>
                </div>
              </Link>
            </li>
          </ul>

          <div className='my-4 '>
            <p className='text-sm text-gray-400 pl-4 py-2'>Workspace</p>
            <ul>
              <li>
                <Link href="/">
                  <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                    <span className="flex items-center gap-3 text-sm"><IoPersonOutline /> People</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/opportunities">
                  <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                    <span className="flex items-center gap-3 text-sm"><TbTargetArrow /> Opportunities</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/listings">
                  <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                    <span className="flex items-center gap-3 text-sm"><FaListOl/> Listings</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/cars">
                  <div className="flex items-center pl-4 py-2 hover:bg-gray-200">
                    <span className="flex items-center gap-3 text-sm"><FaListOl/> Car</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute bottom-0 pl-4 py-2">
          <a href="#" className="flex items-center hover:bg-gray-200 pl-4 py-2">
            <span className="flex items-center gap-3 text-sm"><HiOutlineQuestionMarkCircle/> support</span>
          </a>
        </div>
      </div>

      <button
        className={`pl-4 py-2 focus:outline-none  absolute ${isOpen? "left-[180px]": "block "}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{isOpen ? <SidebarOpen /> : <SidebarClose />}</span>
      </button>

    </div>
  );
};

export default Sidebar;

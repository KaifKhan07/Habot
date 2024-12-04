import React, { useState } from 'react';
import Habot_logo from '../../assets/Images/png/habot_logo.png';
import { FaCaretDown } from 'react-icons/fa';
import hamburger from '../../assets/Images/svg/hamburger.svg';
import close from '../../assets/Images/png/close.png';
import './Navbar.css'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar-main flex justify-between px-5">
      {/* Company Logo */}
      <div className="company-logo">
        <img src={Habot_logo} width={100} height={100} alt="Habot Logo" />
      </div>

      {/* Navbar Items */}
      <div className={`right-nav-detail hidden sm:flex justify-center items-center gap-10 ${sidebar ? 'hidden' : 'md:flex'}`}>
        <p className="m-0">Find Supplies</p>
        <div className="flex items-center">
          <p className="m-0">Find Service Tags</p>
          <div><FaCaretDown /></div>
        </div>
        <button className="border-2 border-green-600 rounded-md p-2 text-[green]">Login / Sign Up</button>
      </div>

      {/* Hamburger Icon */}
      <div className="relative block pt-9 md:hidden">
        <div onClick={sidebarToggle} className="hamburger h-[30px] w-[30px]">
          <img src={hamburger} alt="Hamburger Menu" className="h-[100%] w-[100%]" />
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full bg-gray-900 z-20 w-[100%] sm:w-[70%] transform ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700`}
        >
          {/* Close Button */}
          <div onClick={sidebarToggle} className="h-[50px] w-[50px] p-1 rounded-full mt-4 ml-5 cursor-pointer">
            <img src={close} alt="Close Sidebar" className="h-[100%] w-[100%]" />
          </div>

          {/* Sidebar Content */}
          <div className="flex flex-col gap-4 mt-10 px-5 text-center">
            <p className="text-xl text-white">Find Suppliers</p>
            <p className="text-xl text-white">Find Service Tag</p>
            <button className="border-2 border-green-600 text-green-600 px-3 py-2 rounded-md font-bold">
              Login/Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

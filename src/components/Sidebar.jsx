import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineUserGroup } from 'react-icons/hi';

import logo from '../assets/logo.png';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = () => (
  <div className="sm:mt-10 flex sm:flex-col w-full">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-1 flex-row justify-center sm:justify-start items-center my-4 text-sm font-medium text-[#a9abad] hover:text-[#fff]"
      >
        <item.icon className="w-6 h-6 md:mr-2" style={{ color: "#a9abad", "&:hover": "#fff" }} />
        <div className='md:flex hidden'>
          {item.name}
        </div>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => (
  <div className="z-10 flex w-full sm:w-fit sm:static fixed bottom-0 right-0 left-0 sm:flex-col md:w-[200px] md:py-10 px-4 bg-[#0e1215]">
    <img src={logo} alt="logo" className="h-10 object-contain hidden md:block" />
    <NavLinks />
  </div>
);

export default Sidebar;

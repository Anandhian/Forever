// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const navigate = useNavigate();
  const [visible, setvisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext)
  
  const handleSearchClick = () => {
    setShowSearch(true);           // Show search bar
    navigate('/collection');       // Navigate to collection page
  };

  return (
    <div className='flex justify-between items-center py-5 font-medium relative'>
      <Link to={'/'}>
        <img  src={assets.logo} alt="Logo" className='w-32' />
      </Link>
    

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to={'/'} className='flex flex-col gap-1 items-center'>
          <p>Home</p>
          <hr className='border-none hidden w-2/4 h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to={'/collection'} className='flex flex-col gap-1 items-center'>
          <p>Collection</p>
          <hr className='border-none hidden w-2/4 h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to={'/about'} className='flex flex-col gap-1 items-center'>
          <p>About</p>
          <hr className='border-none hidden w-2/4 h-[1.5px] bg-gray-700' />
        </NavLink>
        <NavLink to={'/contact'} className='flex flex-col gap-1 items-center'>
          <p>Contact</p>
          <hr className='border-none hidden w-2/4 h-[1.5px] bg-gray-700' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img  onClick={handleSearchClick} src={assets.search_icon} alt="Search Icon" className='w-5 cursor-pointer' />

        <div className='relative group'>
          <Link to={'/login'}>
            <img src={assets.profile_icon} alt="User Icon" className='w-5 cursor-pointer' />
          </Link>
          <div className='absolute hidden right-0 pt-5 group-hover:block rounded-md p-4'>
            <div className='flex flex-col items-center gap-4 w-36 py-3 px-5 rounded bg-slate-300 text-gray-500'>
              <p className='hover:text-black cursor-pointer'>My Profile</p>
              <p className='hover:text-black cursor-pointer'>Orders</p>
              <p className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>

        <Link className='relative' to={'/cart'}>
          <img src={assets.cart_icon} alt="Cart Icon" className='w-5 cursor-pointer' />
          <p className='absolute top-3 -right-2 bg-black text-white rounded-full aspect-square w-5 h-5 flex items-center justify-center text-xs'>{getCartCount()}</p>
        </Link>

        {/* Hamburger menu icon */}
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className="cursor-pointer w-5 sm:hidden flex"
        />

        {/* Sidebar menu for small screens */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className='flex flex-col items-start gap-3 p-5'>
            {/* Back button aligned to left */}
            <div onClick={() => setvisible(false)} className='flex items-center gap-2 cursor-pointer'>
              <img className='rotate-180 h-4' src={assets.dropdown_icon} alt="Back" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setvisible(false)}  className='py-2  text-gray-700' to={'/'}>Home</NavLink>
            <NavLink onClick={() => setvisible(false)}  className='py-2  text-gray-700' to={'/collection'}>Collection</NavLink>
            <NavLink onClick={() => setvisible(false)}  className='py-2  text-gray-700' to={'/about'}>About</NavLink>
            <NavLink onClick={() => setvisible(false)}  className='py-2  text-gray-700' to={'/contact'}>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


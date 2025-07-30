import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setvisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setvisible(true);
    } else {
      setvisible(false);
      setShowSearch(false); // hide search when leaving collection
    }
  }, [location]);

  return showSearch && visible ? (
    <div className='bg-gray-100 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 py-3 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 lg:w-1/3'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 bg-inherit outline-none text-sm'
          type="text"
          placeholder='Search'
        />
        <img className='w-4 ml-2' src={assets.search_icon} alt="search icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='w-3 cursor-pointer inline'
        src={assets.cross_icon}
        alt="close icon"
      />
    </div>
  ) : null;
};

export default Searchbar;


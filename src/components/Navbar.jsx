import React, { useEffect, useState } from 'react';
import iconRestaurant from '../assets/icon_restaurant.png';
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UseTheme } from '../contexts/ThemeContext';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = UseTheme();
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center flex-col mb-4 sm:flex-row sm:mb-0">
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10" src={iconRestaurant} alt="" />
          <h1 className="text-4xl font-light py-4 dark:text-white">
            Restaurants
          </h1>
        </div>
        <div className="flex space-x-6">
          <div
            className="flex space-x-1 cursor-pointer relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 dark:text-white"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="dark:text-white">{user?.email}</span>
            {showMenu && (
              <div
                className="w-full bg-white absolute border border-gray-300 rounded-2xl px-4 py-2 top-8"
                onClick={handleLogout}
              >
                <span className="dark:text-white">Logout</span>
              </div>
            )}
          </div>
          {theme === 'light' ? (
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleTheme}
            >
              <path
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white cursor-pointer"
              onClick={toggleTheme}
            >
              <path
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <p className="w-full text-sm font-thin mb-4 sm:w-1/2 dark:text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        corporis dolor recusandae iure. Minima nemo dolore voluptates eos
        cupiditate assumenda.
      </p>
    </div>
  );
}

export default Navbar;

import React from "react";
import avatar from "../../assets/images/avatar.png";
const Header = () => {
  return (
    <header className=" w-screen font-poppins sm:w-screen bg-white shadow-sm m-2  max-w-[95%] rounded-md flex flex-col sm:flex-row items-center justify-between">
      {/* Logo */}
      <div className="font-poppins flex items-center ml-2 space-x-4 mb-2 sm:mb-0">
        <h1 className="font-poppins text-xl sm:text-2xl font-bold">
          Brand Factory
        </h1>
      </div>

      {/* Navigation */}
      <nav className="font-poppins text-md flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 flex-grow">
        <a
          href="#"
          className="font-poppins text-pink-800 hover:text-pink-500 transition duration-300 block sm:inline"
        >
          Home
        </a>
        <a
          href="#"
          className="font-poppins text-pink-800 hover:text-pink-500 transition duration-300 block sm:inline"
        >
          About
        </a>
        <a
          href="#"
          className="font-poppins text-pink-800 hover:text-pink-500 transition duration-300 block sm:inline"
        >
          Contact
        </a>
      </nav>

      {/* Search Bar and Profile Icon */}
      <div className="font-poppins text-black flex items-center space-x-4 mt-2 sm:mt-0">
        <input
          type="text"
          placeholder="Search Something..."
          className="border-2 text-sm bg-transparent px-3 sm:px-5 rounded-2xl py-1 border-rose-100 focus:border-rose-300 focus:outline-none"
        ></input>
        <img
          src={avatar}
          alt="Profile"
          className="font-poppins border-2 border-rose-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;

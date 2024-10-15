import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Contact Us</li>
          <li className="hover:text-gray-300">Other</li>
        </ul>
      </nav>
      <div className="text-white hover:text-gray-300 cursor-pointer">
        Logout
      </div>
    </div>
  );
};

export default Navbar;

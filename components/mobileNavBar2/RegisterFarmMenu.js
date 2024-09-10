import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const RegisterFarmMenu = ({ closeSubMenu }) => {
  return (
    <div className="bg-secondary-colour w-full h-screen">
      {/* Sub Menu Header */}
      <div className="text-xl font-semibold text-primary-colour mb-6 opacity-75 mt-4 ">
        {/* Back Button */}
        <FaArrowLeft className="cursor-pointer mr-2" onClick={closeSubMenu} />
        Register Farm
      </div>
      
      {/* Sub Menu Items */}
      <div className="">
        <div className="p-2 w-auto text-start opacity-75">
          <Link href="/register-farm" className="transition duration-300 ease-in-out font-semibold  no-underline text-black hover:text-white ">
            Apply To List Your Farm
          </Link>
          <hr className="border-gray-300 opacity-50" /> {/* Faded line */}
        </div>

        <div className="p-2 w-auto text-start opacity-75">
          <Link href="/start-agrotourism-form" className="transition duration-300 ease-in-out font-semibold  no-underline text-black hover:text-white">
            Want To Start AgroTourism
          </Link>
          <hr className="border-gray-300 opacity-50" /> {/* Faded line */}
        </div>
      </div>
      
      {/* Back to Main Menu Button */}
      <div className="p-4">
        <button
          onClick={closeSubMenu} // Handle closing the submenu
          className="w-full bg-primary-colour text-secondary-colour font-semibold py-2 rounded-md"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default RegisterFarmMenu;

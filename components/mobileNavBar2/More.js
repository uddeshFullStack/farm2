import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const More = ({ closeSubMenu }) => {
  return (
    <div className="bg-secondary-colour w-full h-screen">
      {/* Sub Menu Header */}
      <div className="text-xl font-semibold text-primary-colour mb-6 opacity-75 mt-4">
        {/* Back Button */}
        <FaArrowLeft className="cursor-pointer mr-2" onClick={closeSubMenu} />
        More
      </div>
      
      {/* Sub Menu Items */}
      <div className="">
        <div className="p-2 w-auto text-start opacity-75">
          <Link href="/about-us" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
            About Us
          </Link>
          <hr className="border-gray-300 opacity-50" /> {/* Faded line */}
        </div>

        <div className="p-2  w-auto text-start opacity-75">
          <Link href="/contact-us"className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
            Contact Us
          </Link>
          <hr className="border-gray-300 opacity-50" />
        </div>

        <div className="p-2 w-auto text-start opacity-75">
          <Link href="/gallery" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
            Gallery
          </Link>
          <hr className="border-gray-300 opacity-50" />
        </div>

        <div className="p-2 w-auto text-start opacity-75">
          <Link href="/award" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
            Award
          </Link>
          <hr className="border-gray-300 opacity-50" />
        </div>
      </div>
      
      {/* Explore Farms Button */}
      <div className="p-4">
        <button
          onClick={closeSubMenu} // Assuming this handles closing
          className="w-full bg-primary-colour text-secondary-colour font-semibold py-2 rounded-md"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default More;

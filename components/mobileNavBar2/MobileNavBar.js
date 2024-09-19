import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RegisterFarmMenu from './RegisterFarmMenu';
import More from './More';

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMoreSubMenuOpen, setIsMoreSubMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    // Clean up in case component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const openMoreSubMenu = () => {
    setIsMoreSubMenuOpen(true);
  };

  const closeMoreSubMenu = () => {
    setIsMoreSubMenuOpen(false);
  };

  const handleExploreFarmsClick = () => {
    router.push('/listed-farm'); // Navigate to /listed-farm when clicked
  };

  return (
    <div className="relative font-inter w-full">
      {/* Navbar Header */}
      <div className="flex justify-between md:justify-center items-center p-1 px-4 sm:p-2 bg-primary-colour shadow-md">
        {/* Toggle Icon */}
        {isOpen ? (
          <FaTimes className="text-3xl cursor-pointer h-8 w-8 bg-secondary-colour rounded-sm" onClick={toggleSidebar} />
        ) : (
          <FaBars className="text-3xl cursor-pointer h-8 w-8 bg-secondary-colour rounded-sm" onClick={toggleSidebar} />
        )}

        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-[38px] w-9 md:h-24 md:w-24 lg:h-32 lg:w-32 object-cover rounded-full"
            loading="lazy"
            alt="Logo"
            src="/sf-page0001-1@2x.png"
          />
          <h1 className="text-xl font-semibold text-secondary-colour ml-2">Saran Farm</h1>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`flex flex-col justify-center items-start fixed top-22 left-0 w-3/4 h-[90%] bg-gray-100 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {!isSubMenuOpen && !isMoreSubMenuOpen ? (
          <div className="bg-secondary-colour w-full h-screen flex flex-col  items-center">
            {/* Main Menu */}
            <div className="text-xl font-semibold text-primary-colour mb-6 opacity-75 mt-2">Menu</div> 
            <div className="w-full px-4">
              <div className="p-2 w-auto text-start opacity-75">
                <Link href="/" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
                  Home
                </Link>
                <hr className="border-gray-300 opacity-50 my-2 " /> {/* Faded line */}
              </div>

              <div
                className="border-b border-gray-200 cursor-pointer transition flex justify-between duration-300 ease-in-out font-semibold  px-4 text-black hover:text-white opacity-75"
                onClick={openSubMenu}
              >
                <div>Register Farm</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <hr className="border-gray-300 opacity-50 my-2 mx-2" /> {/* Faded line */}

              <div className="p-2 w-auto text-start opacity-75">
                <Link href="/listed-farm" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
                  Book Farm
                </Link>
                <hr className="border-gray-300 opacity-50 my-2" /> {/* Faded line */}
              </div>

              <div className="p-2 pt-0 w-auto text-start opacity-75">
                <Link href="/events" className="transition duration-300 ease-in-out font-semibold p-2 no-underline text-black hover:text-white">
                  Events
                </Link>
                <hr className="border-gray-300 opacity-50 my-2" /> {/* Faded line */}
              </div>

              <div
                className="transition flex justify-between duration-300 ease-in-out font-semibold  px-4 text-black hover:text-white border-b border-gray-200 cursor-pointer opacity-75"
                onClick={openMoreSubMenu}
              >
                <div>More</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <hr className="border-gray-300 opacity-50 my-2 mx-2" /> {/* Faded line */}
            </div>

            {/* Explore Farms Button */}
            <div className="p-4 w-[90%]">
              <button
                onClick={handleExploreFarmsClick} // Handle click event
                className="w-full bg-primary-colour text-secondary-colour font-semibold py-2 rounded-md opacity-90"
              >
                Explore Farms
              </button>
            </div>
          </div>
        ) : isSubMenuOpen ? (
          <RegisterFarmMenu closeSubMenu={closeSubMenu} /> // Render the Register Farm submenu when open
        ) : (
          <More closeSubMenu={closeMoreSubMenu} /> // Render the More submenu when open
        )}
      </div>
    </div>
  );
};

export default MobileNavBar;

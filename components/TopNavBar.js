import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const TopNavBar = ({ className = "" }) => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header
      className={`flex flex-row h-10 md:h-24 lg:h-32 md:gap-0 lg:gap-20 gap-4 w-full items-end p-5  md:px-8  md:pb-11 bg-primary-colour text-white font-inter ${className}`}
    >
      <div className="flex items-center cursor-pointer" onClick={onLogoClick}>
        <img
          className="h-[38px] w-9 md:h-24 md:w-24 lg:h-32 lg:w-32 object-cover"
          loading="lazy"
          alt="Logo"
          src="/sf-page0001-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-end lg:items-end space-y-4 lg:space-y-10 mr-[8vw]">
        <div className="hidden md:flex  flex-row space-x-2 md:space-x-8">
          <div className="flex items-center space-x-2">
            <img src="/vector.svg" alt="Phone Icon" className="h-7 w-5" />
            <a href="tel:+123654897" className="text-lg text-white">
              +123654897
            </a>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <img src="/vector-2.svg" alt="Email Icon" className="h-7 w-10" />
            <a href="mailto:udh..........ei@gmail.com" className="text-lg text-white">
              udh..........ei@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-start  space-x-1 md:space-x-2">
            <img src="/group-1.svg" alt="Social Icon 1" className="h-6 w-6" />
            <img src="/vector-4.svg" alt="Social Icon 2" className="h-6 w-6" />
            <img src="/vector-6.svg" alt="Social Icon 3" className="h-6 w-6" />
            <img src="/group.svg" alt="Social Icon 4" className="h-6 w-6" />
            <img src="/group-2.svg" alt="Social Icon 5" className="h-6 w-6" />
          </div>
        </div>

        <nav className="hidden md:block w-[88%] bg-secondary-colour px-5 py-2 rounded">
          <div className="flex flex-row  uppercase">
            <div className="flex space-x-[2vw] lg:space-x-16">
              <Link href="/" className="text-black no-underline hover:text-white text-[16px] md:text-[20px]">
                Home
              </Link>
              <div className="relative z-[2]">
                <button
                  onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
                  className="hover:text-white bg-secondary-colour border-none text-[16px] md:text-[20px] uppercase"
                >
                  Register Farm
                </button>
                {showRegisterDropdown && (
                  <div className="absolute left-0 w-56 bg-backgroundColor-custom-green shadow-lg rounded-md border border-gray-200" style={{ marginTop: '8px' }}>
                    <Link href="/register-farm" className="py-2 block text-black hover:bg-white text-lg px-2 no-underline">
                      APPLY TO LIST YOUR FARM
                    </Link>
                    <Link href="/start-agrotourism-form" className="py-2 block text-lg text-black hover:bg-white px-2 no-underline">
                      WANT TO START AGROTOURISM
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/listed-farm" className="text-black no-underline hover:text-white text-[16px] md:text-[20px] ml-4 md:ml-20">
                Book Farm
              </Link>
              <Link href="/events" className="text-black no-underline hover:text-white text-[16px] md:text-[20px]">
                Events
              </Link>
              <div className="relative z-[2] pr-4 md:pr-32 md:mr-80">
                <button
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                  className="hover:text-white bg-secondary-colour border-none text-[16px] md:text-[20px] uppercase"
                >
                  More
                </button>
                {showMoreDropdown && (
                  <div className="absolute left-0 w-56 bg-backgroundColor-custom-green shadow-lg rounded-md border border-gray-200" style={{ marginTop: '8px' }}>
                    <Link href="/about-us" className="py-2 block text-black hover:bg-white text-lg px-2 no-underline">
                      About us
                    </Link>
                    <Link href="/contact-us" className="py-2 block text-lg text-black hover:bg-white px-2 no-underline">
                      Contact us
                    </Link>
                    <Link href="/gallery" className="py-2 block text-black hover:bg-white text-lg px-2 no-underline">
                      Gallery
                    </Link>
                    <Link href="/award" className="py-2 block text-black hover:bg-white text-lg px-2 no-underline">
                      Award
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

TopNavBar.propTypes = {
  className: PropTypes.string,
};

export default TopNavBar;

import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const QuickLinks = ({ className = "" }) => {
  const router = useRouter();

  const onBookAFarmClick = useCallback(() => {
    router.push("/listed-farm");
  }, [router]);

  return (
    <div
      className={`flex flex-col items-start justify-start py-0 pr-[117px] pl-0 gap-[10px] text-left text-xl text-secondary-colour font-inter ${className}`}
    >
      <div className="relative font-semibold inline-block min-w-[115px] z-[2] mq450:text-base">
        Direct Links
      </div>
      <div className="flex flex-col items-start justify-start gap-[8.5px] z-[2] text-base text-white">
        <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
          <div className="relative inline-block min-w-[69px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Home</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div
            className="relative inline-block min-w-[119px] cursor-pointer"
            onClick={onBookAFarmClick}
          >
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Book a Farm</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative inline-block min-w-[122px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Listed Farms</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-0">
          <div className="relative shrink-0">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Register Farm</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0">
          <div className="relative inline-block min-w-[75px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0">
          <div className="relative inline-block min-w-[109px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
          <div className="relative inline-block min-w-[95px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0">
          <div className="relative inline-block min-w-[77px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Gallery</li>
            </ul>
          </div>
        </div>
        <div className="w-[119px] flex flex-row items-start justify-start">
          <div className="relative inline-block min-w-[72px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Award</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

QuickLinks.propTypes = {
  className: PropTypes.string,
};

export default QuickLinks;

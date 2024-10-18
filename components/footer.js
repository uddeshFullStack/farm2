
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link"; // Import the Link component from Next.js
import SaranFarmHeading from "./footerComponents/SaranFarmHeading";

import FooterContactUs from "./footerComponents/FooterContactUs";
import DirectLinks from "./footerComponents/DirectLinks";

const Footer = ({ className = "" }) => {
  const router = useRouter();

  return (
    <footer
      className={`w-screen lg:w-full  self-stretch bg-primary-colour flex flex-col items-end justify-start pt-[30px] pb-[25.5px] pr-[5px] pl-0 box-border gap-[25.8px] text-left text-xl text-secondary-colour font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className=" self-stretch h-[400px] relative bg-primary-colour hidden" />
      <div className="md:mx-8 self-stretch flex flex-row items-start justify-end py-0  box-border max-w-full mq750:pl-2 mq750:pr-[3px] mq750:box-border">
        <div className="flex flex-row items-start justify-between max-w-full gap-[20px]  mq1275:flex-wrap">
          <SaranFarmHeading />
          <DirectLinks/>
          <FooterContactUs />
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full "
        alt=""
        src="/vector-95-1.svg"
      />
      <div className="flex flex-row justify-start gap-4  text-sm text-white w-[95vw]">
          <div className="lg:pl-10">All images and trademarks belong to their respective owners.</div>
          <div className="lg:pl-48">Terms and conditions  <span className="text-gray-500"> | </span> </div>
          <div>Privacy Policy <span className="text-gray-500"> | </span> </div>
          <div>Refund Policy  <span className="text-gray-500"> | </span> </div>
          <div>Copyright @ 2023 Saran Farm. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

const FooterContactUs = () => {
  return (
    <div className="w-[282px] flex flex-col items-start justify-start gap-[8px]">
      <div className="relative font-semibold inline-block min-w-[109px] mq450:text-base">
        Contact Us
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-base text-white">
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <img
            className="w-[25px] h-[22px] relative object-cover"
            alt=""
            src="/rotary-dial-telephone@2x.png"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
            <img
              className="h-[22px] w-[22px] relative object-cover"
              alt=""
              src="/download-mail@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <img
              className="h-[23px] w-[23px] relative object-cover"
              alt=""
              src="/interior@2x.png"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
            <div className="relative whitespace-nowrap">+91 98282 01118</div>
            <div className="flex flex-col sp:flex-row sm:flex-col gap-2 md:gap-x-0 md:gap-y-[10.5px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] gap-[10px]">
                <div className="relative whitespace-nowrap">
                  saranfarmoffice@gmail.com
                </div>
                <div className="self-stretch relative">
                  <p className="[margin-block-start:0] [margin-block-end:2px]">
                    Bhamashah Techno Hub, Sansthan Path,
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:2px]">
                    Jhalana Gram, Malviya Nagar,
                  </p>
                  <p className="m-0">Jaipur, Rajasthan 302017</p>
                </div>
              </div>
              <div className="pr-10 sm:w-[30vw] w-[25vw] md:w-[116.9px] md:h-[108px]">
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/westendlondonmapwithpin-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;

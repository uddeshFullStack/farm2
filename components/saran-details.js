import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const SaranDetails = ({ className = "" }) => {
  const router = useRouter();

  const onSaranFarmTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={`w-[435.1px] flex flex-col items-start justify-start gap-[10.4px] max-w-full text-left text-14xl text-secondary-colour font-inter ${className}`}
    >
      <h2
        className="m-0 relative text-inherit font-black font-inherit cursor-pointer z-[1] mq750:text-7xl mq450:text-xl"
        onClick={onSaranFarmTextClick}
      >
        <p className="m-0">Saran</p>
        <p className="m-0 text-white">Farm</p>
      </h2>
      <div className="self-stretch flex flex-col items-start justify-start gap-[42.8px] max-w-full text-base text-white mq450:gap-[21px]">
        <blockquote className="m-0 self-stretch h-24 relative inline-block shrink-0 z-[1]">
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            <span className="font-inter text-white">{`"Escape to the tranquility of `}</span>
            <span className="text-secondary-colour whitespace-pre-wrap">
              <span className="font-medium font-inter">Saran.farm</span>
            </span>
            <span className="whitespace-pre-wrap">
              <span className="text-secondary-colour whitespace-pre-wrap">
                ,
              </span>
              <span className="whitespace-pre-wrap">
                {" "}
                where nature, culture, and authentic farm experiences come
                together to create unforgettable memories."
              </span>
            </span>
          </p>
          <p className="m-0">
            <span className="whitespace-pre-wrap">
              <span className="whitespace-pre-wrap"> "</span>
            </span>
            <span className="font-medium font-inter text-secondary-colour">
              Saran.farm:
            </span>
            <span className="font-inter text-white">
              {" "}
              Where city dwellers find solace, farmers find prosperity, and the
              beauty of rural life is cherished."
            </span>
          </p>
        </blockquote>
        <div className="flex flex-row items-start justify-start gap-[29px] max-w-full text-9xl text-secondary-colour mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-3xl">
            Follow us:
          </h3>
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <img
                className="h-6 w-6 relative min-h-[24px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-1-2.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-70.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-6.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-2-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SaranDetails.propTypes = {
  className: PropTypes.string,
};

export default SaranDetails;

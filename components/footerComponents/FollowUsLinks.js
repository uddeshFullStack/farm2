const FollowUsLinks = () => {
    return (
      <div className="mt-4">
        <h2 className="m-0 text-inherit font-semibold font-inherit mq450:text-3xl">
          Follow us:
        </h2>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/group-1-2.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/vector-70.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/vector-6.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/group-2-2.svg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default FollowUsLinks;
  
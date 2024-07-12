import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full text-left text-5xl text-primary-colour font-inter mq750:gap-[21px] mq1275:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[535px] max-w-full mq750:min-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
          Cultural Immersion:
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-justify text-xl text-lite">
          <div className="self-stretch h-48 relative tracking-[0.03em] inline-block mq450:text-base">
            <ul className="m-0 text-inherit pl-[27px]">
              <li className="mb-0">
                <span className="font-medium font-inter">
                  Traditional Festivals and Events:
                </span>
                <span>
                  {" "}
                  Saran.farm organizes and facilitates participation in
                  traditional festivals and events celebrated by the local
                  community. Visitors can witness vibrant cultural performances,
                  traditional music, dance, and art forms, gaining a deeper
                  understanding of the rich cultural heritage of the region.
                </span>
              </li>
              <li>
                <span className="font-medium font-inter">
                  Interaction with Local Villagers:
                </span>
                <span className="font-inter">
                  {" "}
                  Saran.farm encourages visitors to interact with local
                  villagers, fostering cultural exchange and creating meaningful
                  connections. Visitors can engage in conversations, learn about
                  local...............
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[30px]">
            <button className="cursor-pointer py-2 px-[25px] bg-primary-colour rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-colour hover:bg-teal-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-teal-200">
              <div className="relative text-xl font-medium font-inter text-white text-left inline-block min-w-[91px]">
                See More
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[445px] relative max-h-full object-cover max-w-full mq1275:flex-1"
        loading="lazy"
        alt=""
        src="/group-312@2x.png"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

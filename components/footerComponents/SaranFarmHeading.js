import FollowUsLinks from "./FollowUsLinks";

const SaranFarmHeading = () => {
    return (
  
      <div className="flex flex-col items-start justify-start gap-y-2 mb-5">
          <h1 className="m-0 pb-2 relative text-inherit font-black font-inherit mq450:text-xl mq750:text-7xl">
            <p className="m-0">Saran</p>
            <p className="m-0 text-white">Farm</p>
          </h1>
          <blockquote className="m-0 self-stretch h-auto relative text-base inline-block shrink-0 text-white">
            <p className="[margin-block-start:0] [margin-block-end:5px] text-justify" style={{ textAlign: "justify" }}>
              <span className="font-inter text-white">
                {`"Escape to the tranquility of `}
              </span>
              <span className="text-secondary-colour whitespace-pre-wrap">
                <span className="font-medium font-inter">Saran Farm</span>
              </span>
              <span className="whitespace-pre-wrap">
                {`, where nature, culture, and authentic farm experiences come together to create unforgettable memories. `}
              </span>
            
             
              <span className="font-medium font-inter text-secondary-colour">
                Saran Farm
              </span>
              <span className="font-inter text-white">
                {` Where city dwellers find solace, farmers find prosperity, and the beauty of rural life is cherished."`}
              </span>
            </p>
          </blockquote>
        <FollowUsLinks/>
      </div>
      
    );
  };
  
  export default SaranFarmHeading;
  
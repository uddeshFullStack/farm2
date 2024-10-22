import FollowUsLinks from "./FollowUsLinks";

const SaranFarmHeading = () => {
    return (
 
      <div className="flex flex-col items-start justify-start gap-y-2 mb-5 mt-0">
        <blockquote className="m-0 lg:pb-8 self-stretch h-auto relative text-base inline-block shrink-0 text-white [margin-block-start:0] [margin-block-end:5px] text-justify" style={{ textAlign: "justify" }}>
            <p className="m-0 pb-2 relative text-inherit font-black font-inherit mq450:text-xl mq750:text-7xl ">
              <span className="m-0 text-[28px] text-secondary-colour">Saran</span>
              <span className="m-0 text-[28px] text-white"> Farm </span>
            </p>
              <span className="font-inter text-white">
                {`"Escape to the tranquility of `}
              </span>
              <span className="text-secondary-colour whitespace-pre-wrap">
                <span className="font-medium font-inter">Saran Farm</span>
              </span>
              <span className="whitespace-pre-wrap">
                {`, where nature, culture and authentic farm experiences come together to create unforgettable memories."`}
              </span>
            
            <p>
              <span className="font-medium font-inter text-secondary-colour">
                "Saran Farm
              </span>
              <span className="font-inter text-white">
                {` Where city dwellers find solace, farmers find prosperity and the beauty of rural life is cherished."`}
              </span>
            </p> 
          </blockquote>
        <FollowUsLinks/>
      </div>
      
    );
  };
  
  export default SaranFarmHeading;
  


const CardContainerLower = ({ cardData }) => {
  return (
    <div className="flex flex-wrap justify-center items-center  gap-y-10 md:gap-x-10 mt-10">
      {cardData.map((item, index) => (
        <CardComponentLower
          key={index}
          image={images[index]}
          topic={item.topic}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardContainerLower;

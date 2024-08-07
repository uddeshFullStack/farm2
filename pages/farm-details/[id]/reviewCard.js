import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaStar, FaWhatsapp } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index} 
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ image, name, description, ratings,phoneNumber,email,phoneImage }) => {
  return (
    <div className="bg-white text-black rounded-xl shadow-md overflow-hidden flex flex-row justify-around font-inter mt-20 gap-x-16">
        <div className='font-bold text-primary-colour text-xl ml-10'>
            Reviews
        </div>
        <div className="w-[600px] h-[300px]  flex flex-col">
            <div className="flex flex-row gap-4">
                <div>
                    <Image
                    className="rounded-full object-cover ml-16"
                    src={image}
                    alt={name}
                    width={65}
                    height={65}
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <div className="text-xl font-semibold text-gray-900 justify-start">
                    {name}
                    </div>
                    <div className="">
                        <StarRating rating={ratings.overall} />
                    </div>
                </div>
            </div>
            <div className="text-gray-500 text-justify mx-16 flex flex-col">
                <div>
                    {description}
                </div>
                <div className="flex flex-row gap-28 mt-4">
                    <div className="flex flex-col gap-4 ">
                        <div className="">
                            <span>Location</span>
                            <StarRating rating={ratings.location} />
                        </div>
                        <div className="">
                            <span>Quality</span>
                            <StarRating rating={ratings.quality} />
                        </div>
                        </div>
                        <div className="flex flex-col gap-4">
                        <div className="">
                            <span>Comfort</span>
                            <StarRating rating={ratings.comfort} />
                        </div>
                        <div className="">
                            <span>Price</span>
                            <StarRating rating={ratings.price} />
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col gap-2 text-justify">
            <div className=''>
                <Image src={phoneImage} alt={phoneImage} className='w-[120px] h-[120px] rounded-full justify-center'/>
            </div>
            <div className="text-green-600 font-semibold text-lg mb-4 flex items-center">
                <FaPhone className="mr-2" />
                Need Help? Call & WhatsApp
            </div>
            <div className="flex items-center mb-2">
                <FaWhatsapp className="text-green-500 mr-2" />
                <Link href={`tel:${phoneNumber}`} className="text-gray-700 hover:underline">
                {phoneNumber}
                </Link>
            </div>
            <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-2" />
                <Link href={`mailto:${email}`} className="text-gray-700 hover:underline">
                {email}
                </Link>
            </div>
        </div>
    </div>
   
      
  );
};

export default ReviewCard;
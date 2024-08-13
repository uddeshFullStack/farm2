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
    <div className="bg-white text-black rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row justify-start font-inter mt-20 gap-x-20">
        <div className='font-bold text-primary-colour text-xl ml-10'>
            Reviews
        </div>
    <div className="flex flex-col gap-[1.5vw] m-8">
        <div className="flex flex-row gap-[2vw] items-center ">
          <Image
            className="rounded-full object-cover"
            src={image}
            alt={name}
            width={65}
            height={65}
          />
          <div className="flex flex-col justify-center lg:justify-start ">
            <div className="font-semibold text-gray-900">
              {name}
            </div>
            <StarRating rating={ratings.overall} />
          </div>
        </div>
        <div className="flex flex-col text-gray-500 text-justify max-w-sm">
          <div>
            {description}
          </div>
          <div className="flex flex-wrap gap-[3vw] mt-[4vw]">
            <div className="flex flex-col gap-[2vw]">
              <div>
                <span>Location</span>
                <StarRating rating={ratings.location} />
              </div>
              <div>
                <span>Quality</span>
                <StarRating rating={ratings.quality} />
              </div>
            </div>
            <div className="flex flex-col gap-[2vw]">
              <div>
                <span>Comfort</span>
                <StarRating rating={ratings.comfort} />
              </div>
              <div>
                <span>Price</span>
                <StarRating rating={ratings.price} />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="max-w-sm bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col gap-2 text-justify">
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
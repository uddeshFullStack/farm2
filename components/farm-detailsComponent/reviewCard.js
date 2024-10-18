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
    <div className="bg-white lg:w-[1500px] text-black rounded-xl shadow-md overflow-hidden flex flex-col justify-center it lg:flex-row lg:justify-start font-inter mt-10 pb-4 gap-x-20">
        <div className='font-bold text-primary-colour text-xl ml-10'>
            Reviews
        </div>
    <div className="flex flex-col gap-[1.5vw] mx-8 mb-8 ">
        <div className="flex flex-row gap-[2vw] items-center ">
        <Image
          style={{ border: '4px solid #004D35' }}
          className="rounded-full object-cover"
          src={image}
          alt={name}
          width={65}
          height={65}
        />



          <div className="flex flex-col justify-center lg:justify-start mt-6">
            <div className="font-semibold text-gray-900">
              {name} <span className='text-gray-200 text-sm pl-2'>02 Mar 2024</span>
            </div>
            <StarRating rating={ratings.overall} />
          </div>
        </div>
        <div className="flex flex-col text-gray-500 text-justify max-w-md">
          <div className=''>
            {description}
          </div>
          <div className="flex flex-wrap gap-[3vw] md:mt-[20px] mt-[4vw]">
            <div className="flex flex-col gap-x-[2vw] gap-y-5">
              <div className="flex items-center justify-between gap-x-8">
                <span>Location</span>
                <StarRating rating={ratings.location} />
              </div>
              <div className="flex items-center justify-between gap-x-8">
                <span>Quality</span>
                <StarRating rating={ratings.quality} />
              </div>
            </div>
            <div className="flex flex-col  gap-x-[2vw] gap-y-5">
              <div className="flex items-center justify-between gap-x-8">
                <span>Comfort</span>
                <StarRating rating={ratings.comfort} />
              </div>
              <div className="flex items-center justify-between gap-x-8">
                <span>Price</span>
                <StarRating rating={ratings.price} />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="items-center justify-center sm:max-w-sm  md:h-[200px] bg-white lg:ml-16 rounded-lg shadow-md p-6 border border-primary-colour flex flex-col gap-2 text-justify" style={{ border: '1px solid #378805' }}>
            <div className=''>
                <Image src={phoneImage} alt={phoneImage} className='w-[80px] h-[80px] rounded-full justify-center'/>
            </div>
            <div className="text-primary-colour font-semibold text-lg mb-4 flex items-center">
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
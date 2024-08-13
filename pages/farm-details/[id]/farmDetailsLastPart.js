import Image from 'next/image';
import React from 'react';
import { FaStar, FaPhone } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} color={index < rating ? "#ffc107" : "#e4e5e9"} />
      ))}
    </div>
  );
};

const ReviewComponent = ({ 
  reviewerImage, 
  reviewerName, 
  rating, 
  reviewText, 
  description,
  locationRating,
  qualityRating,
  comfortRating,
  priceRating,
  phoneNumber,
  email
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
            <div className=''>
                <Image src={reviewerImage} alt={reviewerName} style={{width:'50px',height:'50px',radius:'full'}} />
            </div>
            <div className="flex flex-row"> 
              <div>
                  <h3>{reviewerName}</h3>
              </div>
              <div>    
                  <StarRating rating={rating} />
                  <p className="review-text">{reviewText}</p>
              </div>
            </div>
          <div className='flex flex-row'>
            <div className="description">{description}</div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <div className="">
                <span>Location</span>
                <StarRating rating={locationRating} />
              </div>
              <div className="">
                <span>Quality</span>
                <StarRating rating={qualityRating} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <span>Comfort</span>
                <StarRating rating={comfortRating} />
              </div>
              <div className="">
                <span>Price</span>
                <StarRating rating={priceRating} />
              </div>
            </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <FaPhone size={24} />
          <h4>Need Help? Call & WhatsApp</h4>
          <p>{phoneNumber}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewComponent;
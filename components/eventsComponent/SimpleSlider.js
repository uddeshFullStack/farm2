import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SimpleSlider = ({ events }) => {
  console.log(events[1].image);
  return (
    <div className='p-5'>
      <Swiper
        spaceBetween={20}
        loop={true}
        className="mySwiper"
        style={{ width: '100%', height: 'auto' }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className='w-full'>
  <img 
    src={event.image} 
    alt={event.title} 
    className="w-[200px] h-[200px] object-cover" 
  />
  <div className='text-center mt-2 bg-red-800 z-10'>
    <h3 className='text-xl font-bold text-white'>dctfgvhbjgfcdxfcgv {event.title}</h3>
    <p className='text-gray-600'>{event.description}</p>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SimpleSlider;

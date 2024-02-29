import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { Navigation } from 'swiper/modules';


const Carousel = ({ customClass, data }) => {
  return (
    <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className={`Swiper ${customClass}`}
          >
      {data.map((item, index) => (
        <SwiperSlide key={index} className='customSwiperSlide'>
          <div>
            <a href={item.link} className='hrefText'>{item.title}</a>
            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default Carousel;
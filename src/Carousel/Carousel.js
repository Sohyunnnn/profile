import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { Navigation } from 'swiper/modules';


  const Carousel = ({ customClass }) => {
    return (
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={`Swiper ${customClass}`}
      >
      <SwiperSlide>
        <div>
          <a href='https://github.com/Sohyunnnn/Guru1_Unity' className='hrefText'>유니티 개발</a>
          <p>몽환: 스토리 게임 제작</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <a href='https://github.com/Sohyunnnn/react-netflix' className='hrefText'>리액트 넷플릭스 클론코딩</a>
          <p>리액트를 공부하면서 넷플릭스 클론코딩을 함</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <a href='https://github.com/Sohyunnnn/homecook_frontend' className='hrefText'>리액트 네이티브 개발</a>
          <p>HomeCook: 안드로이드 전용 홈메이드 집밥 배달 앱 서비스</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <a href='https://github.com/Sohyunnnn/HomeSweetHome' className='hrefText'>자바 gui 개발</a>
          <p>Home Sweet Home: 인테리어를 스타일별로 추천해주는 서비스 개발</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <a href='https://github.com/Sohyunnnn/youpport_frontend' className='hrefText'>안드로이드 개발</a> 
          <p>Youpport: 자립준비청년들을 위한 앱 서비스</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
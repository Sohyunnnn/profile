import React from 'react'
import emojiImage from '../imgs/emoji.png';
import './MainPage.css';
import Carousel from '../Carousel/Carousel';

function MainPage() {

  const carouselData = [
    // 여기에 데이터 배열을 정의
    {
      link: 'https://github.com/Sohyunnnn/Guru1_Unity',
      title: '유니티 개발',
      description: '몽환: 스토리 게임 제작'
    },
    {
      link: 'https://github.com/Sohyunnnn/react-netflix',
      title: '리액트 넷플릭스 클론코딩',
      description: '리액트를 공부하면서 넷플릭스 클론코딩을 함'
    },
    {
      link: 'https://github.com/Sohyunnnn/homecook_frontend',
      title: '리액트 네이티브 개발',
      description: 'HomeCook: 안드로이드 전용 홈메이드 집밥 배달 앱 서비스'
    },
    {
      link: 'https://github.com/Sohyunnnn/HomeSweetHome',
      title: '자바 gui 개발',
      description: 'Home Sweet Home: 인테리어를 스타일별로 추천해주는 서비스 개발'
    },
    {
      link: 'https://github.com/Sohyunnnn/youpport_frontend',
      title: '안드로이드 개발',
      description: 'Youpport: 자립준비청년들을 위한 앱 서비스'
    }
  ];

  
  return (
    <div className='Main'>
        <div className='personalContainer'>
            <img src={emojiImage} alt='emoji'/>
                <div>
                    <p>박소현</p>
                    <p>서울여자대학교</p> 
                    <p>수학과/소프트웨어융합학과</p>
                    <div className='contact'>
                        <p>email: thgus05061@naver.com</p>
                        <a href='https:github.com/Sohyunnnn'>github: Sohyunnnn</a>
                    </div>
                    
                </div> 
        </div>
            <div className='dev'>
               <h1 className='devExp'>개발 경험</h1>
               <Carousel customClass="devSwiper" data={carouselData} />
            </div>
        
    </div>
  )
}

export default MainPage
import React from 'react'
import emojiImage from '../imgs/emoji.png';
import './MainPage.css';
import Carousel from '../Carousel/Carousel';

function MainPage() {
  return (
    <div className='Main'>
        <div className='personalContainer'>
            <img src={emojiImage} />
                <div>
                    <h1>박소현</h1>
                    <h2>서울여자대학교</h2> 
                    <h2>수학과/소프트웨어융합학과</h2>
                    <div className='contact'>
                        <h3>email: thgus05061@naver.com</h3>
                    <h3>github: Sohyunnnn</h3>
                    </div>
                    
                </div> 
        </div>
            <div className='dev'>
               <h1 className='devExp'>개발 경험</h1>
               <Carousel/>
            </div>
        
    </div>
  )
}

export default MainPage
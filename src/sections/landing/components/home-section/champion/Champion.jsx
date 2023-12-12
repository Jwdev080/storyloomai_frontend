import './champion.scss'

import HomeSection from '../HomeSection'
import ChampionCard from './ChampionCard'

import { useRef, useEffect } from 'react'
import { bg2 } from '../../../assets/images'
import { championsData } from '../../../assets/dummy'

import { Swiper, SwiperSlide } from 'swiper/react'

import { third_screen_video } from '../../../assets/videos'

const Champion = props => {


  return (
    <HomeSection
      className={`champion ${props.isActive ? 'active' : ''}`}
      contentClassName='overlay'
      bgImage={bg2}
    >
      {/* <video
        ref={videoRef}
        width='100%'
        height='auto'
        loop={true}
        className='overlay'
      >
        <source src={third_screen_video} type='video/mp4' />
      </video> */}
      <div className='container relative'>
        <div className='champion-list'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChampionCard item={item} id={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  )
}

export default Champion

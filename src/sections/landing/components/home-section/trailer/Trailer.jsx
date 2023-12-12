import { useRef, useEffect } from 'react'

import { bg3, trailerImg } from '../../../assets/images'
import HomeSection from '../HomeSection'

import './trailer.scss'

import { second_screen_video } from '../../../assets/videos'

const Trailer = props => {
  const iframeRef = useRef(null)

  return (
    <HomeSection
      className={`trailer ${props.isActive ? 'active' : ''}`}
      contentClassName='overlay trailer__content'
      bgImage={bg3}
    >
      {/* <video
        autoPlay
        loop
        muted
        style={{ width: '100vw', height: '', position: 'absolute', zIndex: -1 }}
      >
        <source src={second_screen_video} type='video/mp4' />
      </video> */}
      <div className='trailer__content__info'>
        <div className='title'>
          <span>Story Idea you want</span>
          <h2 className='main-color'>With AI</h2>
        </div>
        <div className='video'></div>
      </div>
    </HomeSection>
  )
}

export default Trailer

import { useEffect } from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    landing,
    text1,
    text2,
    text3,
    card1,
    card2,
    card3,
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion
} from '../../../assets/images';

import {
    first_screen_video
} from '../../../assets/videos'
const champImgs = [card1, card2, card3]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            // if (!document.hidden) {
            //     animates[prevItem].next()
            // }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                //document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay1"
            //contentClassName="welcome__content"
            bgImage={landing}
        >
            {/* <video autoPlay loop muted style={{position:"fixed",zIndex:-1,width:"100%"}}>
                <source src={first_screen_video} type='video/mp4'/>
            </video> */}
            <div className="welcome__info relative">
                <div className="welcome__info__content">  
                    <div className="title">
                        {/* <img src={text1} style={{filter:"invert(100%)"}}/> */}
                        {/* <span>Welcome To</span> */}
                        {/* <img src={text2} style={{filter:"invert(100%)"}}/> */}
                        {/* <h2 className="main-color">Story Loom AI</h2> */}
                    </div>
                    <div className="description m-t-4">
                        {/* This is MVP for story loom ai */}
                        {/* <img src={text3} style={{filter:"invert(100%)"}}/> */}
                    </div>
                    
                    {/* <Button className="btn-second" sx={{marginTop:""}}>How it works...</Button> */}
                    <div className="btns m-t-4">
                        {/* <Button className="btn-main">OVERVIEW</Button> */}
                        {/* <Button className="btn-second" sx={{position:"absolute",}}>How it works...</Button> */}
                        {/* <Button className="btn-second" sx={{position:"absolute",}}>How it works...</Button> */}
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome

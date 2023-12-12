import './credit.scss'

import { useRef, useEffect } from 'react'

import {
    text1,
    text2,
    text3,
} from '../../../assets/images';
import { bgVideo ,bgVideo2 } from '../../../assets/videos'
import Button from '../../button/Button'

const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo2} type="video/mp4"/>
            </video>
            {/* <div className="credit__content">
                <div className="title">
                    <span>Start Your</span>
                    <h2 className="main-color">Story Loom AI</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">PLAY NOW</Button>
                    <Button className="btn-second">GET STARTED</Button>
                </div>
            </div> */}
            <div className="credit__content" style={{padding:"100px"}}>
                <div className="" style={{}}>
                    <img src={text1} style={{filter:"invert(100%)"}}/>
                    
                </div>
                <div className="">
                    <img src={text2} style={{filter:"invert(100%)"}}/>
                </div>
                <div className="">
                    <img src={text3} style={{filter:"invert(100%)"}}/>
                </div>
                <div className="btns m-t-4">
                    {/* <Button className="btn-main">PLAY NOW</Button>
                    <Button className="btn-second">GET STARTED</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Credit

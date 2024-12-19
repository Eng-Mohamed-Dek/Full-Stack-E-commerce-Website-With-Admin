import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="hand-hand-icon">
            <p>New</p>
            <img src="/Frontend_Assets/hand_icon.png" />
            </div>
            <p className="light">Collections</p>
            <p>For Everyone</p>
        </div>

        <div className="hero-right">
            <img src="/jacket-5.jpg" alt="picture" className='hero-right-img'/>
        </div>
    </div>
  )
}

export default Hero
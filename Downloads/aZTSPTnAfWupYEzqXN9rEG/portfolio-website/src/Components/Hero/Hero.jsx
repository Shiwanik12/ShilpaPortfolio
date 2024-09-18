import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/profilepic.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" className='profile-img' />
      <h1><span>I'm Shilpa Kanojiya,</span></h1>
      <p>Software Engineer-|| in Mastercard with 5+ years of experience 
        in multiple companies like Mastercard, Madrecha Solution and R Sales ARM IT.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero

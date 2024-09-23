import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
import NumberCounter from 'number-counter'



const Hero = () => {

  const transition = {type: "spring" , duration : 3}
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
<div className="left-h">
    <Header/>
{/* the best ad */}
    <div className="the-best-ad">
      <motion.div
       initial = {{left: mobile?'178px':'238px'}}
       whileInView={{left:'8px'}}
       transition={{...transition,type: 'tween'}}
       >
      
      </motion.div>
      <span>the best fitness club in the town</span>
    </div>

{/* Hero heading */}
<div className="hero-text">
<div>
  <span className='stroke-text'>Shape </span>
  <span>Your</span>
</div>
<div>
  <span>Ideal body</span>
  </div>
  <div>
<span>
      IDEAL BODY IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
</span>  
</div>
</div>
{/* figures */}
<div className='figures'>
  <div>
    <span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
    <span>expert coaches</span>
  </div>
  <div>
    <span><NumberCounter end={973} start={800} delay='4' preFix="+"/></span>
    <span>members joined</span>
  </div>
  <div>
    <span><NumberCounter end={50} start={35} delay='4' preFix="+"/></span>
    <span>fitness programs</span>
  </div>
</div>
{/* hero buttons */}
<div className="hero-buttons">
  <button className='btn'>Get Started</button>
  <button className='btn'>Learn More</button>
</div>
</div>
<div className="rigth-h">
  
  <button className="btn contact-button"> Contact us</button>
  


  <div className="heart-rate">
    <img src={Heart} alt="" />
    <span>Heart rate</span>
    <span>116 bpm</span>
  </div>


  {/* hero images */}
<img src={hero_image} className="hero-image" alt="" />
<motion.img 
initial={{right:'11rem'}}
whileInView={{right:'20rem'}}
transition={{...transition}}
src={hero_image_back} alt=""  className='hero-image-back'/>

{/* calories */}
<motion.div className="calories"
 initial = {{right: '37rem'}}
 whileInView={{right:'28rem'}}
 transition={{...transition}}
>
  <img src={Calories} alt="" />
 <div>
    <span>Calories Burned</span>
    <span>220 kcal</span>
 </div>
</motion.div>
</div>
    </div>
  )
}

export default Hero
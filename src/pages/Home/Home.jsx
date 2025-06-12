import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar' 
import hero_banner from '../../assets/mhb.jpg'
import hero_title from '../../assets/ntt.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>

      <Navbar/>
      <div className="hero">
        <img src={hero_banner}alt=""className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title}/>

          <h1>Money Heist</h1>
          
          
          <p>An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}/>Play</button>
            <button className='btn dark-btn'><img src={info_icon}/>More Info</button>
          </div>
         <TitleCards/>
        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Trending Now"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
        
      </div>
      <Footer/>

    </div>
  )
}

export default Home

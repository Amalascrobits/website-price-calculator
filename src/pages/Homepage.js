import React from 'react'
import  Shapes from '../components/shapes/Shapes'
import '../styles/home.css'
import '../styles/shapes.css'


const Homepage = () => {

  return (
    <div className='homepage-section'>
    <Shapes />
        <div className="homepage-body">
          <div className="homepage-heading">
          Website cost calculator app
          </div>
          <div className="homepage-content">
    Website cost calculator app is a free tool that helps you to calculate the total cost of your website and find out how much it will cost to build your site. It also provides you with an estimate of how long it will take for you to reach profitability, based on the number of visitors and pages on your site. </div>


    <button className="homepagee-btnnn"  onClick={() =>window.scrollTo({
            left: 0,
            top: window.innerHeight,
            behavior: "smooth",
          })}>
            
     Get Started
    </button>

         
         
        </div>
    </div>
  )
}

export default Homepage
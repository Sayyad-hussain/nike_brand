import React from 'react'
function Hero() {
  return (
    <div>
        <div className="hero ">

            <div className="hero-content">
                <h1> YOUR FEET DESERVE THE BEST </h1>

                <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>

                <div className="hero-btn">

                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>

                </div>

                <div className="shopping">

                    <p>Also Available On</p>

                    <div className="brand_icons">

                        <img src="/images/flipKart.png" alt="flipkart-icon" />
                        <img src="/images/amazon.png" alt="amazon-icon" />

                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe_image" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero

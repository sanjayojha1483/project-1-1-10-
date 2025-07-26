import React from 'react'

const Hero = () => {
  return (
    <main className='hero container '>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
        </p>
        <div className='hero-btn'>
            <button>Shop now</button>
            <button className='secondary-btn'>Category</button>
        </div>
        <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-icon'>
                <img src='public\images\flipkart.png' alt='flipcart-logo'/>
                <img src='public\images\amazon.png' alt='amazon-logo'/>
            </div>
        </div>
        </div>
        <div className='hero-image'>
            <img src='public\images\hero-image.png' alt='hero-logo'/>
        </div>
    </main>
  )
}

export default Hero
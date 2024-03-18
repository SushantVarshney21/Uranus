import React from 'react'
import "../../CSS/slider/slider.css"
import a1 from "../../assets/Untitled (5).png"
import a2 from "../../assets/Untitled (9).png"
import a3 from "../../assets/Untitled (8).png"
import a4 from "../../assets/Untitled (7).png"
import a5 from "../../assets/Untitled (6).png"

const Slider = () => {
  return (
    <>
      <div id="slider">
        <figure>
         <div className='image'> <img src={a1} alt="img1" /></div>
         <div className='image'> <img src={a2} alt="img1" /></div>
         <div className='image'> <img src={a3} alt="img1" /></div>
         <div className='image'> <img src={a4} alt="img1" /></div>
         <div className='image'> <img src={a5} alt="img1" /></div>

        </figure>
      </div>
    </>
  )
}

export default Slider

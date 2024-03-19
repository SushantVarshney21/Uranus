import React from 'react'
import img from "../../assets/Untitled (10)-DnvTJv-k.png"
import "../../CSS/navbar/nabvar.css"
const Navbar = () => {
  return (
    <>
    <nav>
       <div className='image'> <img src={img} alt='logo'/></div>
        <h2>$Uranus Web</h2>
    </nav>
    </>
  )
}

export default Navbar

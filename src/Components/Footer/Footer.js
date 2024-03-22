import React from 'react'
import "../../CSS/footer/footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='top'>
            <div>
            <h3>Partners</h3>
            <ul>
                <li><a href='#'>Decentralized Intelligence Agency</a></li>
                <li><a href='#'>World Vibe Web</a></li>
            </ul>
            </div>
            <div>
            <h3>Resources</h3>
            <ul>
                <li><a href='#'>Effective Vibes</a></li>
                <li><a href='#'>Golden Memes</a></li>
            </ul>
            </div>
        </div>
        {/* <hr/> */}
        <div className='bottom'>
            <p>Created by Sushant Varshney</p>
            <p>Email: sushantvars@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer

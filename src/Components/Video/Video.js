import React from 'react'
import "../../CSS/video/video.css"

const Video = () => {
  return (
    <div className='main'>
        <h2>In Crypto We Trust, But In Uranus, We Believe!</h2>
        <p>Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus. The Memefesto Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn't just your daily horoscope.</p>
      <div className='video'>
      <iframe width="200%" height="300px" src="https://www.youtube.com/embed/gI7qfHuLQ6Q" title="Uranus: Father of the Titans - Greek Mythology Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
     </div>
    </div>
  )
}

export default Video

import React from 'react'
import './Story.css'
import heartHands from './StoryImages/heart-hands.png'

export default function Story4() {
  return (
    <div className="story-div-four"> 
      <p>Throughout one's life, they face adversity, often covering their shining gold self with clay and mud to persevere.</p>
      <img src={heartHands} alt="hands making heart symbol"></img>

      <p>Take time to chip away at that protective-layer and be here, now.</p>
    </div>
  )
}

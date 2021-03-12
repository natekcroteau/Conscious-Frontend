import React from 'react'
import './Story.css'
import buddha from './StoryImages/golden-buddha.png'

export default function Story1() {

  return (
    <div className="story-div-one">
      <p>In ancient Thailand, a statue of the Buddha was constructed from gold and revered by Buddhist monks for 100's of years.</p>
      <img src={buddha} alt="golden buddha"></img>
      <p>When the monastery received word of an invading Burmese army, they wanted to preserve it from pillaging. </p>
    </div>
  )
}

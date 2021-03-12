import React from 'react'
import './Story.css'
import warriors from './StoryImages/warriors.png'
import oldStatue from './StoryImages/old-statues.png'

export default function Story2() {
  return (
    <div className="story-div-two">
      <img src={warriors} alt="warriors"></img>
      <p>The monks covered it in mud and plaster, disguising its value.</p>
      <p>Unfortunately, they were defenseless against the army.</p>
      <p>The plan worked though, the statue remained untouched.</p>
      <img src={oldStatue} alt="old statues"></img> 
      
    </div>
  )
}

import React from 'react'
import buddha from './golden-buddha.png'
import './Image.css'

export default function Image() {
  return (
    <div className="image-div">
      <img src={buddha} alt="pixel art golden buddha"></img>
    </div>
  )
}

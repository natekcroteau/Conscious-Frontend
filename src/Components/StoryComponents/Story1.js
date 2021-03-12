import React from 'react'
import './Story.css'
import buddha from './StoryImages/golden-buddha.png'
import Typist from 'react-typist';
import {useSpring, animated} from 'react-spring'

export default function Story1() {

  const props = useSpring({opacity: 1, from: {opacity: 0}, delay: 8500, config: { duration: 2000 }})

  return (
    <div className="story-div-one">
      <Typist cursor={{show: false}} >
        <p>In ancient Thailand, a statue of the Buddha was constructed from gold and revered by Buddhist monks for 100's of years.</p>
        <animated.div style={props}>
          <img src={buddha} alt="golden buddha"></img>
        </animated.div>
        <p>When the monastery received word of an invading Burmese army, they wanted to preserve it from pillaging. </p>
      </Typist>
    </div>
  )
}

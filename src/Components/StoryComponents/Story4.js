import React from 'react'
import './Story.css'
import heartHands from './StoryImages/heart-hands.png'
import Typist from 'react-typist';
import {useSpring, animated} from 'react-spring'

export default function Story4() {

  const propsStory4 = useSpring({opacity: 1, from: {opacity: 0}, delay: 53000, config: { duration: 2000 }})

  return (
    <div className="story-div-four"> 
      <Typist cursor={{show: false}} >
      <Typist.Delay ms={45000} />
        <p>Throughout one's life, they face adversity, often covering their shining gold self with clay and mud to persevere.</p>
        <animated.div style={propsStory4}>
          <img src={heartHands} alt="hands making heart symbol"></img>
        </animated.div>
        <p></p>
        <p>Take time to chip away at that protective-layer and be here, now.</p>
      </Typist>
    </div>
  )
}

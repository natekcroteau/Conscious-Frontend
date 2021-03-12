import React from 'react'
import './Story.css'
import warriors from './StoryImages/warriors.png'
import oldStatue from './StoryImages/old-statues.png'
import Typist from 'react-typist';
import {useSpring, animated} from 'react-spring'

export default function Story2() {
  const propsStory2 = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }})
  const propsStory2one = useSpring({opacity: 1, from: {opacity: 0}, delay: 21000, config: { duration: 2000 }})

  return (
    <div className="story-div-two">
      <Typist cursor={{show: false}} >
        <Typist.Delay ms={17000} />
          <animated.div style={propsStory2}>
            <img src={warriors} alt="warriors"></img>
          </animated.div>
          <p></p>
          <p>The monks covered it in mud and plaster, disguising its value.</p>
          <animated.div style={propsStory2one}>
            <img src={oldStatue} alt="old statues"></img> 
          </animated.div>
          <p></p>
          <p>The monastary was ransacked, yet the plan worked, the statue remained untouched.</p>
      </Typist>
    </div>
  )
}



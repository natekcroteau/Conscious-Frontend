import React from 'react'
import './Story.css'
import goldShining from './StoryImages/gold-shining.png'
import Typist from 'react-typist';
import {useSpring, animated} from 'react-spring'

export default function Story3() {

  const propsStory3 = useSpring({opacity: 1, from: {opacity: 0}, delay: 33500, config: { duration: 2000 }})

  return (
    <div className="story-div-three">
      <Typist cursor={{show: false}}>
      <Typist.Delay ms={27500} />
        <p>The monastery was eventually reestablished with no knowledge of the statue's golden self.</p>
        <animated.div style={propsStory3}>
          <img src={goldShining} alt="gold shining"></img>
        </animated.div>
        <p></p>
        <p>It wasn't until the 1950's when the "clay Buddha" was being relocated, that an accidental chip in the Buddha revealed it's true gold self.</p>
      </Typist>
    </div>
  )
}

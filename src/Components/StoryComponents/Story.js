import React from 'react'
import './Story.css'
import {useSpring, animated} from 'react-spring'
import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'
import Story4 from './Story4'


export default function Story() {

  const props1 = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }})
  const props2 = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }, delay: 16000})
  const props3 = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }, delay: 27000})
  const props4 = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 2000 }, delay: 4500})


  const beginStory = (event) => {
    return <animated.div style={props1}>
            <Story1 />
    </animated.div>
  }

  const secondStory = (event) => {
    return <animated.div style={props2}>
            <Story2 />
    </animated.div>
  }

  const thirdStory = () => {
    return <animated.div style={props3}>
            <Story3 />
    </animated.div>
  }

  const lastStory = () => {
    return <animated.div style={props4}>
            <Story4 />
    </animated.div>
  }

  return (
    <div className="story-page">
      <h2>The Story of the Golden Buddha</h2>
      <div className="story-div-zero">
        {beginStory()}
        {secondStory()}
        {thirdStory()}
        {lastStory()}
      </div>
    </div>
  )
}

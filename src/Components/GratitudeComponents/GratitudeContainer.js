import React, { useState } from 'react'
import './GratitudeContainer.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GratitudeFormMorning from './GratitudeFormMorning'
// import GratitudeFormEvening from './GratitudeFormEvening'


export default function GratitudeContainer(props) {
  const { userID, username } = props
  const [value, onChange] = useState(new Date())


  return (
    <>
      <div className={"gratitude-container"}>
        <Calendar className="calendar" onChange={onChange} value={value} />

        <GratitudeFormMorning userID={userID} username={username} date={value}/>

      </div>
    </>
  )
}

import React, { useState } from 'react'
import './GratitudeContainer.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GratitudeFormMorning from './GratitudeFormMorning'
// import GratitudeFormEvening from './GratitudeFormEvening'


export default function GratitudeContainer(props) {
  const { userID, username } = props
  const [value, onChange] = useState(new Date())
// const displayRelevantGratitudeForm = () => {
//   if(){
//     return <GratitudeFormMorning />
//   }else{
//     return <GratitudeFormEvening />
//   }
// }
//conditional per themeswitch for morning vs evening

  return (
    <>
      <div className={"gratitude-container"}>
        <Calendar className="calendar" onChange={onChange} value={value} />
        {/* {displayRelevantGratitudeForm()} */}
        <GratitudeFormMorning userID={userID} username={username} date={value}/>
        {/* <GratitudeFormEvening /> */}
      </div>
    </>
  )
}

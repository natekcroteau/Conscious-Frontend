import React, { useState } from 'react'
import './GratitudeContainer.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GratitudeFormMorning from './GratitudeFormMorning'
// import GratitudeFormEvening from './GratitudeFormEvening'


export default function GratitudeContainer() {
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
        <Calendar onChange={onChange} value={value} />
        {/* {displayRelevantGratitudeForm()} */}
        <GratitudeFormMorning date={value}/>
        {/* <GratitudeFormEvening /> */}
      </div>
    </>
  )
}

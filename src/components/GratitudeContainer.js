import React from 'react'
import './GratitudeContainer.css'
import CalendarContainer from './CalendarContainer'

export default function GratitudeContainer() {
  return (
    <>
      <div className={"gratitude-container"}>
        <CalendarContainer />
        <h1>Gratitude Container</h1>
      </div>
    </>
  )
}

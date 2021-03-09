import React from 'react'
import './FreewriteContainer.css'
import CalendarContainer from './CalendarContainer'
import FreewriteInput from './FreewriteInput'

export default function FreewriteContainer() {
  return (
    <div className={"freewrite-container"}>
      <CalendarContainer />
      <FreewriteInput />
    </div>
  )
}

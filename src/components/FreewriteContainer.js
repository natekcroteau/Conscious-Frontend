import React from 'react'
import './FreewriteContainer.css'
import CalendarContainer from './CalendarContainer'
import FreewriteTextInput from './FreewriteTextInput'


export default function FreewriteContainer() {
  return (
    <div className={"freewrite-container"}>
      <CalendarContainer />
      <FreewriteTextInput />
    </div>
  )
}

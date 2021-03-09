import React, { useState } from 'react'
import './FreewriteContainer.css'
import FreewriteTextInput from './FreewriteTextInput'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function FreewriteContainer() {
  const [value, onChange] = useState(new Date())
  return (
    <div className={"freewrite-container"}>
      <Calendar onChange={onChange} value={value} />
      <FreewriteTextInput date={value}/>
    </div>
  )
}

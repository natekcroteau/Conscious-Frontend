import React, { useState } from 'react'
import './FreewriteContainer.css'
import FreewriteTextInput from './FreewriteTextInput'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function FreewriteContainer(props) {
  const { userID, username } = props
  const [value, onChange] = useState(new Date())
  return (
    <div className={"freewrite-container"}>
      <Calendar className="calendar" onChange={onChange} value={value} />
      <FreewriteTextInput userID={userID} username={username} date={value}/>
    </div>
  )
}

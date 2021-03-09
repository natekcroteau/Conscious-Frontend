import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


export default function CalendarContainer() {

  const localizer = momentLocalizer(moment)
  const myEventsList = []

  const MyCalendar = props => (
    <div className={"calendar-div"}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 250 }}
      />
    </div>
  )
  return (
    <div className={"calendar-container"}>
      {MyCalendar()}
    </div>
  )
}

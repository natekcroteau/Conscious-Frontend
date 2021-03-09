import React from 'react'
import './GratitudeFormEvening.css'


export default function GratitudeFormEvening() {
  return (
    <form className="gratitude-form-evening">
      <label>What amazing thing happened today?</label>
      <input type="text" name="entry1"></input>

      <label>How could I have made today even better?</label>
      <input type="text" name="entry2"></input>

      <label>I am ...</label>
      <input type="text" name="entry3"></input>
      <input type="submit" value="Submit Evening Gratitude" />
    </form>
  )
}

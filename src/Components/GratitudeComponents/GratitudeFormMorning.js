import React from 'react'
import './GratitudeFormMorning.css'

export default function GratitudeFormMorning(props) {


  return (
    <form className="gratitude-form-morning">
      <label>I am grateful for ...</label>
      <input type="text" name="entry1"></input>

      <label>What would make today awesome?</label>
      <input type="text" name="entry2"></input>

      <label>I am ...</label>
      <input type="text" name="entry3"></input>
      <input type="submit" value="Submit Morning Gratitude" />
    </form>
  )
}

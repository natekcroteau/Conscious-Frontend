import React, { useState } from 'react'
import './GratitudeFormMorning.css'

export default function GratitudeFormMorning(props) {
  let [entry1, setEntry1] = useState("")
  let [entry2, setEntry2] = useState("")
  let [entry3, setEntry3] = useState("")

  const { date } = props

  const postGratitude = (event) => {
    fetch('http://localhost:3000/gratitudes', {
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "gratitudes":{
          "date": date,
          "user_id": 1,
          "entry1": entry1, 
          "entry2": entry2,
          "entry3": entry3,
        }
      })
      //loading animation replaces component?  
    })
  }

  const handleChange1 = (event) => {
    setEntry1(entry1 = event.target.value)
  }

  const handleChange2 = (event) => {
    setEntry2(entry2 = event.target.value)
  }

  const handleChange3 = (event) => {
    setEntry3(entry3 = event.target.value)
  }



  return (
    <form  className="gratitude-form-morning">
      <label>I am grateful for ...</label>
      <input type="text" name="entry1" value={entry1} onChange={handleChange1}></input>

      <label>What would make today awesome?</label>
      <input type="text" name="entry2" value={entry2} onChange={handleChange2}></input>

      <label>I am ...</label>
      <input type="text" name="entry3" value={entry3} onChange={handleChange3}></input>
      
      <input type="submit" value="Submit Morning Gratitude" onClick={postGratitude}/>
    </form>
  )
}

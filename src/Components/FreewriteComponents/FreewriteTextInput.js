import React, { useState } from 'react'
import './FreewriteTextInput.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function FreewriteTextInput(props) {
  const [freewriteText, setText] = useState('')

  const { date } = props

  let baseline = (freewriteText.length - 7)

  const displayWordCount = () => {
    if(baseline < 0){
      return <p>0</p>
    }else{
      return <p>{baseline}</p>
    }
  }

  // const newDate = date.slice(4, 14)
  

  const submitEntry = (event) => {
    fetch('http://localhost:3000/freewrites', {
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "freewrites":{
          "date": date,
          "entry": freewriteText,
          "user_id": 1
        }
      })
      //loading animation replaces component?  
    })
  }

  return (
    <div className="freewrite-text-input" >
      <div className="editor">
        <CKEditor 
          editor={ClassicEditor}
          data={freewriteText}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
        {displayWordCount()}
        <button type="submit" onClick={submitEntry}>Submit</button>
      </div>
      
    </div>
  )
}


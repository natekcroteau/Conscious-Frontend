import React, { useState } from 'react'
import './FreewriteTextInput.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'antd'
import 'antd/dist/antd.css';

export default function FreewriteTextInput(props) {
  let [freewriteText, setText] = useState('')

  const { date, userID } = props

  const displayWordCount = () => {
    let wordCount = freewriteText.split(' ').length

    if(wordCount <= 1){
      return <p>0 words</p>
    }else{
      return <p>{wordCount} words</p>
    }
  }

  const resetEditor = () => {
    setText(freewriteText = '')
  }

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
          "user_id": userID
        }
      })
    }).then(resetEditor)
  }

  return (
    <div className="freewrite-text-input" >
      {displayWordCount()}
      <div className="editor">
        <CKEditor 
          editor={ClassicEditor}
          data={freewriteText}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
        <Button className="submit-button" type="primary" onClick={submitEntry}>Submit</Button>
      </div>
      
    </div>
  )
}


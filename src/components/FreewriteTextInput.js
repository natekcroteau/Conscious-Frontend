import React, { useState } from 'react'
import './FreewriteTextInput.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function FreewriteTextInput() {
  const [text, setText] = useState("")
  return (
    <div className="freewrite-text-input" >
      <div className="editor">
        <CKEditor 
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
      </div>
    </div>
  )
}


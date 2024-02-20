import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './styles.css'

interface TextEditorProps {
  handleEditorChange: (event: any, editor: any) => void
  editorData: string
}

export function TextEditor({
  editorData,
  handleEditorChange,
}: TextEditorProps) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        placeholder: 'Digite aqui...',
        toolbar: {
          removeItems: [
            'bulletedList',
            'numberedList',
            'todoList',
            'outdent',
            'indent',
            'link',
            'insertTable',
            'uploadImage',
          ],
        },
      }}
      data={editorData}
      onChange={handleEditorChange}
    />
  )
}

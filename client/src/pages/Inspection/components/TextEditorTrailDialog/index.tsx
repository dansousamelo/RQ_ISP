import { TextEditor } from '../../../../components/TextEditor'

interface TextEditorTrailDialogProps {
  editorData: string
  setEditorData: React.Dispatch<React.SetStateAction<string>>
}

export function TextEditorTrailDialog({
  editorData,
  setEditorData,
}: TextEditorTrailDialogProps) {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData()

    setEditorData(data)
  }

  return (
    <TextEditor
      editorData={editorData}
      handleEditorChange={handleEditorChange}
    />
  )
}

interface FileObject {
  name: string
  url: string
}

export function convertToCustomFormat(
  files: FileObject[],
): { fileName: string; fileUrl: string; fileType: string }[] {
  return files.map((file) => {
    return {
      fileName: file.name,
      fileUrl: file.url,
      fileType: 'application/pdf',
    }
  })
}

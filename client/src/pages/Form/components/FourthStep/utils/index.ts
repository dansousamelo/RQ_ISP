interface FileObject {
  name: string
  url: string
}

export function convertToCustomFormat(
  files: FileObject[],
): { name: string; url: string; type: string }[] {
  return files.map((file) => {
    return {
      name: file.name,
      url: file.url,
      type: 'application/pdf',
    }
  })
}

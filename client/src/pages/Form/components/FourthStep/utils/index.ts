interface FileObject {
  name: string
  url: string
  s3Name: string
}

export function convertToCustomFormat(
  files: FileObject[],
): { name: string; url: string; type: string }[] {
  return files.map((file) => {
    return {
      name: file.name,
      s3Name: file.s3Name,
      url: file.url,
      type: 'application/pdf',
    }
  })
}

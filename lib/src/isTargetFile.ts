export function isTargetFile(value: string) {
  return (fileName: string) => {
    if (fileName.match('_app.tsx|_document.tsx|_error.tsx')) return false
    return fileName.indexOf(value) !== -1
  }
}

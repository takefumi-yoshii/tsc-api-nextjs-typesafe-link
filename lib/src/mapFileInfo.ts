import { FileInfo } from './type'
// ______________________________________________________
//
export function mapFileInfo(src: string, dist: string) {
  return (fileName: string): FileInfo => {
    const distName = fileName.replace(src, dist)
    const distDir = distName.split('/')
    distDir.pop()
    return {
      fileName,
      distName,
      distDir: distDir.join('/'),
      pathName: fileName
        .replace(`${src}/pages`, '')
        .replace('index.tsx', ''),
      importModulePath: fileName.replace('.tsx', '')
    }
  }
}

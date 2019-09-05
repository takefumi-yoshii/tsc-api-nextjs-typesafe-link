import * as fs from 'fs-extra'
import * as path from 'path'
import { Config, config } from './config'
import { createProgram } from './createProgram'
import { isTargetFile } from './isTargetFile'
import { mapFileInfo } from './mapFileInfo'
import { createAst } from './createAst'
import { printNode } from './printNode'
import { emitFile } from './emitFile'
// ______________________________________________________
//
export function run(cliConfig: Config) {
  const conf = { ...config, ...cliConfig }
  const srcDir = path.resolve(conf.srcDir)
  const distDir = path.resolve(conf.distDir)
  const program = createProgram(path.resolve(conf.baseDir))

  function cleanUp() {
    fs.removeSync(distDir)
  }
  function emitFiles() {
    program
      .getRootFileNames() // 定義されているSRCファイルパスの文字列配列
      .filter(isTargetFile(`${srcDir}/pages`)) // pages 以下に絞り込む
      .map(mapFileInfo(srcDir, distDir)) // ファイルメタ情報をマッピング
      .map(fileInfo => {
        // ASTの構築
        const ast = createAst(
          fileInfo,
          config.getInitialPropsContextTypeName,
          config.pagesContextsTypeName,
          config.queriesTypeName
        )
        // ASTを文字列に変換
        const fileBody = printNode(ast)
        // ファイルを出力
        emitFile(
          fileInfo.distDir,
          fileInfo.distName,
          fileBody
        )
      })
  }

  cleanUp()
  emitFiles()
}

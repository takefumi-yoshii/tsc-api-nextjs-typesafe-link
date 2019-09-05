import * as ts from 'typescript'
import { FileInfo } from './type'
export const createAst = (
  fileInfo: FileInfo,
  getInitialPropsContextType: string,
  pagesContextsType: string,
  queriesType: string
) => [
  ts.createImportDeclaration(
    undefined,
    undefined,
    undefined,
    ts.createStringLiteral('next')
  ),
  ts.createImportDeclaration(
    undefined,
    undefined,
    ts.createImportClause(
      ts.createIdentifier('Page'),
      undefined
    ),
    ts.createStringLiteral(fileInfo.importModulePath)
  ),
  ts.createModuleDeclaration(
    undefined,
    [ts.createModifier(ts.SyntaxKind.DeclareKeyword)],
    ts.createStringLiteral('next'),
    ts.createModuleBlock([
      ts.createInterfaceDeclaration(
        undefined,
        [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.createIdentifier(pagesContextsType),
        undefined,
        undefined,
        [
          ts.createPropertySignature(
            undefined,
            ts.createStringLiteral(fileInfo.pathName),
            undefined,
            ts.createTypeReferenceNode(
              ts.createIdentifier(
                getInitialPropsContextType
              ),
              [
                ts.createTypeQueryNode(
                  ts.createIdentifier('Page')
                )
              ]
            ),
            undefined
          )
        ]
      ),
      ts.createInterfaceDeclaration(
        undefined,
        [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.createIdentifier(queriesType),
        undefined,
        undefined,
        [
          ts.createPropertySignature(
            undefined,
            ts.createStringLiteral(fileInfo.pathName),
            undefined,
            ts.createIndexedAccessTypeNode(
              ts.createIndexedAccessTypeNode(
                ts.createTypeReferenceNode(
                  ts.createIdentifier(pagesContextsType),
                  undefined
                ),
                ts.createLiteralTypeNode(
                  ts.createStringLiteral(fileInfo.pathName)
                )
              ),
              ts.createLiteralTypeNode(
                ts.createStringLiteral('query')
              )
            ),
            undefined
          )
        ]
      )
    ]),
    ts.NodeFlags.ContextFlags
  )
]

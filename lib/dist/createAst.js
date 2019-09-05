"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
exports.createAst = function (fileInfo, getInitialPropsContextType, pagesContextsType, queriesType) { return [
    ts.createImportDeclaration(undefined, undefined, undefined, ts.createStringLiteral('next')),
    ts.createImportDeclaration(undefined, undefined, ts.createImportClause(ts.createIdentifier('Page'), undefined), ts.createStringLiteral(fileInfo.importModulePath)),
    ts.createModuleDeclaration(undefined, [ts.createModifier(ts.SyntaxKind.DeclareKeyword)], ts.createStringLiteral('next'), ts.createModuleBlock([
        ts.createInterfaceDeclaration(undefined, [ts.createModifier(ts.SyntaxKind.ExportKeyword)], ts.createIdentifier(pagesContextsType), undefined, undefined, [
            ts.createPropertySignature(undefined, ts.createStringLiteral(fileInfo.pathName), undefined, ts.createTypeReferenceNode(ts.createIdentifier(getInitialPropsContextType), [
                ts.createTypeQueryNode(ts.createIdentifier('Page'))
            ]), undefined)
        ]),
        ts.createInterfaceDeclaration(undefined, [ts.createModifier(ts.SyntaxKind.ExportKeyword)], ts.createIdentifier(queriesType), undefined, undefined, [
            ts.createPropertySignature(undefined, ts.createStringLiteral(fileInfo.pathName), undefined, ts.createIndexedAccessTypeNode(ts.createIndexedAccessTypeNode(ts.createTypeReferenceNode(ts.createIdentifier(pagesContextsType), undefined), ts.createLiteralTypeNode(ts.createStringLiteral(fileInfo.pathName))), ts.createLiteralTypeNode(ts.createStringLiteral('query'))), undefined)
        ])
    ]), ts.NodeFlags.ContextFlags)
]; };

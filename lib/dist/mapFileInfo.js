"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function mapFileInfo(src, dist) {
    return function (fileName) {
        var distName = fileName.replace(src, dist);
        var distDir = distName.split('/');
        distDir.pop();
        return {
            fileName: fileName,
            distName: distName,
            distDir: distDir.join('/'),
            pathName: fileName
                .replace(src + "/pages", '')
                .replace('index.tsx', ''),
            importModulePath: fileName.replace('.tsx', '')
        };
    };
}
exports.mapFileInfo = mapFileInfo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTargetFile(value) {
    return function (fileName) {
        if (fileName.match('_app.tsx|_document.tsx|_error.tsx'))
            return false;
        return fileName.indexOf(value) !== -1;
    };
}
exports.isTargetFile = isTargetFile;

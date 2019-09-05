"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs-extra"));
var path = __importStar(require("path"));
var config_1 = require("./config");
var createProgram_1 = require("./createProgram");
var isTargetFile_1 = require("./isTargetFile");
var mapFileInfo_1 = require("./mapFileInfo");
var createAst_1 = require("./createAst");
var printNode_1 = require("./printNode");
var emitFile_1 = require("./emitFile");
// ______________________________________________________
//
function run(cliConfig) {
    var conf = __assign({}, config_1.config, cliConfig);
    var srcDir = path.resolve(conf.srcDir);
    var distDir = path.resolve(conf.distDir);
    var program = createProgram_1.createProgram(path.resolve(conf.baseDir));
    function cleanUp() {
        fs.removeSync(distDir);
    }
    function emitFiles() {
        program
            .getRootFileNames() // 定義されているSRCファイルパスの文字列配列
            .filter(isTargetFile_1.isTargetFile(srcDir + "/pages")) // pages 以下に絞り込む
            .map(mapFileInfo_1.mapFileInfo(srcDir, distDir)) // ファイルメタ情報をマッピング
            .map(function (fileInfo) {
            // ASTの構築
            var ast = createAst_1.createAst(fileInfo, config_1.config.getInitialPropsContextTypeName, config_1.config.pagesContextsTypeName, config_1.config.queriesTypeName);
            // ASTを文字列に変換
            var fileBody = printNode_1.printNode(ast);
            // ファイルを出力
            emitFile_1.emitFile(fileInfo.distDir, fileInfo.distName, fileBody);
        });
    }
    cleanUp();
    emitFiles();
}
exports.run = run;

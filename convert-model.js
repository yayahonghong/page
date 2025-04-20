// convert-model.js
const fs = require("fs");

// 读取 model.json
const modelJson = fs.readFileSync("./static/model/model.json", "utf-8");
const modelData = JSON.parse(modelJson);

// 生成 JS 文件
const jsContent = `window.MODEL_DATA = ${JSON.stringify(modelData, null, 2)};`;
fs.writeFileSync("./static/model/model-data.js", jsContent);

console.log("✅ 转换完成！");
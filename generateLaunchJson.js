const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname); // 루트 디렉토리 기준
const launchFilePath = path.join(baseDir, '.vscode', 'launch.json');
const vscodeDir = path.join(baseDir, '.vscode');

// index.html이 있는 경로 찾기
function findHtmlPaths(dir, result = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlPaths(fullPath, result);
    } else if (file === 'index.html') {
      result.push(fullPath);
    }
  }
  return result;
}

const htmlPaths = findHtmlPaths(baseDir);
const configurations = htmlPaths.map((fullPath) => {
  const relative = path.relative(baseDir, fullPath);
  return {
    name: `Launch - ${relative}`,
    type: 'chrome',
    request: 'launch',
    file: "${workspaceFolder}/" + relative.replace(/\\/g, "/"),
    webRoot: "${workspaceFolder}"
  };
});

// .vscode 디렉토리 생성
if (!fs.existsSync(vscodeDir)) fs.mkdirSync(vscodeDir);

fs.writeFileSync(
  launchFilePath,
  JSON.stringify({ version: "0.2.0", configurations }, null, 2),
  'utf8'
);

console.log(`launch.json generated with ${configurations.length} configurations.`);

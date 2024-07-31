const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);

// 新建博客命名，这里以年月日时分秒命名，可自定义修改
function getCreateTimeAsFileName() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var time = year + "-" + month + "-" + day + "day" + hour + "h" + minute + "m" + second + "s";

  return time;
}

// 执行命令函数
async function executeCommand() {
  const fileName = getCreateTimeAsFileName() + ".md";
  const hugoPath = "D:\\hugo\\bin\\hugo.exe"; // 替换为hugo的实际路径
  const { stdout, stderr } = await exec(`${hugoPath} new posts/${fileName}`, {
    cwd: app.fileManager.vault.adapter.basePath,
  });
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  if (stdout) {
    new Notice("New Blog Created[" + fileName + "]");
  } else {
    new Notice("New Blog Create Failed. " + stderr);
  }
}

module.exports = async function (context, req) {
  await executeCommand();
};
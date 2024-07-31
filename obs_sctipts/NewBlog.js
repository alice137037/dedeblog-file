const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);

// �½�����������������������ʱ�������������Զ����޸�
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

// ִ�������
async function executeCommand() {
  const fileName = getCreateTimeAsFileName() + ".md";
  const hugoPath = "D:\\hugo\\bin\\hugo.exe"; // �滻Ϊhugo��ʵ��·��
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
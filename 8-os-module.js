const os = require("os");

//* Info about current info
const info = os.userInfo();

//* Uptime of computer in seconds
console.log(os.uptime());

console.log(info);

const currentOS = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

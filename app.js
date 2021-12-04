const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(`The size of chunk is ${chunk.length} bytes`);
});

stream.on("error", (err) => console.log(err));

//* default buffer size is 64kb
//* To set your own buffer size -> const stream = createReadStream("./content/big.txt",{ highWaterMark: 90000 });

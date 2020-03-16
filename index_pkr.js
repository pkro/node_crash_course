const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    const myFile = path.join(__dirname, "pkr_serveme.txt");
    const fileContent = fs.readFile(myFile, (err, data) => {
      if (err) throw err;
      res.write(data);
      res.write("\t");
      res.write(JSON.stringify(req.headers));
      res.end();
    });
  })
  .listen(5000, () => console.log("server running"));

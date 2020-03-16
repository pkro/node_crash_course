const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    serveFile(res, 'index.html');
  }
  else if (req.url === "/about") {
    serveFile(res, 'about.html');
  }
});

const serveFile = (res, file) => {
    fs.readFile(path.join(__dirname, "public", file), (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
}
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));

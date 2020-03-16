const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          "utf8",
          (err, data) => {
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(data);
            res.end();
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.write(data);
      res.end();
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));

/*if (req.url === "/") {
    serveFile(res, "index.html");
  } else if (req.url === "/about") {
    serveFile(res, "about.html");
  } else if (req.url === "/api/users") {
    const users = [
      {
        name: "Bobby",
        age: 40
      },
      {
        name: "Brown",
        age: 50
      },
      {
        name: "Going down",
        age: 60
      }
    ];

    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(users));
  }
});

const serveFile = (res, file) => {
  fs.readFile(path.join(__dirname, "public", file), (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(data);
    res.end();
  });*/

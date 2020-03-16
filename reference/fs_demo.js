const fs = require("fs");
const path = require("path");

// create folder, async
fs.mkdir(path.join(__dirname, "test"), err => {
  console.log(err || "dir created");
});

// Create & write to file
fs.writeFile(path.join(__dirname, "test", "hello.txt"), "yip", err => {
  if (err) {
    throw err;
  }
  console.log("file created");
  fs.appendFile(path.join(__dirname, "test", "hello.txt"), " yup", err => {
    if (err) {
      throw err;
    }
    console.log("appended text to hello.txt");
    logFileContent();
  });
});

// Read file
// asynchonous! Possibly this file doesn't exist or has all the data yet
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// "better":
const logFileContent = () => {
  fs.readFile(
    path.join(__dirname, "test", "hello.txt"),
    "utf8",
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
      renameFile();
    }
  );
};

// rename file
const renameFile = () => {
  fs.rename(
    path.join(__dirname, "test", "hello.txt"),
    path.join(__dirname, "test", "helloworld.txt"),
    err => {
      if (err) {
        throw err;
      }
      console.log("file renamed");
    }
  );
};

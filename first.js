console.log("Bugs");

const fs = require("fs");
fs.writeFile("output.txt", "writing File", (err) => {
  if (err) console.log("Error occured");
  else console.log("File Written successfully");
});

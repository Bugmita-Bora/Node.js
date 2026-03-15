const http = require("http");

const server = http.createServer((req, res) => {
  console.log;
});
const Port = 3003;

server.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
//"start":ye add kia package.json mein to abhi terminal mein npm start v likhskte h direct
// npm run khulja-sim-sim
// npm start

// PS D:\Desktop\Node> cd npm_tools
// PS D:\Desktop\Node\npm_tools> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (npm_tools) npm-test
// version: (1.0.0)
// description: This project is being created to learn about npm
// entry point: (app.js)
// test command:
// git repository:
// keywords:
// author: Bugmita
// license: (ISC)
// type: (commonjs)
// About to write to D:\Desktop\Node\npm_tools\package.json:

// {
//   "name": "npm-test",
//   "version": "1.0.0",
//   "description": "This project is being created to learn about npm",
//   "main": "app.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Bugmita",
//   "license": "ISC",
//   "type": "commonjs"
// }

// Is this OK? (yes) yes
